import React, {useState} from 'react'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import useClientInsurance from '../../../../hooks/useClientInsurance';
import AlertMessage from '../../../../components/SnackbarMessages/AlertMessage';
import { Button } from '@mui/material'

function ClientInfoUpdate({client_id, getClientInsurance}) {
    const infoID = client_id;
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState();
    const [errorMessage, setErrorMessage] = useState(null);
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
    const handleChange = (e) => {
        setFile( e.target.files[0] )
    }

    const handleUpdate = async (infoID) => {

        const response = await updateClientInsuranceAdmin(infoID, file)
        if (response?.status > 300 ){
          setErrorMessage(response?.message)
          setTimeout(() => {
            setErrorMessage("");
          }, 5000);
        } else if (response?.status < 300){
          setOpen(false);
          getClientInsurance();
        }
      }

  return (
    <div>
        <AlertMessage errorMessage={errorMessage} />
        <Button color='success' variant='contained' size='small' style={{ color: "white !important" }} onClick={handleOpen}>update</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <div className='uploadClient__container__body__participation'>
              <p>Please upload the group census as spreadsheet (.xls or .csv)</p>
              <div className='uploadClient__container__body__participation__fileUpload'>
                <label for="file-input">
                  <FileUploadOutlinedIcon className='uploadClient__container__body__participation__fileUpload__icon' />
                  Upload file
                </label>
                <input id="file-input" type="file"
                  onChange={(e) => handleChange(e)}
                  name="file"
                  required={true}
                />
              </div>
              <div className="uploadClient__container__body__participation_submit_button">
                <Button color='success' variant='contained' size='small' style={{ color: "white" }} onClick={() => handleUpdate(infoID)}>submit</Button>
              </div>
            </div>
          </Box>
        </Modal>
    </div>
  )
}

export default ClientInfoUpdate
