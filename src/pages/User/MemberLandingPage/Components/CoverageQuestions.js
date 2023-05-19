import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const CoverageQuestions = () => {
  
  
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
    <section className='landingPage__coverageQuestions'>
      <div className='landingPage__coverageQuestions__container'>
        <h1>Your coverage questions answered</h1>
        <Button onClick={() => navigate("/faq")}>Frequently asked questions</Button>
      </div>
    </section >
  )
}

export default CoverageQuestions