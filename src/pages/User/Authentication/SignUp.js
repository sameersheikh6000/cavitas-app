import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../config/helpers/i18n";
import useUsers from "../../../hooks/useUsers";
import AlertMessage from "../../../components/SnackbarMessages/AlertMessage";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  const { createUser } = useUsers();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    company_name: "",
    company_krs_number: "",
    company_url_address: "",
    password: "",
    password_confirmation: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    //condition of password digits
    const newPassword = event.target.value;

    if (newPassword.length === 4) {
      setErrorMessage(t("Pannel_Dashboard_Supporttickets.wordspassword"));
    } else {
      setErrorMessage("");
    }

    setPassword(newPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    for (let prop in user) {
      if (!user[prop]) return alert(t("Pannel_Dashboard_Supporttickets.fill"));
    }
    const response = await createUser(user, "broker");

    if (response?.status?.code < 300) {
      navigate(`/dashboard/${lang === "pl" ? lang : "en"}`);
    } else if (response?.data?.message !== undefined) {
      setErrorMessage(response?.data?.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } else if (response?.data?.status?.message === undefined) {
      setErrorMessage(t("Pannel_Dashboard_Supporttickets.wrong"));
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <section className="authentication">
      <AlertMessage errorMessage={errorMessage} />
      <div className="authentication__container">
        <div className="authentication__container__imageBox">
          <div className="authentication__container__imageBox__top">
            <img
              className="authentication__container__imageBox__top__logo"
              onClick={() => navigate(`/${lang === "pl" ? lang : "en"}`)}
              src={require("../../../assets/Signin-logo.png")}
              alt=""
            />
            {/* <img className='authentication__container__imageBox__top__flag' src={require("../../../assets/Signin-flag.png")} alt='' /> */}
          </div>

          <div className="authentication__container__imageBox__bottom">
            <img
              className="authentication__container__imageBox__bottom"
              src={require("../../../assets/BrokerLogin_image.png")}
              alt=""
            />
          </div>
        </div>

        <div className="authentication__container__formContainer">
          <p className="authentication__container__formContainer__registerHeading">
            {t("Pannel_registration.letsregister")}
          </p>
          <form
            onSubmit={submitHandler}
            className="authentication__container__formContainer__registerForm"
          >
            <div>
              <input
                type="text"
                placeholder={`${t("Registration.Firstname")}`}
                name="first_name"
                value={user.first_name}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="text"
                placeholder={`${t("Registration.Lastname")}`}
                name="last_name"
                value={user.last_name}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="email"
                placeholder={`${t("claim.claim_heading_part2")}`}
                name="email"
                value={user.email}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="text"
                placeholder={`${t("Registration.Phonenumber")}`}
                name="phone_number"
                value={user?.phone_number}
                onChange={(e) =>
                  setUser({ ...user, phone_number: e.target.value })
                }
                required={true}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={`${t("Pannel_registration.Brokercompanyname")}`}
                name="company_name"
                value={user.company_name}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="text"
                placeholder={`${t("Pannel_registration.Brokercompanykrsname")}`}
                name="company_krs_number"
                value={user?.company_krs_number}
                onChange={(e) =>
                  setUser({ ...user, company_krs_number: e.target.value })
                }
                required={true}
              />
              <input
                type="text"
                placeholder={`${t(
                  "Pannel_registration.BrokercompanyURLaddress"
                )}`}
                name="company_url_address"
                value={user?.company_url_address}
                onChange={(e) =>
                  setUser({ ...user, company_url_address: e.target.value })
                }
                required={true}
              />
              {/* <input
                type="text"
                placeholder={`${t("Pannel_registration.Rolecompany")}`}
                name='role'
                value={user.role}
                onChange={changeHandler}
                required={true}
              /> */}
            </div>
            <div>
              <input
                type="text"
                placeholder={`${t("Registration.setpassword")}`}
                name="password"
                value={user.password}
                onChange={changeHandler}
                required={true}
              />

              <input
                type="text"
                placeholder={`${t("Registration.repeatpassword")}`}
                name="password_confirmation"
                value={user.password_confirmation}
                onChange={changeHandler}
                required={true}
              />
            </div>
            <Button
              className="authentication__container__formContainer__registerForm__registerButton"
              type="submit"
              style={{ width: "auto" }}
            >
              {t("Pannel_Login.registernow")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
