import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Page from "../../../../../components/Page/Page";
import Stack from "@mui/material/Stack";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import useTickets from "../../../../../hooks/useTickets";
import SuccessMessage from "../../../../../components/SnackbarMessages/SuccessMessage";
import AlertMessage from "../../../../../components/SnackbarMessages/AlertMessage";

function SubmitNewTickets() {
  const {createTicket} = useTickets();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [ticket, setTicket] = useState({
    request: "",
    description: "",
    attachment: ""
  })

  const style = {
    position: "absolute",
    top: "59%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    width: 800,
    borderRadius: 10,
    bgcolor: "#edf4f4",
    boxShadow: 1,
    p: 5,
  };

  const handleSubmit = async () => {
    const response = await createTicket(ticket)
    if(response?.status < 300){
      setSuccessMessage("Submited Successfully!")
      setTicket({
        ...ticket, description: "", request: "", attachment: ""
      })
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/support/view')
      }, 3000);
    }
    else if (response?.status > 300){
      setErrorMessage(response?.message)
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);

    }
  }

  return (
    <Page>
      <AlertMessage errorMessage={errorMessage}/>
      <SuccessMessage successMessage={successMessage}/>
      <section className="insuredClientView">
        <header className="insuredClientView__header">
          <div className="insuredClientView__header__left">
            <MailOutlineIcon className="insuredClientView__header__left__icon" />
            <p>Support Tickets</p>
          </div>
        </header>
        <br />
        <header className="insuredClientView__header">
          <Stack direction="row" spacing={2}>
            <div className="insuredClientView__header__left">
              <Link to="/support/view">
                <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                  My support tickets
                </Button>
              </Link>
            </div>
            <div className="insuredClientView__header__left">
              <Link to="/SubmitNewTickets">
                <Button
                  style={{ background: "#5C8894" }}
                  className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn__Submit"
                >
                  Submit New Tickets
                </Button>
              </Link>
            </div>
          </Stack>
        </header>

        <Box sx={style}>
          <div className="uploadClient__container__body__participation">
            <h2 style={{ color: "black" }}>Contact Cavitas</h2>
            <h2 style={{ color: "red", fontSize: 35 }}>
              Start conversation with us
            </h2>
            {successMessage && <em>{successMessage}</em> }
            {errorMessage && <em>{errorMessage}</em> }
            <div className="userProfileView__container__details">
              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div style={{ marginTop: "5px", marginLeft: "20px" }}>
                    <select className="select" onChange={(e) => setTicket({...ticket, request: `I want to ${e.target.value}`})}>
                      <option>I want to... *</option>
                      <option value="contact for corporation">Contact for cooperation</option>
                      <option value="ask a question">Ask a question</option>
                      <option value="submit a complaint">Submit a complaint</option>
                      <option value="give feedback">Give Feedback</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div>
                    <textarea
                      style={{ marginLeft: "20px" }}
                      className="textarea"
                      placeholder="Your text here"
                      onChange={(e) => setTicket({...ticket, description: e.target.value})}
                      cols={10}
                      rows={5}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div style={{ marginLeft: "20px" }}>
                    <label style={{ marginLeft: "20px" }}>Attachments</label>
                    <input className="textarea" type="file" onChange={(e) => setTicket({ ...ticket, attachment: e.target.files[0] })}></input>
                  </div>
                </div>
              </div>
            </div>

            <Button
              style={{ marginLeft: "250px", fontSize: "15px" }}
              className="authentication__container__formContainer__form__loginButton_Form"
              type="submit"
              onClick={() => handleSubmit()}
            >
              SUBMIT TICKET
            </Button>
          </div>
        </Box>
      </section>
    </Page>
  );
}

export default SubmitNewTickets;
