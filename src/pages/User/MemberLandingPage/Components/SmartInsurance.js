import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
import { Link } from 'react-router-dom'

const SmartInsurance = () => {


  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, [])
  return (
   
    <section className='landingPage__smartInsurance'>
      <div className='landingPage__smartInsurance__container'>
        <div className='landingPage__smartInsurance__container__details'>
          <h1 className='landingPage__smartInsurance__container__details__heading'>Smarter</h1>
          <h1 className='landingPage__smartInsurance__container__details__heading2'>Dental Insurance</h1>
          <p className='landingPage__smartInsurance__container__details__desc'>
            Healthy teeth are foundation of healthy employees. We mediate dental insurance contracts as emplyee benefit provided by their employer to employees.
          </p>
          <div className='landingPage__smartInsurance__container__details__buttons'>
            {/* <Button variant='outlined'>I'm employer</Button> */}
            <Link to="/member-signin">
              <Button variant='outlined'>I'm member</Button>
            </Link>
            {/* <Button variant='outlined'>I'm broker</Button> */}
          </div>
        </div>
        <div className='landingPage__smartInsurance__container__picture'>
          <img src={require("../../../../assets/SmartInsurance-image.png")} alt="" />
        </div>
      </div>
    </section>
   
  )
}

export default SmartInsurance
