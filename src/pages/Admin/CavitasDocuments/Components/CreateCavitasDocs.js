import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useCavitasDocs from '../../../../hooks/useCavitasDocs';

const CreateCavitasDocs = ({setSuccessMessage, setErrorMessage, fetchCavitasDocs}) => {
    const { createCavitasDocs } = useCavitasDocs();
    const [open, setOpen] = useState(false);
    const [cavitasDocs, setCavitasDocs] = useState({
        title: "",
        valid_date: "",
        document: "",
    });

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

    const handleChange = e => {
        const { name, value } = e.target;
        setCavitasDocs({
            ...cavitasDocs, [name]: name !== "document" ? value : e.target.files[0]
        });
    };

    const handleOpen = () => { setOpen(true)}
    const handleClose = () => { setOpen(false)}

    const handleSubmit = async e => {
        e.preventDefault();
        let data = {
            ...cavitasDocs,
        };
        const response = await createCavitasDocs(data);
        if (response.status < 300) {
            setSuccessMessage("Created Successfully!")
            handleClose();
            fetchCavitasDocs();

        } else if (response.status > 300) {
            setErrorMessage(response.message);
        }
    }


    return (
        <>
            <Button color='success' variant='contained' size='small' style={{ color: "white !important" }} onClick={handleOpen}>Create</Button>
            <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Cavitas Docs
            </Typography>
            <div className='uploadClient__container__body__participation'>
                <div className='uploadClient__container__body__participation'>
                    <p>Add Title</p>
                    <input
                        className='uploadClient__container__body__participation__headInput'
                        type='text'
                        placeholder='Title'
                        name="title"
                        value={cavitasDocs?.title}
                        onChange={(e) => handleChange(e)}
                        required={true}
                    />
                </div>
                <div className='uploadClient__container__body__participation'>
                    <p>Add Valid Date</p>
                    <input
                        className='uploadClient__container__body__participation__headInput'
                        type='date'
                        placeholder='Name of insurance broker company'
                        name="valid_date"
                        onChange={(e) => handleChange(e)}
                        value={cavitasDocs?.valid_date}
                        required={true}
                    />
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
              <div className="uploadClient__container__body__participation_submit_button" >
                <Button color='success' variant='contained' size='small' style={{ color: "white" }} onClick={(e) => handleSubmit(e)}>submit</Button>
                <Button color='primary' variant='outlined' size='small'  onClick={() => handleClose()}><span style={{color: "blue"}}>Cancel</span></Button>
              </div>
            </div>
          </Box>
        </Modal>
        </>
    )
}

export default CreateCavitasDocs