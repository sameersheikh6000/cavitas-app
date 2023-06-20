import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import useClientInsurance from '../../../../hooks/useClientInsurance';

const ExportCsv = ({setErrorMessage, setSuccessMessage}) => {
    const {exportCsv} = useClientInsurance();
    const [duration, setDuration] = useState({
        from: "",
        to: ""
    })
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
  const handleClose = () => {
    setDuration({...duration, from: "", to: ""})
    setOpen(false);
}

  const handleExport = async () => {
    const response = await exportCsv(duration)
    if(response?.status < 300 && response?.data !== "") {
        setSuccessMessage("Exported Successfully!")
        handleClose();
        const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'insured_clients.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else if(response?.data === ""){
        handleClose();
        setErrorMessage("Please Select the Correct date");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
    }
  }

    return (
        <div>
            <Button color='error' variant='outlined' size='small' style={{ color: "white !important", marginLeft: "15px"}} onClick={() => handleOpen()}>Export CSV</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className='userProfileView__container__details'>
                    <div className='userProfileView__container__details__detailsBox'>
                        <div className='userProfileView__container__details__detailsBox__feilds__container'>
                            <p style={{textAlign: "center", width: "100%", fontWeight: "bold", fontSize: "1rem"}}>Select CSV duration:</p>
                            <div>
                                <label>From:</label>
                                <input
                                type="date"
                                value={duration?.from}

                                onChange={(e) => setDuration({ ...duration, from: e.target.value })}
                            /></div>
                            <div>
                                <label>To:</label>
                                <input
                                type="date"

                                value={duration?.to}
                                onChange={(e) => setDuration({ ...duration, to: e.target.value })}
                                />
                            </div>

                            <span style={{color: "red", textAlign: "center", marginTop: "10px"}}>In case you don't give FROM or TO Date then whole data will be exported to csv file</span>
                            <div className="uploadClient__container__body__participation_delete_user_button_container">
                                <Button color='error' variant='contained' size='small' style={{ color: "white" }} onClick={() => handleExport()}>Export</Button>
                                <Button color='primary' variant="outlined" size='small' style={{ color: "black" }} onClick={() => handleClose()}>cancel</Button>
                            </div>
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
        </div>
      )
}

export default ExportCsv
