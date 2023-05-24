import { Button } from '@mui/material'
import React, { useState } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { ADMIN_STORAGE_KEY } from '../../../config/helpers/variables';
import Page from '../../../components/Page/Page';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import useUsers from '../../../hooks/useUsers';
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';
import { useNavigate } from 'react-router-dom';

function AdminProfileView() {
  const admin = JSON.parse(sessionStorage.getItem(ADMIN_STORAGE_KEY));
  const [profile, setProfile] = useState(admin?.data)
  const [errorMessage, setErrorMessage] = useState();
  const { updateAdminUser } = useUsers();
  const navigate = useNavigate();
  console.warn(profile)

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await updateAdminUser(profile);
    
    if (response.status < 300) {
      navigate("/admin/signin")
    } else if (response.status > 300) {
      setErrorMessage(response.message);
    }
  }
  return (
 
    <Page>
      <AlertMessage errorMessage={errorMessage} />
      <section className='userProfileView'>
        <div className='userProfileView__top'>
          <div className='userProfileView__top__left'>
            < PersonOutlineOutlinedIcon className='userProfileView__top__left__icon' />
            <p>Admin Profile</p>
          </div>
          <div className='userProfileView__top__right'>
            <Button onClick={(e) => handleSubmit(e)}><SaveOutlinedIcon className='userProfileView__top__right__icon' />
              Save changes</Button>
          </div>
        </div>
        <div className='userProfileView__container'>
          <header className='userProfileView__container__header'>
            <div className='userProfileView__container__header__iconBox'>
              < PersonOutlineOutlinedIcon lassName='userProfileView__container__header__iconBox__icon' />
              <p>Admin Profile</p>
            </div>
          </header>
          <div className='userProfileView__container__details'>
            <div className='userProfileView__container__details__detailsBox'>
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
            </div>
           
              <div className='userProfileView__container__details__detailsBox'>
                <div><input
                  type="text"
                  placeholder='Address'
                  value={profile?.company_address}
                  onChange={(e) => setProfile({ ...profile, company_address: e.target.value })}
                />
                </div>
                <div><input
                    type="text"
                    placeholder='Company name'
                    value={profile?.company_name}
                    onChange={(e) => setProfile({ ...profile, company_name: e.target.value })}
                  />
                  </div>
              </div>
                
                <div className='userProfileView__container__details__detailsBox'>
                  <div><input
                    type="text"
                    placeholder='Company KRS number'
                    onChange={(e) => setProfile({ ...profile, company_krs_number: e.target.value })}
                    value={profile?.company_krs_number}
                  />
                  </div>
                </div>
              
        
            <div className='userProfileView__container__details__detailsBox'>
              <div><input
                type="text"
                value={profile?.phone_number}
                onChange={(e) => setProfile({ ...profile, phone_number: e.target.value })}
                placeholder='Phone number' />
              </div>
              <div><input
                type="text"
                value={profile?.email}
                disabled="true"
              />
              </div>
            </div>
            <div className='userProfileView__container__details__detailsBox'>
              <div><input
                type="password"
                placeholder='Password'
                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
              />
              </div>
              <div>
                <input
                  type="password"
                  placeholder='Confirm password'
                  onChange={(e) => setProfile({ ...profile, confirm_password: e.target.value })}
                  autoComplete='off'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
 
  )
}

export default AdminProfileView