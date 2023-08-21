import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../../config/helpers/i18n";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useClientInsurance from "../../../../../hooks/useClientInsurance";
import CircularProgress from "@mui/material/CircularProgress";

function GetQuoteCavitas() {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const [dateType, setDateType] = useState();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false)
  const { forSupportForms } = useClientInsurance();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    identity: "",
    company_name: "",
    group_name: "",
    number_of_employees_in_company: "",
    inception_date: "",
    details: "",
    form_type: 2,
    status: 3

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
    setIsLoading(true)
    const response = await forSupportForms(formData);
    if (response.status < 300) {
      setIsLoading(false)
      setMessage(t("get24contactform.setmessage"))
      setTimeout(() => {
        handleClose();
        setMessage("");
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
            <h2> {t("get24contactform.contactcavitas")}</h2>
            <h1 style={{ color: "red" }}>
              {" "}
              {t("get24contactform.quotein24form")}
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
                      placeholder={`${t("get24contactform.firstandlastname")}*`}
                      onChange={(e) =>
                        setFormData({ ...formData, full_name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="E-mail address*"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div style={{ marginTop: "5px" }}>
                    <select
                      className="select"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          identity: `I am ${e.target.value}`,
                        })
                      }
                    >
                      <option>{t("contactform.iam")}</option>
                      <option value="broker">{t("contactform.Broker")}</option>
                      <option value="employer">
                        {t("contactform.Employer")}
                      </option>
                      <option value="member">{t("contactform.Member")}</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={`${t("get24contactform.companyname")}*`}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company_name: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <div>
                    <input
                      type="text"
                      placeholder={`${t("get24contactform.nameofgroup")}*`}
                      onChange={(e) =>
                        setFormData({ ...formData, group_name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder={`${t("get24contactform.totalnumber")}*`}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          number_of_employees_in_company: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div style={{ marginTop: "8px" }}>
                    <input
                       type={dateType === 'date' ? dateType : 'text'}
                       placeholder={`${t("get24contactform.date")}*`}
                       onBlur={() => setDateType('text')}
                       onFocus={() => setDateType('date')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          inception_date: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div>
                    <textarea
                      style={{ width: "200%" }}
                      className="textarea"
                      placeholder={`${t("get24contactform.aboutyourgroup")}`}
                      // cols={10}
                      rows={5}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          details: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <Button
              style={{ marginLeft: "250px" }}
              className="authentication__container__formContainer__form__loginButton_Form"
              type="submit"
              disabled={isLoading}
              onClick={() => submitQuoteForm()}
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
            <p style={{ color: "black", fontSize:"16px" }}>
              {" "}
              www.cavitas.pl | +48 22 208 3430 | kontakt@cavitas.pl
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default GetQuoteCavitas;
