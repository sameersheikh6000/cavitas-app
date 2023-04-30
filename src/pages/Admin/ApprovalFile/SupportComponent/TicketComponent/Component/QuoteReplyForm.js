import React, {useState} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button } from '@mui/material'
import useQuoteReply from '../../../../../../hooks/useQuoteReply';

function QuoteReplyForm({quoteFormDetail, getQuoteFormDetail, setErrorMessage, setSuccessMessage}) {
   
    const [open, setOpen] = useState(false);
    const {createReply} = useQuoteReply();
    const [replyText, setReplyText] = useState();
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 14,
        borderRadius: 5,
        p: 4,
      };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    debugger
    const response = await createReply(quoteFormDetail, replyText)
    if(response?.status < 300){
      setSuccessMessage("Successfully Replied!")
      getQuoteFormDetail();
      handleClose();
    }else if (response?.status > 300){
      setErrorMessage(response?.message)
    }

  }

  return (
    <div>
        <Button color='error' variant='contained' size='small' style={{ color: "white !important" ,margin: "5px" }} onClick={() => handleOpen()}>Reply</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className='uploadClient__container__body__participation'>
                <div  style={{width: "100%"}}>
                    <label>Reply:</label>
                    <br/>
                    <textarea
                            className="textarea"
                            placeholder="Your text here                 "
                            cols={27}
                            rows={5}
                            onChange={(e) => setReplyText(e.target.value)}
                        />
                </div>
              <div className="uploadClient__container__body__participation_delete_user_button_container">
                <Button color='error' variant='contained' size='small' style={{ color: "white" }} onClick={() => handleSubmit()}>Reply</Button>
                <Button color='success' variant="outlined" size='small' style={{ color: "black" }} onClick={() => handleClose()}>cancel</Button>
              </div>
            </div>
          </Box>
        </Modal>
    </div>
  )
}

export default QuoteReplyForm