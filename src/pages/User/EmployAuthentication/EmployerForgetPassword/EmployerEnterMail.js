import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import i18n from "../../../../config/helpers/i18n";
import { useTranslation } from "react-i18next";
import useForgotPassword from "../../../../hooks/useForgotPassword";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const EmployerEnterMail = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const [successMessage, setSuccessMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { forgotPassword } = useForgotPassword();
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await forgotPassword(email);
    if (response?.status < 300) {
      setSuccessMessage(response?.message);
      setIsLoading(false);
      setTimeout(() => {
        navigate(`/employ-signin/${lang === "pl" ? "pl" : "en"}`);
      }, 3000);
      setEmail("");
    } else if (response?.status > 300) {
      setIsLoading(false);
      setAlertMessage(response?.message);
      setTimeout(() => {
        setAlertMessage("");
      }, 3000);
    }
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);

  return (
    <section className="authentication">
      <div className="authentication__container">
        <div className="authentication__container__imageBox">
          <div className="authentication__container__imageBox__top">
            <img
              className="authentication__container__imageBox__top__logo"
              src={require("../../../../assets/Signin-logo.png")}
              alt=""
            />
            {/* <img
              className="authentication__container__imageBox__top__flag"
              src={require("../../../../assets/Signin-flag.png")}
              alt=""
            /> */}
          </div>

          <div
            className="authentication__container__imageBox__bottom__forget"
            style={{ marginTop: "none" }}
          >
            <img
              className="authentication__container__imageBox__bottom__forget"
              src={require("../../../../assets/Forgot Password_ (1).png")}
              alt=""
            />
          </div>
        </div>
        <div className="authentication__container__formContainer">
          <h2
            className="dashboard__container__content__cavitasDocs__header__iconBox"
            style={{
              color: "#dd3333",
              alignItems: "flex-start",
              marginBottom: "5px",
            }}
          >
            {t("Forget_psw.forget_password")}{" "}
          </h2>
          <p
            style={{
              marginBottom: "5px",
              fontSize: "17px",
            }}
          >
            {t("Forget_psw.enter_email")}{" "}
          </p>
          {/* <div className="supportView__header__iconBox__forget">
            <MailOutlinedIcon className="supportView__header__iconBox__icon__forget" />
            <p>Email Address</p>
          </div> */}
          <form
            className="authentication__container__formContainer__form__forget"
            style={{ width: "300" }}
            onSubmit={handleSubmit}
          >
            <input
              style={{
                backgroundColor: "white",
                boxShadow: "0 0.5rem 1.5rem #d3d3d3",
                marginTop: "15px",
              }}
              type="email"
              placeholder={`${t("Forget_psw.email")}`}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {successMessage && (
              <p style={{ color: "green" }}>
                <small>{successMessage}</small>
              </p>
            )}
            {alertMessage && (
              <p style={{ color: "red" }}>
                <small>{alertMessage}</small>
              </p>
            )}

            <Button
              style={{ borderRadius: "50px" }}
              disabled={isLoading}
              className="authentication__container__formContainer__form__forget__loginButton"
              type="submit"
            >
              {!isLoading ? (
                t("Forget_psw.continue")
              ) : (
                <CircularProgress
                  style={{ width: "20px", height: "20px", color: "white" }}
                />
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmployerEnterMail;
