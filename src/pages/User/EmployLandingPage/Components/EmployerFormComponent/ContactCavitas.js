import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ContactCavitas = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const navigate = useNavigate();

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
                 
                />
                <TextField
                  label="Last Name"
                  id="outlined-size-normal"
              
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
                >
                  <option aria-label="None" value="" />
                  <option value={1}>Broker</option>
                  <option value={2}>Employer</option>
                  <option value={3}>Member</option>
                  <option value={4}>Other</option>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: "25ch" }}>
                <InputLabel htmlFor="grouped-native-select">
                  I want to... *
                </InputLabel>
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Grouping"
                >
                  <option aria-label="None" value="" />
                  <option value={1}>Contact for cooperation</option>
                  <option value={2}>Ask a question</option>
                  <option value={3}>Submit a complaint</option>
                  <option value={4}>Give feedback</option>
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
              />
            </div>
            <Button
              className="authentication__container__formContainer__form__loginButton"
              type="submit"
            >
              Submit
            </Button>
            <CloseIcon className="close-modal" onClick={toggleModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default ContactCavitas;
