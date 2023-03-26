import React, {useState, useEffect} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import useCavitasDocs from '../../../../hooks/useCavitasDocs';

function UpdateCavitasDocs({cavitasDocs_id, setSuccessMessage, setErrorMessage, fetchCavitasDocs }) {
    const {updateCavitasDocs, getCavitasDocsById} = useCavitasDocs();
    const [open, setOpen] = useState(false);
    const [cavitasDocsUpdate, setCavitasDocsUpdate] = useState();
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

    const fetchCavitasDocsById = async () => {
      debugger
      const response = await getCavitasDocsById(cavitasDocs_id);
      if (response?.status < 300){
        setCavitasDocsUpdate(response?.cavitas_document)
      }else if (response?.status > 300){
          setErrorMessage(response?.message);
      }

    }
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setCavitasDocsUpdate({
            ...cavitasDocsUpdate, [name]: name !== "document" ? value : e.target.files[0]
        });
    };

  const handleUpdate = async () => {
    const response = await updateCavitasDocs(cavitasDocsUpdate);
    if(response?.status < 300) {
        setSuccessMessage("Docs Updated Successfully!");
        fetchCavitasDocs();
        handleClose();
    } else if(response?.status > 300){
        setErrorMessage(response?.message);
    }
  }

  useEffect(() => {
    fetchCavitasDocsById();
  }, [])

  return (
    <div>
        <Button color='success' variant='outlined' size='small' style={{ margin: "5px" }} onClick={() => handleOpen()}><span style={{color: "green"}}>Update</span></Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className='uploadClient__container__body__participation'>
              <p>Update This Docs</p>



            <div className='userProfileView__container__details'>
            <div className='userProfileView__container__details__detailsBox'>
            <div className='userProfileView__container__details__detailsBox__feilds__container'>
                <div><input
                    type="text"
                    placeholder='Title'
                    name="title"
                    value={cavitasDocsUpdate?.title}
                    omChange={(e) => handleChange(e)}
                /></div>
                <div><input
                    type="date"
                    placeholder='Valid Date'
                    name='valid date'
                    value={cavitasDocsUpdate?.valid_date}
                    omChange={(e) => handleChange(e)} />
                </div>
                <div className='uploadClient__container__body__participation'>
                    <p>Please upload the Cavitas Documents (.pdf)</p>
                    <div className='uploadClient__container__body__participation__fileUpload'>
                        <label for="file-input">
                            <FileUploadOutlinedIcon className='uploadClient__container__body__participation__fileUpload__icon' />
                            Upload file
                        </label>
                        <input id="file-input" type="file"
                            name="document"
                            required={true}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
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

export default UpdateCavitasDocs