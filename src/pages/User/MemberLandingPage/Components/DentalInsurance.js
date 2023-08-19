import { Button } from '@mui/material'
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
import { Link } from 'react-router-dom'

const DentalInsurance = () => {


  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, [])
  return (
    <section className='landingPage__dentaltInsurance'>
      <div className='landingPage__dentaltInsurance__container'>
        <div className='landingPage__dentaltInsurance__container__details'>
        <h1 className='landingPage__smartInsurance__container__details__heading'>{t("Pannel_Dashboard_Dashboard.Heading_Part6")}</h1>
          <h1 className='landingPage__smartInsurance__container__details__heading2'>{t("Member.Member_landingPage_title2")}</h1>
                   <p className='landingPage__dentaltInsurance__container__details__desc'>
                   {t("Member.Member_landingPage_heading")}          </p>
          <div className='landingPage__dentaltInsurance__container__details__buttons'>
            <Link to={`/member-signin/${lang === "pl" ? "pl" : "en"}`}>
              <Button variant='outlined'>{t("Member.Member_landingPage_btn1")}</Button>
            </Link>
            <Link to={`/claims/${lang === "pl" ? "pl" : "en"}`}>
              <Button variant='outlined'>{t("Pannel_Dashboard.submitaclaim")}</Button>
            </Link>
          </div>
        </div>
        <div className='landingPage__dentaltInsurance__container__picture' >
          <img src={require("../../../../assets/DentalInsurance-image.png")} alt="" />
        </div>
      </div>
    </section >
  )
}

export default DentalInsurance
