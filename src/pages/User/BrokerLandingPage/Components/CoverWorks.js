import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import GetQuoteCavitas from '../BrokerFormComponent/GetQuoteCavitas'
const CoverWorks = () => {
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
    <section className='landingPage__coverWorks'>
      <header>
        <h1>{t("Broker.CoverWork__title")}</h1>
        <p>{t("Broker.CoverWork__heading")}</p>
      </header>
      <div className='landingPage__coverWorks__container'>
        <div className='landingPage__coverWorks__container__cards'>
          
          <div className='landingPage__coverWorks__container__cards__card'>
            <div className='landingPage__coverWorks__container__cards__card__top'>
              <h1>{t("Broker.CoverWork__year1")}</h1>
            </div>
            <p>{t("Broker.CoverWork_no1")}</p>
            <p>{t("Broker.CoverWork_no2")}</p>
            <p>{t("Broker.CoverWork_no3")}</p>
            <p>{t("Broker.CoverWork_no4")}</p>
            <p>{t("Broker.CoverWork_no6")}</p>
            <p>{t("Broker.CoverWork_no5")}</p>
            {/* <p>Periodontal treatment</p> */}
            <p>{t("Broker.CoverWork_no7")}</p>
            <p>{t("Broker.CoverWork_no8")}</p>
            <div className='landingPage__coverWorks__container__cards__card__bottom'>
              <span>{t("Broker.CoverWork_no9")}</span>
            </div>
          </div>
          
          <div className='landingPage__coverWorks__container__cards__card'>
            <div className='landingPage__coverWorks__container__cards__card__top'>
              <h1>{t("Broker.CoverWork__year2")}</h1>
            </div>
            <p>{t("Broker.CoverWork_no1")}</p>
            <p>{t("Broker.CoverWork_no2")}</p>
            <p>{t("Broker.CoverWork_no3")}</p>
            <p>{t("Broker.CoverWork_no4")}</p>
            <p>{t("Broker.CoverWork_no5")}</p>
            <p>{t("Broker.CoverWork_no6")}</p>
{/* 
            <p>Periodontal treatment</p> */}
            <p>{t("Broker.CoverWork_no10")}</p>
            <p>{t("Broker.CoverWork_no11")}</p>

            {/* <p>Denture</p>
            <p>Implant</p> */}
            <p>{t("Broker.CoverWork_no7")}</p>
            <p>{t("Broker.CoverWork_no8")}</p>
            <div className='landingPage__coverWorks__container__cards__card__bottom'>
              <span>{t("Broker.CoverWork_no9")}</span>
            </div>
          </div>
         
          <div className='landingPage__coverWorks__container__cards__card'>
            <div className='landingPage__coverWorks__container__cards__card__top'>
              <h1>{t("Broker.CoverWork__year3")}</h1>
            </div>
            <p>{t("Broker.CoverWork_no1")}</p>
            <p>{t("Broker.CoverWork_no2")}</p>
            <p>{t("Broker.CoverWork_no3")}</p>
            <p>{t("Broker.CoverWork_no4")}</p>
            <p>{t("Broker.CoverWork_no6")}</p>
            <p>{t("Broker.CoverWork_no5")}</p>
            {/* <p>Periodontal treatment</p> */}
            <p>{t("Broker.CoverWork_no10")}</p>
            <p>{t("Broker.CoverWork_no11")}</p>
            <p>{t("Broker.CoverWork_no12")}</p>
            <p>{t("Broker.CoverWork_no13")}</p>

            <p>{t("Broker.CoverWork_no14")}</p>
            <p>{t("Broker.CoverWork_no15")}</p>

            <p>{t("Broker.CoverWork_no7")}</p>
            <p>{t("Broker.CoverWork_no8")}</p>

            <div className='landingPage__coverWorks__container__cards__card__bottom'>
              <span>{t("Broker.CoverWork_no9")}</span>
            </div>
         
          </div>
       
        </div>
      </div>

     <div className='landingPage__clientDeserve__container'>
         <GetQuoteCavitas />    
     </div>
   
    </section >
  )
}

export default CoverWorks