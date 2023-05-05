import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useContactForm from '../../../../hooks/useContactForm';

function ContactCavitas() {
  const { createContact } = useContactForm()
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        description: "",
        identity: "",
        request: ""
      });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 750,
    bgcolor: "#edf4f4",
    borderRadius: 10,
    boxShadow: 14,
    p: 4,
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
  const response = await createContact(contactForm)
  if (response.status < 300) {
    setMessage("From Submitted Successfully! We will get back to you soon.")
    setTimeout(() => {
      handleClose();
      setMessage('');
      setErrorMessage('');
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
        Contact Us
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
                    placeholder="First & Last name" 
                    onChange={(e) => setContactForm({...contactForm, first_name: e.target.value})}
                    />
                  </div>
                  <div>
                    {/* <input 
                    type="text" 
                    placeholder="Last name" 
                    onChange={(e) => setContactForm({...contactForm, last_name: e.target.value})}/>
                     */}
                     <input 
                    type="text" 
                    placeholder="Email" 
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}/>

                  </div>

                  <div style={{ marginTop: "5px" }}>
                    <select className="select" onChange={(e) => setContactForm({ ...contactForm, identity: `I am ${e.target.value} `})}>
                      <option>I am ....*</option>
                      <option value="broker">Broker</option>
                      <option value="employer">Employer</option>
                      <option value="member">Member</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div style={{ marginTop: "5px" }}>
                    <select className="select"  onChange={(e) => setContactForm({ ...contactForm, request: `I want to ${e.target.value} `})}>
                      <option >I want to ...</option>
                      <option value="contact for cooperation">Contact for cooperation</option>
                      <option value="ask a question">Ask a question</option>
                      <option value="submit a complaint">Submit a complaint</option>
                      <option value="give feedback">Give feedback</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div>
                    <textarea
                      style={{width: "200%" }}
                      className="textarea"
                      placeholder="Your text here                 "
                      cols={10}
                      rows={5}
                      onChange={(e) => setContactForm({...contactForm, description: e.target.value})}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <Button
              style={{ marginLeft: "250px" }}
              className="authentication__container__formContainer__form__loginButton_Form"
              type="submit"
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ContactCavitas;
