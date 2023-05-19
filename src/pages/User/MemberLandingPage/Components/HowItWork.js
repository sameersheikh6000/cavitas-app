import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
import DoneIcon from '@mui/icons-material/Done';
const HowItWork = () => {
  
  
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, [])
  return (
    <section className='landingPage__howItwork'>
      <div className='landingPage__howItwork__container'>
        <div className='landingPage__howItwork__container__picture'>
          <img src={require("../../../../assets/howItWork-image.png")} alt="" />
        </div>

        <div className='landingPage__howItwork__container__details'>
          <h1 className='landingPage__howItwork__container__details__heading'>How does it work?</h1>
          <p className='landingPage__howItwork__container__details__desc'>
            We have long-term plans to keep your teeth healthy.
          </p>
          <div className='landingPage__howItwork__container__details__detailsContainer'>
            <div className='landingPage__howItwork__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__howItwork__container__details__detailsContainer__box__icon' />
              <p className='landingPage__howItwork__container__details__detailsContainer__box__text'>
                Payment of dental bills of upto XX per year.
              </p>
            </div>
            <div className='landingPage__howItwork__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__howItwork__container__details__detailsContainer__box__icon' />
              <p className='landingPage__howItwork__container__details__detailsContainer__box__text'>
                Free choice of dentist in the home country and in all EU.
              </p>
            </div>
            <div className='landingPage__howItwork__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__howItwork__container__details__detailsContainer__box__icon' />
              <p className='landingPage__howItwork__container__details__detailsContainer__box__text'>
                All teeth are covered - regardless of previous treatment coverage of regular check-ups and cleanings, fillings, root.
              </p>
            </div>
            <div className='landingPage__howItwork__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__howItwork__container__details__detailsContainer__box__icon' />
              <p className='landingPage__howItwork__container__details__detailsContainer__box__text'>
                Canal periodontists, tooth extraction, crowns, bridges and implants and mcuh more.
              </p>
            </div>
            <div className='landingPage__howItwork__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__howItwork__container__details__detailsContainer__box__icon' />
              <p className='landingPage__howItwork__container__details__detailsContainer__box__text'>
                You are also covered for accidents worldwide and oral cancer treatment once per lifetime.
              </p>
            </div>
            <div className='landingPage__howItwork__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__howItwork__container__details__detailsContainer__box__icon' />
              <p className='landingPage__howItwork__container__details__detailsContainer__box__text'>
                We refund your dental bill for already rendered and paid service.
              </p>
            </div>
            <div className='landingPage__howItwork__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__howItwork__container__details__detailsContainer__box__icon' />
              <p className='landingPage__howItwork__container__details__detailsContainer__box__text'>
                Easy claim by sending a photo or scanned copy of the dental bill via Cavitas mobile app or online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWork