import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../config/helpers/i18n';
import useUsers from '../../../hooks/useUsers';
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';
import { useNavigate } from 'react-router-dom';

const EmploySignUp = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, [])
  const { createUser } = useUsers();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company_name: "",
    krs_number: "",
    url_address: "",
    role: "",
    broker_mandate: "",
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
      if (!user[prop]) return alert(t("Pannel_Dashboard_Supporttickets.fill"))
    }
    const response = await createUser(user, "employ");

    if (response?.status?.code < 300) {
      navigate(`/dashboard/${lang == 'pl' ? lang : 'en'}`);
    } else if (response?.data?.message !== undefined) {
      setErrorMessage(response?.data?.message);
    } else if (response?.data?.status?.message == undefined) {
      setErrorMessage(t("Pannel_Dashboard_Supporttickets.wrong"));
    }
  };


  return (
    <section className='authentication'>
      <AlertMessage errorMessage={errorMessage} />
      <div className='authentication__container'>

        <div className='authentication__container__imageBox'>
          <div className='authentication__container__imageBox__top' onClick={() => navigate("/")}>
            <img className='authentication__container__imageBox__top__logo' src={require("../../../assets/Signin-logo.png")} alt='' />
            <img className='authentication__container__imageBox__top__flag' src={require("../../../assets/Signin-flag.png")} alt='' />
          </div>

          <div className='authentication__container__imageBox__bottom'>
            <img className='authentication__container__imageBox__bottom' src={require("../../../assets/EmployeeLogin-image.png")} alt='' />
          </div>
        </div>

        <div className='authentication__container__formContainer'>
          <p className='authentication__container__formContainer__registerHeading'>{t("Pannel_registration.letsregister")}</p>
          <form onSubmit={submitHandler} className='authentication__container__formContainer__registerForm'>
            <div>
              <input
                type="text"
                placeholder={`${t("Pannel_registration.Firstname")}`} 
                name='first_name'
                value={user.first_name}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="text"
                placeholder={`${t("Pannel_registration.Lastname")}`} 
                name='last_name'
                value={user.last_name}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="email"
                placeholder='Email address *'
                name='email'
                value={user.email}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="text"
                placeholder={`${t("Pannel_registration.Phonenumber")}`} 
                name='phone'
                value={user.phone}
                onChange={changeHandler}
                required={true}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={`${t("Employer_Pannel_registration.companyname")}`}               
                name='company_name'
                value={user.company_name}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="text"
                placeholder={`${t("Employer_Pannel_registration.companykrsname")}`}               
                name='krs_number'
                value={user.krs_number}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="text"
                placeholder={`${t("Employer_Pannel_registration.companyURLaddress")}`}               
                name='url_address'
                value={user.url_address}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="text"
                placeholder={`${t("Pannel_registration.Rolecompany")}`}               
                name='role'
                value={user.role}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="text"
                placeholder={`${t("Employer_Pannel_registration.Mandatebroker")}`}               
                name='broker_mandate'
                value={user.broker_mandate}
                onChange={changeHandler}
              // required={true}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder={`${t("Pannel_registration.setpassword")}`}               
                name='password'
                value={user.password}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="password"
                placeholder={`${t("Pannel_registration.repeatpassword")}`}               
                name='password_confirmation'
                value={user.password_confirmation}
                onChange={changeHandler}
                required={true}
              />
            </div>
            <Button className='authentication__container__formContainer__registerForm__registerButton' type="submit">    {t("Pannel_Login.registernow")}</Button>
          </form>
        </div >

      </div >
    </section >
  )
}

export default EmploySignUp