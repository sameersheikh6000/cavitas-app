import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useContactForm from "../../../../hooks/useContactForm";

const ContactCavitas = () => {
  const [modal, setModal] = useState(false);
  const { createContact } = useContactForm()
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // const theme = useTheme();
  const [contactForm, setContactForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    description: "",
    identity: "",
    request: ""
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleSubmit = async () => {
    debugger
    const response = await createContact(contactForm)
    if (response.status < 300) {
      setMessage("From Submitted Successfully! We will get back to you soon.")
      setInterval(() => {
        setModal(!modal);
        setMessage('');
        setErrorMessage('');
      }, 3000);
    } else if (response.status > 300) {
      setErrorMessage(response.message);
    }
  }

  return (
    <>
      <Button onClick={toggleModal}> Contact US</Button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="model-content-heading">
              <h2>Contact Cavitas</h2>
              <h1>Start conversation with us</h1>
            </div>

            <div>
            {
                message && <span style={{color: "green"}}>{message}</span> 
              }
              {
                errorMessage && <span style={{color: "red"}}>{errorMessage}</span> 
              }
           
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  label="First Name"
                  id="outlined-size-normal"
                  onChange={(e) => setContactForm({...contactForm, first_name: e.target.value})}

                />
                <TextField
                  label="Last Name"
                  id="outlined-size-normal"
                  onChange={(e) => setContactForm({...contactForm, last_name: e.target.value})}

                />
              </div>
            </Box>
            <div>
              <FormControl sx={{ m: 1, width: "25ch" }}>
                <InputLabel htmlFor="grouped-native-select">
                  I am.... *
                </InputLabel>
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Grouping"
                  onChange={(e) => setContactForm({...contactForm, identity: `I am ${e.target.value}`})}
                >
                  <option aria-label="None" value="" />
                  <option value="broker">Broker</option>
                  <option value="employer">Employer</option>
                  <option value="member">Member</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: "25ch" }}>
                <InputLabel htmlFor="grouped-native-select">
                  I want to... *
                </InputLabel>
                <Select
                  native
                  defaultValue=""
                  onChange={(e) => setContactForm({...contactForm, request: `I want to ${e.target.value}`})}
                  label="Grouping"

                >
                  <option aria-label="None" value="" />
                  <option value="contact for cooperation">Contact for cooperation</option>
                  <option value="ask a question">Ask a question</option>
                  <option value="submit a complaint">Submit a complaint</option>
                  <option value="give feedback">Give feedback</option>
                </Select>
              </FormControl>
              <TextField
                sx={{ m: 1, width: "52ch" }}
                id="outlined-multiline-static"
                label="Your text here"
                multiline
                rows={3}
                maxRows={10}
                variant="outlined"
                onChange={(e) => setContactForm({...contactForm, description: e.target.value})}
              />
            </div>
            <Button
              className="authentication__container__formContainer__form__loginButton"
              type="submit"
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
            <CloseIcon className="close-modal" onClick={toggleModal} />
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactCavitas;
