// import React, { useState } from "react";
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useTheme } from "@mui/material/styles";
// import InputLabel from "@mui/material/InputLabel";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import CloseIcon from "@mui/icons-material/Close";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import useQuoteForm from "../../../../hooks/useQuoteForm";

// const GetQuoteCavitas = () => {
//   const [modal, setModal] = useState(false);
//   const { createQuote } = useQuoteForm();
//   const [message, setMessage] = useState('')
//   const [errorMessage, setErrorMessage] = useState('')

//   if (modal) {
//     document.body.classList.add("active-modal");
//   } else {
//     document.body.classList.remove("active-modal");
//   }
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     identity: "",
//     companyName: "",
//     groupName: "",
//     numberOfEmploy: "",
//     inceptionDate: "",
//     description: "",
//   });

//   const submitQuoteForm = async () => {
//     const response = await createQuote(formData);
//     if (response.status < 300) {
//       setMessage("From Submitted Successfully! We will get back to you soon.")
//       setInterval(() => {
//         setModal(!modal);
//         setMessage('')
//       }, 3000);

//     } else if (response.status > 300) {
//       setErrorMessage(response.message);
//     }
//   }

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   return (
//     <>
//       <Button onClick={toggleModal}>Get a quote in 24hrs </Button>
//       {modal && (
//         <div className="modal_Quote">
//           <div onClick={toggleModal} className="overlay_Quote"></div>
//           <div className="modal-content-Quote">
//             <div className="model-content-heading-quote">
//               <h2>Contact Cavitas</h2>
//               <h1>Get a quote in 24 hours</h1>
//             </div>

//             <div>
//               {
//                 message && <span style={{color: "green"}}>{message}</span>
//               }
//               {
//                 errorMessage && <span style={{color: "red"}}>{errorMessage}</span>
//               }
//             <Box

//               component="form"
//               sx={{
//                 "& .MuiTextField-root": { m: 1, width: "25ch" },
//               }}
//               noValidate
//               autoComplete="off"
//               >
//               <div>
//                 <TextField
//                   label="First and last name* "
//                   id="outlined-size-normal"
//                   style={{}}
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                 />
//                 <TextField
//                   label="E-mail address"
//                   id="outlined-size-normal"
//                   required
//                   clas
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value})}
//                 />
//               </div>
//             </Box>
//             <div>
//               <FormControl sx={{ m: 1, width: "25ch" }}>
//                 <InputLabel htmlFor="grouped-native-select">
//                   I am.... *
//                 </InputLabel>
//                 <Select
//                   native
//                   defaultValue=""
//                   id="grouped-native-select"
//                   label="Grouping"
//                   onChange={(e) => setFormData({...formData, identity: `I am ${e.target.value}` })}
//                 >
//                   <option aria-label="None" value="" />
//                   <option value="broker">Broker</option>
//                   <option value="employer">Employer</option>
//                   <option value="member">Member</option>
//                 </Select>
//               </FormControl>
//               <TextField
//                   sx={{ m: 1, width: "25ch" }}
//                   label="Company name*"
//                   onChange={(e) => setFormData({...formData, companyName: e.target.value})}
//                 />
//             </div>

//               <div>
//                 <TextField
//                   sx={{ m: 1, width: "52ch" }}
//                   label="Name of the group you want to insure* "
//                   onChange={(e) => setFormData({...formData, groupName: e.target.value})}
//                 />
//               </div>
//               <div>

//                  <TextField
//                     id="outlined-number"
//                     sx={{ m: 1, width: "52ch" }}
//                     label="Total number of employees* "
//                     type="number"
//                     onChange={(e) => setFormData({ ...formData, numberOfEmploy: e.target.value})}
//                   />
//               </div>
//                 <label style={{display: "flex", marginLeft: "10px", marginTop: "10px"}}>Inception Date:</label>
//                 <input
//                   className='uploadClient__container__body__participation__form'
//                   type='date'
//                   placeholder='Desired inception date of the cover?*'
//                   onChange={(e) => setFormData({ ...formData, inceptionDate: e.target.value})}
//                   name="inception_date"
//                   required={true}
//                 />
//               <TextField
//                 sx={{ m: 1, width: "52ch" }}
//                 id="outlined-multiline-static"
//                 label="Are there any other details you'd like to tell us about your group?
//                 "
//                 multiline
//                 rows={3}
//                 maxRows={10}
//                 variant="outlined"

//                 onChange={(e) => setFormData({...formData, description: e.target.value})}
//               />

//             <Button
//               className="authentication__container__formContainer__form__loginButton"
//               type="submit"
//               onClick={submitQuoteForm}
//             >
//               Submit
//             </Button>
//             <CloseIcon className="close-modal" onClick={toggleModal} />
//           </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default GetQuoteCavitas;

import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

function GetQuoteCavitas() {
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

            <div className="userProfileView__container__details">
              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div>
                    <input type="text" placeholder="First and last Name*" />
                  </div>
                  <div>
                    <input type="email" placeholder="E-mail address*" />
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
                  <div>
                    <input type="text" placeholder="Company Name*" />
                  </div>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Name of the group you want to insure*"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Total number of employees*"
                    />
                  </div>
                  <div style={{ marginTop: "8px" }}>
                    <input
                      type="date"
                      placeholder="Desired inception date of the cover?*"
                    />
                  </div>
                </div>
              </div>

              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div>
                    <textarea
                      className="textarea"
                      placeholder="Are there any other details you'd like to tell us about your group?"
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
              SEND
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default GetQuoteCavitas;
