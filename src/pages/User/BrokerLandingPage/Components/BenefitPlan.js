import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';

const BenefitPlan = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, [])
  return (
    <section className='landingPage__benefitPlan'>
      <div className='landingPage__benefitPlan__container'>
        <div className='landingPage__benefitPlan__container__picture'>
          <img src={require("../../../../assets/broker3.png")} alt="" />
        </div>

        <div className='landingPage__benefitPlan__container__details'>
          <p className='landingPage__benefitPlan__container__details__head'>
          {t("Broker.Broker__Benefits__title")}          </p>
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>
            {t("Broker.Broker__Benefits__1")}                </p>
          </div>
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>
            {t("Broker.Broker__Benefits__2")}             </p>
          </div>
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>
            {t("Broker.Broker__Benefits__3")}            </p>
          </div>
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>
            {t("Broker.Broker__Benefits__4")}             </p>
          </div>
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>
            {t("Broker.Broker__Benefits__5")} </p>          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitPlan
