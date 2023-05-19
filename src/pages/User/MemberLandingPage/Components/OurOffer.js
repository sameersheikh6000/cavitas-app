import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';

const OurOffer = () => {
  
  
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, [])
  return (
    <section className='landingPage__ourOffer'>
      <header className='landingPage__ourOffer__header'>
        <h1>What we offer</h1>
        <p>The struggle to retain valuable employees is great and most companies therefore offer a package of employee benefits. We offer as employee benefit valuable coverage of employee's dental bills.</p>
      </header>
      <div className='landingPage__ourOffer__container'>
        <div className='landingPage__ourOffer__container__boxes'>
          <div className='landingPage__ourOffer__container__boxes__detailsContainer'>
            <h4 className='landingPage__ourOffer__container__boxes__detailsContainer__heading'>Value for member</h4>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Lorem ipsum</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Lorem ipsum</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Lorem ipsum</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Lorem ipsum</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Lorem ipsum</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Lorem ipsum</span>
            </div>
            <Button>Suggest to your employer</Button>
          </div>
          <div className='landingPage__ourOffer__container__boxes__detailsContainer'>
            <h4 className='landingPage__ourOffer__container__boxes__detailsContainer__heading'>Value for employer</h4>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Lorem ipsum</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Lorem ipsum</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Lorem ipsum</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Lorem ipsum</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Lorem ipsum</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Lorem ipsum</span>
            </div>
            <Button>Get a quote in 24hrs</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurOffer