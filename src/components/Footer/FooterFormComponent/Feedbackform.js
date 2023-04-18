import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

function FeedbackForm() {
  const [open, setOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 750,
    bgcolor: "#edf4f4",
    boxShadow: 14,
    p: 4,
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        style={{
          color: "white",
          textTransform: "math-auto",
          margin: -7,
          textDecoration: "none",
        }}
        onClick={() => handleOpen()}
      >
   Give Us Feedback
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="uploadClient__container__body__participation">
            <h2>Contact Cavitas</h2>
            <h1 style={{ color: "red" }}>Start conversation with us</h1>

            <div className="userProfileView__container__details">
              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div>
                    <input type="text" placeholder="First name" />
                  </div>
                  <div>
                    <input type="text" placeholder="Last name" />
                  </div>

                  <div style={{ marginTop: "5px" }}>
                    <select className="select">
                      <option>I am ....*</option>
                      <option>Broker</option>
                      <option>Employer</option>
                      <option>Member</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div style={{ marginTop: "5px" }}>
                    <select className="select">
                      <option>I want to .... *</option>
                      <option>Contact for cooperation</option>
                      <option>Ask a question</option>
                      <option>Submit a complaint</option>
                      <option>Give feedback</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div>
                    <textarea
                      className="textarea"
                      placeholder="Your text here                 "
                      cols={10}
                      rows={5}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <Button
              style={{ marginLeft: "300px" }}
              className="authentication__container__formContainer__form__loginButton_Form"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default FeedbackForm;
