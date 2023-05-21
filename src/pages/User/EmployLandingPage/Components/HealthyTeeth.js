import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
import { useNavigate } from 'react-router-dom'

const HealthyTeeth = () => {
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
    <section className='landingPage__healthyTeeth'>
      <div className='landingPage__healthyTeeth__container'>
        <h1>{t("Employer.Employer_landingpage_title")}</h1>
        <Button onClick={() => navigate(`/employ-signin/${lang == "pl" ? "pl" : "en"}`)}
        > {t("Employer.Employer_landingpage_button")}</Button>
      </div>
    </section >
  )
}

export default HealthyTeeth