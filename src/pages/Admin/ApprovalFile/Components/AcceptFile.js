import React, {useState} from 'react'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import useClientInsurance from '../../../../hooks/useClientInsurance';
import AlertMessage from '../../../../components/SnackbarMessages/AlertMessage';
import SuccessMessage from '../../../../components/SnackbarMessages/SuccessMessage';
import { Button } from '@mui/material'

function AcceptFile({client_id, getClientInsurance}) {
    const infoID = client_id;
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const { updateClientInsuranceAdmin } = useClientInsurance();
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleUpdate = async (infoID) => {

        const response = await updateClientInsuranceAdmin(infoID)
        if (response?.status > 300 ){
          setErrorMessage(response?.message)

          setTimeout(() => {
            setErrorMessage("");
          }, 5000);
          
        } else if (response?.status < 300){
          setSuccessMessage("File Approved!");
          setOpen(false);
          getClientInsurance();
        }
      }

  return (
    <div>
        <AlertMessage errorMessage={errorMessage} />
        <SuccessMessage successMessage={successMessage} />
        <Button color='success' variant='outlined' size='small' onClick={handleOpen}>Approve</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Do You want to approve this file?
            </Typography>
            <div className='uploadClient__container__body__participation'>
              <div className="uploadClient__container__body__participation_submit_button" style={{display: "flex", justifyContent: "end"}}>
                <Button color='success' variant='contained' size='small' style={{ color: "white" }} onClick={() => handleUpdate(infoID)}>Approve</Button>
                <Button color='primary' variant='outlined' size='small' style={{ color: "blue" }} onClick={() => handleClose()}>Cancel</Button>
              </div>
            </div>
          </Box>
        </Modal>
    </div>
  )
}

export default AcceptFile
