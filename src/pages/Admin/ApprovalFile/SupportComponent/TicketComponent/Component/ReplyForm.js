import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useReplyForm from "../../../../../../hooks/useReplyForm";
import CircularProgress from "@mui/material/CircularProgress";

function ReplyForm({
  contactFormId,
  email,
  getContactDetail,
  setErrorMessage,
  setSuccessMessage,
}) {
  const [open, setOpen] = useState(false);
  const { createReply } = useReplyForm();
  const [isLoading, setIsLoading] = useState(false)
  const [contactReply, setContactReply] = useState({
    reply_text: "",
    contact_form_id: contactFormId,
    attached_file: "",
    reply_to: email,
  });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    borderRadius: 5,
    bgcolor: "#edf4f4",
    // border: '2px solid #000',
    boxShadow: 14,
    p: 4,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    setIsLoading(true)
    const response = await createReply(contactReply);
    if (response?.status < 300) {
      setIsLoading(false)
      setSuccessMessage("Successfully Replied!");
      getContactDetail();
      handleClose();
    } else if (response?.status > 300) {
      setIsLoading(false)
      setErrorMessage(response?.message);

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <div>
      <Button
        color="error"
        variant="contained"
        size="small"
        style={{ color: "white !important", margin: "5px" }}
        onClick={() => handleOpen()}
      >
        Reply
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="uploadClient__container__body__participation">
            <div style={{ width: "100%" }}>
              <h3>Reply :</h3>
              <textarea
                style={{
                  width: "100%",
                  margin: "8px",
                  padding: "5px",
                  background: "none",
                  borderRadius: "15px",
                }}
                className="textarea"
                placeholder="Your text here"
                onChange={(e) =>
                  setContactReply({
                    ...contactReply,
                    reply_text: e.target.value,
                  })
                }
              />

              <input
                type="file"
                onChange={(e) =>
                  setContactReply({
                    ...contactReply,
                    attached_file: e.target.files[0],
                  })
                }
              />
            </div>
            <div className="uploadClient__container__body__participation_delete_user_button_container">
              <Button
                color="error"
                variant="contained"
                size="small"
                disabled={isLoading}
                style={{ color: "white" }}
                onClick={() => handleSubmit()}
              >
                {!isLoading ? 
                    'Reply'
                  :
                    <CircularProgress 
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "white",
                      }}
                    />
                }
              </Button>
              <Button
                color="success"
                variant="outlined"
                size="small"
                style={{ color: "black" }}
                onClick={() => handleClose()}
              >
                cancel
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ReplyForm;
