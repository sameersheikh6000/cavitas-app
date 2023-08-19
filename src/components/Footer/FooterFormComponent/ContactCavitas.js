import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import useClientInsurance from "../../../hooks/useClientInsurance";
import i18n from "../../../config/helpers/i18n";
import CircularProgress from "@mui/material/CircularProgress";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    borderRadius: "25px", // Apply the border radius style
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ContactCavitas() {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { forSupportForms } = useClientInsurance();
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    full_name: "",
    email: "",
    details: "",
    identity: "",
    request: "",
    status: 3,
    form_type: 0,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    setIsLoading(true)
    const response = await forSupportForms(contactForm);
    if (response.status < 300) {
      setIsLoading(false)
      setMessage(t("get24contactform.setmessage"));
      setTimeout(() => {
        handleClose();
        setMessage("");
        setErrorMessage("");
      }, 3000);
    } else if (response.status > 300) {
      setIsLoading(false)
      setErrorMessage(response.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  return (
    <div>
      <Button
        className="Contactforsupport"
        style={{
          color: "white",
          textTransform: "math-auto",
          margin: -7,
          textDecoration: "none",
        }}
        onClick={() => handleClickOpen()}
      >
        {t("nav.Contactforsupport")}{" "}
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
          <Box>
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
                <h2>{t("contactform.contactfrom_title")}</h2>
                <h1 style={{ color: "red" }}>
                  {t("contactform.contactfrom_heading")}
                </h1>
                {message && <span style={{ color: "green" }}>{message}</span>}
                {errorMessage && (
                  <span style={{ color: "red" }}>{errorMessage}</span>
                )}
                <div className="userProfileView__container__details">
                  <div className="userProfileView__container__details__detailsBox">
                    <div className="userProfileView__container__details__detailsBox__feilds__container">
                      <div>
                        <input
                          type="text"
                          placeholder={`${t(
                            "get24contactform.firstandlastname"
                          )}*`}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              full_name: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="E-mail address*"
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div style={{ marginTop: "5px" }}>
                        <select
                          className="select"
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              identity: `I am ${e.target.value}`,
                            })
                          }
                        >
                          <option>{t("contactform.iam")}</option>
                          <option value="broker">
                            {t("contactform.Broker")}
                          </option>
                          <option value="employer">
                            {t("contactform.Employer")}
                          </option>
                          <option value="member">
                            {t("contactform.Member")}
                          </option>
                          <option value="other">
                            {t("contactform.Other")}
                          </option>
                        </select>
                      </div>
                      <div style={{ marginTop: "5px" }}>
                        <select
                          className="select"
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              request: `I want to ${e.target.value}`,
                            })
                          }
                        >
                          <option>{t("contactform.iwant")}</option>
                          <option value="contact for cooperation">
                            {t("contactform.Contactcooperation")}
                          </option>
                          <option value="ask a question">
                            {t("contactform.Askquestion")}
                          </option>
                          <option value="submit a complaint">
                            {t("contactform.Submitcomplaint")}
                          </option>
                          <option value="give feedback">
                            {t("contactform.feedback")}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="userProfileView__container__details__detailsBox">
                    <div className="userProfileView__container__details__detailsBox__feilds__container">
                      <div>
                        <textarea
                          style={{ maxWidth: "200%" }}
                          className="textarea"
                          placeholder={`${t("contactform.texthere")}`}
                          rows={5}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              details: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  style={{ borderRadius: "1rem" }}
                  className="authentication__container__formContainer__form__loginButton_Form"
                  type="submit"
                  disabled={isLoading}
                  id="popup_btn"
                  onClick={() => handleSubmit()}
                >
                  {!isLoading ? 
                      t("get24contactform.send")
                    :
                      <CircularProgress 
                            style={{
                              width: "20px",
                              height: "20px",
                              color: "white",
                            }}
                          />
                  }
                </Button>
              </div>
              <br />
              <div className="landingPage__valuableReadings__header">
                <p style={{ color: "black", fontSize: "16px" }}>
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
