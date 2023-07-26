import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../config/helpers/i18n';
import useUsers from '../../../hooks/useUsers';
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';
import { useNavigate } from 'react-router-dom';

const MemberSignUp = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const { createUser } = useUsers();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company_pesel_number: '',
    password: "",
    password_confirmation: "",
  });

  const changeHandler = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = async e => {

    e.preventDefault();
    for (let prop in user) {
      if (!user[prop]) return alert(t("Pannel_Dashboard_Supporttickets.fill"));
    }
    const response = await createUser(user, "member");
    if (response?.status?.code < 300) {
      navigate(`/dashboard/${lang === 'pl' ? lang : "en" }`);
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

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, [])

  return (
    <section className='authentication'>
      <AlertMessage errorMessage={errorMessage} />
      <div className='authentication__container'>

        <div className='authentication__container__imageBox'>
          <div className='authentication__container__imageBox__top' >
            <img className='authentication__container__imageBox__top__logo' onClick={() =>navigate`/member-signup/${lang === "pl" ? "pl" : "en"}`}
             src={require("../../../assets/Signin-logo.png")} alt='' />
            {/* <img className='authentication__container__imageBox__top__flag' src={require("../../../assets/Signin-flag.png")} alt='' /> */}
          </div>

          <div className='authentication__container__imageBox__bottom'>
            <img className='authentication__container__imageBox__bottom' src={require("../../../assets/MemberLogin-image.png")} alt='' />
          </div>
        </div>

        <div className='authentication__container__formContainer'>
          <p className='authentication__container__formContainer__registerHeading'>{t("Pannel_registration.letsregister")}</p>
          <form onSubmit={submitHandler} className='authentication__container__formContainer__registerForm'>
            <div>
              <input
                type="text"
                placeholder={`${t("Registration.Firstname")}`}
                name='first_name'
                value={user.first_name}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="text"
                placeholder={`${t("Registration.Lastname")}`}
                name='last_name'
                value={user.last_name}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="email"
                placeholder='Email address'
                name='email'
                value={user.email}
                onChange={changeHandler}
                required={true}
              />

              <input
                type="text"
                placeholder={`${t("Pannel_Dashboard_Userprofile.Peselnumber")}`}
                name='company_pasel_number'
                value={user.company_pesel_number}
                onChange={(e) => setUser({ ...user, company_pesel_number: e.target.value})}
                required={true}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder={`${t("Registration.setpassword")}`}
                name='password'
                value={user.password}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="password"
                placeholder={`${t("Registration.repeatpassword")}`}
                name='password_confirmation'
                value={user.password_confirmation}
                onChange={changeHandler}
                required={true}
              />
            </div>
            <Button className='authentication__container__formContainer__registerForm__registerButton' type="submit">
            {t("Pannel_Login.registernow")}

            </Button>
          </form>
        </div >

      </div >
    </section >
  )
}

export default MemberSignUp
