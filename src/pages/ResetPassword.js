import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../config/helpers/i18n';
import { Button } from "@mui/material";
import useForgotPassword from "../hooks/useForgotPassword";
import { useNavigate } from "react-router-dom";
import SuccessMessage from "../components/SnackbarMessages/SuccessMessage";
import AlertMessage from "../components/SnackbarMessages/AlertMessage";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const ResetPassword = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { resetPassword } = useForgotPassword();
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [credential, setCredential] = useState({
    token: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (credential?.password === credential?.passwordConfirmation) {
      const response = await resetPassword(credential);
      if (response?.status < 300) {
        setSuccessMessage(response?.message);
        setTimeout(() => {
          navigate("/");
        }, 3000);

        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      }
      else if (response?.status > 300){
        setErrorMessage(response?.message)
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } else if (credential?.password !== credential?.passwordConfirmation) {
      setErrorMessage("Please Check If Both Passwords Are Correct!");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  const handleShowNewPassword = () => {
    if (viewPassword === false) {
      setViewPassword(true);
    } else {
      setViewPassword(false);
    }
  }

  const handleShowConfirmPassword = () => {
    if (viewConfirmPassword === false) {
      setViewConfirmPassword(true);
    } else {
      setViewConfirmPassword(false);
    }
  }

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, [])

  return (
    <section className="authentication">
      <SuccessMessage successMessage={successMessage}/>
      <AlertMessage errorMessage={errorMessage} />
      <div className="authentication__container">
        <div className="authentication__container__imageBox">
          <div className="authentication__container__imageBox__top">
            <img
              className="authentication__container__imageBox__top__logo"
              src={require("../assets/Signin-logo.png")}
              alt=""
            />
            {/* <img
              className="authentication__container__imageBox__top__flag"
              src={require("../assets/Signin-flag.png")}
              alt=""
            /> */}
          </div>

          <div
            className="authentication__container__imageBox__bottom__forget"
            style={{ marginTop: "none" }}
          >
            <img
              className="authentication__container__imageBox__bottom__forget"
              src={require("../assets/update password.png")}
              alt=""
            />
          </div>
        </div>

        <div className="authentication__container__formContainer">
          <form className="authentication__container__formContainer__form">
            <h2
              className="dashboard__container__content__cavitasDocs__header__iconBox"
              style={{
                color: "#dd3333",
                alignItems: "flex-start",
                marginBottom: "5px",
              }}
            >
                 {t("forgetpassword.Resetpassword")}{" "}
            </h2>
            <div className="authentication__container__formContainer__form">
            <form onSubmit={handleSubmit}>
              <div
                className="supportView__header__iconBox__forget"
                style={{ marginRight: "150px", fontWeight: "normal" }}
              >
                <h4>   {t("forgetpassword.Token")}:</h4>
              </div>
              <div className="authentication__container__formContainer__form__passwordBox">
                <input
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0 0.5rem 1.5rem #d3d3d3",
                    width: "300px",
                    cursor: "pointer",
                  }}
                  required
                  id="token"
                  onChange={(e) =>
                    setCredential({ ...credential, token: e.target.value })
                  }
                  name="token"
                  placeholder="token"
                  type="password"
                  value={credential?.token}
                />
              </div>
              {/* <div
                className="supportView__header__iconBox__forget"
                style={{ marginRight: "150px", fontWeight: "normal" }}
              >
                <p style={{ fontWeight: "normal", fontSize: "16px" }}>
                {t("forgetpassword.Sensitive")}                </p>
              </div> */}
              <div
                className="supportView__header__iconBox__forget"
                style={{ marginRight: "150px", fontWeight: "normal" }}
              >
                <h4>Email:</h4>
              </div>

              <div className="authentication__container__formContainer__form__passwordBox">
                <input
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0 0.5rem 1.5rem #d3d3d3",
                    width: "300px",
                    cursor: "pointer",
                  }}
                  required
                  id="email"
                  onChange={(e) =>
                    setCredential({ ...credential, email: e.target.value })
                  }
                  name="email"
                  placeholder="email"
                  type="email"
                  value={credential?.email}
                />
              </div>
              {/* <div
                className="supportView__header__iconBox__forget"
                style={{ marginRight: "150px", fontWeight: "normal" }}
              >
                <h4>
                  Set your new password here.
                </h4>
              </div> */}
              <div
                className="supportView__header__iconBox__forget"
                style={{ marginRight: "150px", fontWeight: "normal" }}
              >
                <h4>
                  New password:
                </h4>
              </div>

              <div className="authentication__container__formContainer__form__passwordBox">
                <input
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0 0.5rem 1.5rem #d3d3d3",
                    width: "300px",
                    cursor: "pointer",
                  }}
                  required
                  id="password"
                  onChange={(e) =>
                    setCredential({ ...credential, password: e.target.value })
                  }
                  name="password"
                  placeholder="password"
                  type={viewPassword ? 'text' : 'password'}
                  value={credential?.password}
                />
                <RemoveRedEyeOutlinedIcon className='authentication__container__formContainer__form__passwordBox__passwordIcon' onClick={handleShowNewPassword} />
              </div>

              <div
                className="supportView__header__iconBox__forget"
                style={{ marginRight: "150px", fontWeight: "normal" }}
              >
                <h4>
                  Confirm new password:
                </h4>
              </div>

              <div className="authentication__container__formContainer__form__passwordBox">
                <input
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0 0.5rem 1.5rem #d3d3d3",
                    width: "300px",
                    cursor: "pointer",
                  }}
                  required
                  id="password_confirmation"
                  onChange={(e) =>
                    setCredential({
                      ...credential,
                      passwordConfirmation: e.target.value,
                    })
                  }
                  name="password_confirmation"
                  placeholder="password confirmation"
                  type={viewConfirmPassword ? 'text' : 'password'}
                  value={credential?.passwordConfirmation}
                />
                <RemoveRedEyeOutlinedIcon className='authentication__container__formContainer__form__passwordBox__passwordIcon' onClick={handleShowConfirmPassword} />
              </div>
              <br />
              <div className="authentication__container__formContainer__form">
              <Button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="authentication__container__formContainer__form__forget__loginButton"
              >
                Update password
              </Button>
              </div>
            </form>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
