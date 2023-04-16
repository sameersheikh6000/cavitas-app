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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CloseIcon from "@mui/icons-material/Close";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const GetQuoteCavitas = () => {
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
      <Button onClick={toggleModal}>Get a quote in 24hrs </Button>
      {modal && (
        <div className="modal_Quote">
          <div onClick={toggleModal} className="overlay_Quote"></div>
          <div className="modal-content-Quote">
            <div className="model-content-heading-quote">
              <h2>Contact Cavitas</h2>
              <h1>Get a quote in 24 hours</h1>
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
                  label="First and last name* "
                  id="outlined-size-normal"
             
                />
                <TextField
                  label="E-mail address"
                  id="outlined-size-normal"
            
                  required
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
                </Select>
              </FormControl>
              <TextField
                              sx={{ m: 1, width: "25ch" }}
                  label="Company name*"
                  id="outlined-size-normal"
              

                />
              

            </div>
            
              <div>
                <TextField
                                sx={{ m: 1, width: "52ch" }}

                  label="Name of the group you want to insure* "
                  id="outlined-size-normal"
                
                />
              </div>
              <div>
               
                 <TextField
          id="outlined-number"
          sx={{ m: 1, width: "52ch" }}

          label="Total number of employees* "
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
              </div>
                <input
                
                  className='uploadClient__container__body__participation__form'
                  type='date'
                  placeholder='Desired inception date of the cover?*'
                  onChange={handleChange}
                  name="inception_date"
                  required={true}
                />
              <TextField
                sx={{ m: 1, width: "52ch" }}
                id="outlined-multiline-static"
                label="Are there any other details you'd like to tell us about your group?
                "
                multiline
                rows={3}
                maxRows={10}
                variant="outlined"
              />
 

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

export default GetQuoteCavitas;





