import React, {useState, useEffect} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import useUsers from '../../../../hooks/useUsers';

function UpdateUserModal({user_id, setErrorMessage, setSuccessMessage, getUsersList}) {
    const {updateUserByAdmin, getUserByAdmin} = useUsers();
    const [open, setOpen] = useState(false);
    const [profile, setProfile] = useState()
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 750,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 14,
        p: 4,
      };


  const fetchUser = async (user_id) => {
    const response = await getUserByAdmin(user_id);
    if (response?.status < 300){
        setProfile(response?.user)
    }else if (response?.status > 300){
        setErrorMessage(response?.message);
    }

  }
    const handleOpen = () => {
        fetchUser(user_id);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

  const handleUpdate = async () => {
    const response = await updateUserByAdmin(profile)
    if(response?.status < 300) {
        setSuccessMessage("User Updated Successfully!")
        handleClose();
        getUsersList();
    } else if(response?.status > 300){
        setErrorMessage(response?.message);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])
  return (
    <div>
        <Button color='warning' variant='contained' size='small' style={{ color: "white !important" ,margin: "5px" }} onClick={() => handleOpen()}>Update</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className='uploadClient__container__body__participation'>
              <p>Update This User</p>



            <div className='userProfileView__container__details'>
            <div className='userProfileView__container__details__detailsBox'>
            <div className='userProfileView__container__details__detailsBox__feilds__container'>
                <div><input
                    type="text"
                    placeholder='First name'
                    value={profile?.first_name}
                    onChange={(e) => setProfile({ ...profile, first_name: e.target.value })}
                /></div>
                <div><input
                    type="text"
                    placeholder='Last name'
                    value={profile?.last_name}
                    onChange={(e) => setProfile({ ...profile, last_name: e.target.value })}
                />
                </div>
                <div><input
                  type="text"
                  placeholder='Company Name'
                  value={profile?.company_name}
                  onChange={(e) => setProfile({ ...profile, company_name: e.target.value })}
                />
                </div>
                <div><input
                  type="text"
                  placeholder='Company Address'
                  value={profile?.company_address}
                  onChange={(e) => setProfile({ ...profile, company_address: e.target.value })}
                />
                </div>
                <div style={{marginTop: "5px"}}><input
                    type="text"
                    placeholder='Company KRS number'
                    onChange={(e) => setProfile({ ...profile, company_krs_number: e.target.value })}
                    value={profile?.comapany_krs_number}
                  />
                  </div>
                  <div style={{marginTop: "5px"}}><input
                        type="text"
                        value={profile?.phone_number}
                        onChange={(e) => setProfile({ ...profile, phone_number: e.target.value })}
                        placeholder='Phone number' />
                    </div>
                    
                    <div style={{marginTop: "5px"}}><input
                        type="text"
                        value={profile?.company_pesel_number}
                        onChange={(e) => setProfile({ ...profile, company_pesel_number: e.target.value })}
                        placeholder='Phone number' />
                    </div>
                    <div style={{marginTop: "5px"}}><input
                        type="text"
                        value={profile?.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    />
                    </div>
                  </div>
            </div>
                
            <div className='userProfileView__container__details__detailsBox'>
            <div className='userProfileView__container__details__detailsBox__feilds__container'>
              <div><input
                type="text"
                placeholder='Password'
                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
              />
              </div>
              <div>
                <input
                  type="text"
                  placeholder='Confirm password'
                  onChange={(e) => setProfile({ ...profile, confirm_password: e.target.value })}
                />
              </div>
              </div>
            </div>
          </div>
              <div className="uploadClient__container__body__participation_delete_user_button_container">
                <Button color='success' variant='contained' size='small' style={{ color: "white" }} onClick={() => handleUpdate()}>Update</Button>
                <Button color='primary' variant="outlined" size='small' style={{ color: "black" }} onClick={() => handleClose()}>cancel</Button>
              </div>
            </div>
          </Box>
        </Modal>
    </div>
  )
}

export default UpdateUserModal