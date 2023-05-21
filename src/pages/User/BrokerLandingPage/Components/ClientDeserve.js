import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
import { useNavigate } from 'react-router-dom'

const ClientDeserve = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, [])
  const navigate = useNavigate();
  return (
    <section className='landingPage__clientDeserve'>
      <div className='landingPage__clientDeserve__container'>
        <p>{t("Broker.Broker_landing_Page_title1")}</p>
        <h1>{t("Broker.Broker_landing_Page_title2")}</h1>
        <Button onClick={() => navigate(`/signin/${lang == "pl" ? "pl" : "en"}`)}
        >{t("Broker.Broker_login_button")}</Button>
      </div>
    </section >
  )
}

export default ClientDeserve