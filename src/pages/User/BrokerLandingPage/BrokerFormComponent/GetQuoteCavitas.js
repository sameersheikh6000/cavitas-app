import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useQuoteForm from '../../../../hooks/useQuoteForm';

function GetQuoteCavitas() {
  const { createQuote } = useQuoteForm();
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
        name: "",
        email: "",
        identity: "",
        companyName: "",
        groupName: "",
        numberOfEmploy: "",
        inceptionDate: "",
        description: "",
      });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: 10,
    transform: "translate(-50%, -50%)",
    width: 750,
    bgcolor: "#edf4f4",
    boxShadow: 14,
    p: 4,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submitQuoteForm = async () => {
    const response = await createQuote(formData);
    if (response.status < 300) {
      setMessage("From Submitted Successfully! We will get back to you soon.")
      setTimeout(() => {
        handleClose();
        setMessage('')
      }, 3000);

    } else if (response.status > 300) {
      setErrorMessage(response.message);
    }
  }

  return (
    <div>
      <Button
        style={{
          color: "white",
          textTransform: "math-auto",
          textDecoration: "none",
        }}
        onClick={() => handleOpen()}
      >
        Get a quote in 24hrs
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
            <h1 style={{ color: "red" }}>Get a quote in 24 hours</h1>

            {
              message && <span style={{color: "green"}}>{message}</span>
            }
            {
              errorMessage && <span style={{color: "red"}}>{errorMessage}</span>
            }

            <div className="userProfileView__container__details">
              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div>
                    <input 
                      type="text" 
                      placeholder="First and last Name*" 
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="E-mail address*" 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                      />
                  </div>

                  <div style={{ marginTop: "5px" }}>
                    <select 
                      className="select"
                      onChange={(e) => setFormData({...formData, identity: `I am ${e.target.value}` })}
                    >
                      <option>I am ....*</option>
                      <option value="broker">Broker</option>
                      <option value="employer">Employer</option>
                      <option value="member">Member</option>
                    </select>
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Company Name*" 
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      />
                  </div>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Name of the group you want to insure*"
                      onChange={(e) => setFormData({...formData, groupName: e.target.value})}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Total number of employees*"
                      onChange={(e) => setFormData({ ...formData, numberOfEmploy: e.target.value})}
                    />
                  </div>
                  <div style={{ marginTop: "8px" }}>
                    <input
                      type="date"
                      placeholder="Desired inception date of the cover?*"
                      onChange={(e) => setFormData({ ...formData, inceptionDate: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div>
                    <textarea
                      style={{width: "200%" }}
                      className="textarea"
                      placeholder="Are there any other details you'd like to tell us about your group?"
                      cols={10}
                      rows={5}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <Button
              style={{ marginLeft: "250px" }}
              className="authentication__container__formContainer__form__loginButton_Form"
              type="submit"
              onClick={() => submitQuoteForm()}
            >
              SEND
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default GetQuoteCavitas;
