import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import useClientInsurance from "../../../../../hooks/useClientInsurance";
import i18n from "../../../../../config/helpers/i18n";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    borderRadius: "25px", // Apply the border radius style
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function GetQuoteCavitas() {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const { forSupportForms } = useClientInsurance();
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [open, setOpen] = useState(false);
  const [dateType, setDateType] = useState();

  const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        identity: "",
        company_name: "",
        group_name: "",
        number_of_employees_in_company: "",
        inception_date: "",
        details: "",
        status: 3,
        form_type: 2
      });

      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

  const submitQuoteForm = async () => {
    const response = await forSupportForms(formData);
    if (response.status < 300) {
      setMessage(t("get24contactform.setmessage"))
      setTimeout(() => {
        handleClose();
        setMessage('')
      }, 3000);

    } else if (response.status > 300) {
      setErrorMessage(response.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  }

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, [])

  return (
    <div>
      <Button
        style={{
          color: "white",
          textTransform: "math-auto",
          textDecoration: "none",
        }}
        onClick={() => handleClickOpen()}
      >
        {t("Broker.CoverWork__year__button")}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: { background: "none", boxShadow: "none", maxWidth: "none" },
        }}
      >
        <DialogContent
          dividers
          sx={{
            backgroundColor: "#edf4f4",
            boxShadow: 4,
            padding: "4px",
            position: "relative",
            width: 750, // Default width for larger screens
            "@media (max-width: 360px)": {
              width: "100%", // Adjust width for mobile responsive
            },
          }}
          id="popup_manu"
        >
        <Box >
        <AddCircleIcon
              style={{
                color: "#dd3333",
                fontSize: "55px",
                marginTop: "-28px",
                marginLeft: "-30px",
                position: "fixed",
              }}
              onClick={handleClose}
            />
            <Typography
              gutterBottom
              style={{ padding: "5px", fontSize: "14px" }}
            >
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
                      placeholder={`${t("get24contactform.firstandlastname")}*`}
                      onChange={(e) => setFormData({...formData, full_name: e.target.value})}
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
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={`${t("get24contactform.companyname")}*`}
                      onChange={(e) => setFormData({...formData, company_name: e.target.value})}
                      />
                  </div>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <div>
                    <input
                      type="text"
                      placeholder={`${t("get24contactform.nameofgroup")}*`}
                      onChange={(e) => setFormData({...formData, group_name: e.target.value})}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder={`${t("get24contactform.totalnumber")}*`}
                      onChange={(e) => setFormData({ ...formData, number_of_employees_in_company: e.target.value})}
                    />
                  </div>
                  <div style={{ marginTop: "8px" }}>
                    <input
                      type={dateType === 'date' ? dateType : 'text'}
                      placeholder={`${t("get24contactform.date")}*`}
                      onFocus={() => setDateType('date')}
                      onBlur={() => setDateType('text')}
                      onChange={(e) => setFormData({ ...formData, inception_date: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div>
                    <textarea
                      style={{maxWidth: "200%" }}
                      className="textarea"
                      placeholder={`${t("get24contactform.aboutyourgroup")}`}
                      cols={10}
                      rows={5}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <Button
              style={{ marginTop:"-15px" }}
              className="authentication__container__formContainer__form__loginButton_Form"
              type="submit"
              id="popup_btn"
              onClick={() => submitQuoteForm()}
            >
               {t("get24contactform.send")}
            </Button>
          </div>
          <br />
          <div className="landingPage__valuableReadings__header">
            <p style={{ color: "black", fontSize:"16px" }}>
              {" "}
              www.cavitas.pl | +48 22 208 3430 | kontakt@cavitas.pl
            </p>
          </div>
          </Typography>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

