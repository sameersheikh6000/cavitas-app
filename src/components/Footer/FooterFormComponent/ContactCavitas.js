import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../../../config/helpers/i18n';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useClientInsurance from '../../../hooks/useClientInsurance';

function ContactCavitas() {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const { forSupportForms } = useClientInsurance();
  const [errorMessage, setErrorMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
        full_name: "",
        email: "",
        details: "",
        identity: "",
        request: "",
        status: 3
      });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 750,
    borderRadius: 10,
    bgcolor: "#edf4f4",
    boxShadow: 14,
    p: 4,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
  const response = await forSupportForms(contactForm)
  if (response.status < 300) {
    setMessage(t("get24contactform.setmessage"))
    setTimeout(() => {
      handleClose();
      setMessage('');
      setErrorMessage('');
    }, 3000);
    
  } else if (response.status > 300) {
    setErrorMessage(response.message);
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  }
}

useEffect(() => {
  const currentUrl = window.location.href;
  let lang = currentUrl.split("/").pop();
  lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
}, [])
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
  {t("nav.Contactforsupport")}      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="uploadClient__container__body__participation">
            <h2>{t("contactform.contactfrom_title")}</h2>
            <h1 style={{ color: "red" }}>{t("contactform.contactfrom_heading")}</h1>
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
                    placeholder={`${t("get24contactform.firstandlastname")}`} 
                    onChange={(e) => setContactForm({...contactForm, full_name: e.target.value})}
                    />
                  </div>
                  <div>
                   <input 
                    type="text" 
                    placeholder="Email" 
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}/>

                  </div>
                  <div style={{ marginTop: "5px" }}>
                    <select className="select" onChange={(e) => setContactForm({ ...contactForm, identity: `I am ${e.target.value}`})}>
                    <option>{t("contactform.iam")}</option>
                    <option value="broker">{t("contactform.Broker")}</option>
                      <option value="employer">{t("contactform.Employer")}</option>
                      <option value="member">{t("contactform.Member")}</option>
                      <option value="other">{t("contactform.Other")}</option>
                    </select>
                  </div>
                  <div style={{ marginTop: "5px" }}>
                    <select className="select" onChange={(e) => setContactForm({ ...contactForm, request: `I want to ${e.target.value}`})}>
                    <option >{t("contactform.iwant")}</option>
                      <option value="contact for cooperation">{t("contactform.Contactcooperation")}</option>
                      <option value="ask a question">{t("contactform.Askquestion")}</option>
                      <option value="submit a complaint">{t("contactform.Submitcomplaint")}</option>
                      <option value="give feedback">{t("contactform.feedback")}</option>
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
                      placeholder={`${t("contactform.texthere")}`}                       rows={5}
                      onChange={(e) => setContactForm({...contactForm, details: e.target.value})}
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
             {t("get24contactform.send")}

            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ContactCavitas;
