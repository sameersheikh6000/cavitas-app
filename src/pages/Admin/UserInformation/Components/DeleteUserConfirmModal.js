import React, {useState} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button } from '@mui/material'

function DeleteUserConfirmModal({user_id, getUsersList, setErrorMessage, deleteUserByAdmin}) {
    const userId = user_id;
    const [open, setOpen] = useState(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 14,
        p: 4,
      };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async (id) => {
    const response = await deleteUserByAdmin(id)
    if(response?.status < 300){
      setErrorMessage("User Deleted Successfully!")
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      getUsersList();
      handleClose();
    }else if (response?.status > 300){
      setErrorMessage(response?.message)
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }

  }

  return (
    <div>
        <Button color='error' variant='contained' size='small' style={{ color: "white !important" ,margin: "5px" }} onClick={() => handleOpen()}>Delete</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className='uploadClient__container__body__participation'>
              <p>Are You Sure To Delete This User?</p>
              <div className="uploadClient__container__body__participation_delete_user_button_container">
                <Button color='error' variant='contained' size='small' style={{ color: "white" }} onClick={() => handleDelete(userId)}>Delete</Button>
                <Button color='success' variant="outlined" size='small' style={{ color: "black" }} onClick={() => handleClose()}>cancel</Button>
              </div>
            </div>
          </Box>
        </Modal>
    </div>
  )
}

export default DeleteUserConfirmModal
