import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useQuoteReply from "../../../../../../hooks/useQuoteReply";

function QuoteReplyForm({
  quoteFormId,
  email,
  getQuoteFormDetail,
  setErrorMessage,
  setSuccessMessage,
}) {
  const [open, setOpen] = useState(false);
  const { createReply } = useQuoteReply();
  const [quoteReply, setQuoteReply] = useState({
    reply_text: "",
    quote_form_id: quoteFormId,
    attachment: "",
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
    ;
    const response = await createReply(quoteReply);
    if (response?.status < 300) {
      setSuccessMessage("Successfully Replied!");
      getQuoteFormDetail();
      handleClose();
    } else if (response?.status > 300) {
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
              <h3>Reply:</h3>
              <textarea
                className="textarea"
                placeholder="Your text here                 "
                style={{
                  width: "100%",
                  margin: "8px",
                  padding: "5px",
                  background: "none",
                  borderRadius: "15px",
                }}
                onChange={(e) =>
                  setQuoteReply({ ...quoteReply, reply_text: e.target.value })
                }
              />

              <input
                type="file"
                onChange={(e) =>
                  setQuoteReply({
                    ...quoteReply,
                    attachment: e.target.files[0],
                  })
                }
              />
            </div>
            <div className="uploadClient__container__body__participation_delete_user_button_container">
              <Button
                color="error"
                variant="contained"
                size="small"
                style={{ color: "white" }}
                onClick={() => handleSubmit()}
              >
                Reply
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

export default QuoteReplyForm;
