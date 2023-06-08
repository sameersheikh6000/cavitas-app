import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from '../../../../../config/helpers/i18n';
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Page from "../../../../../components/Page/Page";
import Stack from "@mui/material/Stack";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import useClientInsurance from "../../../../../hooks/useClientInsurance";
import SuccessMessage from "../../../../../components/SnackbarMessages/SuccessMessage";
import AlertMessage from "../../../../../components/SnackbarMessages/AlertMessage";

function SubmitNewTickets() {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const { createNewTicket } = useClientInsurance();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [ticket, setTicket] = useState({
    request: "",
    details: "",
    file: "",
    status: 3
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
    const response = await createNewTicket(ticket)
    if(response?.status < 300){
      // setSuccessMessage("Submited Successfully!")
      setSuccessMessage(t("Pannel_Dashboard_Supporttickets.message"))
      setTicket({
        ...ticket, details: "", request: "", file: ""
      })
      setTimeout(() => {
        setSuccessMessage('');
        navigate(`/support/view/${lang == "pl" ? "pl" : "en"}`)
      }, 3000);
    }
    else if (response?.status > 300){
      setErrorMessage(response?.message)
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);

    }
  }

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, []);

  return (
    <Page>
      <AlertMessage errorMessage={errorMessage}/>
      <SuccessMessage successMessage={successMessage}/>
      <section className="insuredClientView">
        <header className="insuredClientView__header">
          <div className="insuredClientView__header__left">
            <MailOutlineIcon className="insuredClientView__header__left__icon" />
            <p>{t("Pannel_Dashboard_Supporttickets.Supporttitle")}</p>
          </div>
        </header>

        <br />
        <header className="insuredClientView__header">
          <Stack direction="row" spacing={2}>
            <div className="insuredClientView__header__left">
               <Link to={`/support/view/${lang == "pl" ? "pl" : "en"}`}>

                <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                {t("MysupportTickets.Mysupportticket")}
                </Button>
              </Link>
            </div>
            <div className="insuredClientView__header__left">
            <Link to={`/SubmitNewTickets/${lang == "pl" ? "pl" : "en"}`}>
                <Button
                  style={{ background: "#5C8894" }}
                  className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn__Submit"
                >
               {t("MysupportTickets.Submitnewticket")}
                </Button>
              </Link>
            </div>
          </Stack>
        </header>

        <Box sx={style}>
          <div className="uploadClient__container__body__participation">
            <h2 style={{ color: "black" }}>{t("contactform.contactfrom_title")}</h2>
            <h2 style={{ color: "red", fontSize: 35 }}>
            {t("contactform.contactfrom_heading")}
            </h2>
            {successMessage && <em>{successMessage}</em> }
            {errorMessage && <em>{errorMessage}</em> }
            <div className="userProfileView__container__details">
              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div style={{ marginTop: "5px", marginLeft: "20px" }}>
                    <select className="select" onChange={(e) => setTicket({...ticket, request: `I want to ${e.target.value}`})}>
                      <option>{t("contactform.iwant")}</option>
                      <option value="contact for corporation">{t("contactform.Contactcooperation")}</option>
                      <option value="ask a question">{t("contactform.Askquestion")}</option>
                      <option value="submit a complaint">{t("contactform.Submitcomplain")}</option>
                      <option value="give feedback">{t("contactform.feedback")}</option>
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
                      placeholder={`${t("contactform.texthere")}`}
                      onChange={(e) => setTicket({...ticket, details: e.target.value})}
                      cols={10}
                      rows={5}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div style={{ marginLeft: "20px" }}>
                    <label style={{ marginLeft: "20px" }}>  {t("MysupportTickets.attachement")}</label>
                    <input className="textarea" type="file" onChange={(e) => setTicket({ ...ticket, file: e.target.files[0] })}></input>
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
                            {t("MysupportTickets.Submitticket")}

            </Button>
          </div>
        </Box>
      </section>
    </Page>
  );
}

export default SubmitNewTickets;
