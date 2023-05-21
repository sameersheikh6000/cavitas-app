import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useQuoteForm from '../../../../hooks/useQuoteForm';

function GetQuoteCavitas() {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const [dateType, setDateType] = useState();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, [])
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
      
        {t("Broker.CoverWork__year__button")}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="uploadClient__container__body__participation">
            <h2>  {t("get24contactform.contactcavitas")}</h2>
            <h1 style={{ color: "red" }}>  {t("get24contactform.quotein24form")}</h1>

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
                              <option>{t("contactform.iam")}</option>
                      <option value="broker">{t("contactform.Broker")}</option>
                      <option value="employer">{t("contactform.Employer")}</option>
                      <option value="member">{t("contactform.Member")}</option>
                      <option value="other">{t("contactform.Other")}</option>
                    </select>
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder={`${t("get24contactform.companyname")}`} 
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      />
                  </div>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <div>
                    <input
                      type="text"
                      placeholder={`${t("get24contactform.nameofgroup")}`} 
                      onChange={(e) => setFormData({...formData, groupName: e.target.value})}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder={`${t("get24contactform.totalnumber")}`} 
                      onChange={(e) => setFormData({ ...formData, numberOfEmploy: e.target.value})}
                    />
                  </div>
                  <div style={{ marginTop: "8px" }}>
                    <input
                      className="placeholder_class"
                      type={dateType == 'date' ? dateType : 'text'}
                      placeholder={`${t("get24contactform.date")}`} 
                      onBlur={() => setDateType('text')}
                      onFocus={() => setDateType('date')}
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
                      placeholder={`${t("get24contactform.aboutyourgroup")}`} 
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
                {t("get24contactform.send")}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default GetQuoteCavitas;
