import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import GetQuoteCavitas from '../BrokerFormComponent/GetQuoteCavitas'
const CoverWorks = () => {
  const navigate = useNavigate();
  return (
    <section className='landingPage__coverWorks'>
      <header>
        <h1>How cover works?</h1>
        <p>We offer long-term support to keep member's teeth healthy.</p>
      </header>
      <div className='landingPage__coverWorks__container'>
        <div className='landingPage__coverWorks__container__cards'>
          <div className='landingPage__coverWorks__container__cards__card'>
            <div className='landingPage__coverWorks__container__cards__card__top'>
              <h1>Year 1</h1>
            </div>
            <p>Prevention treatment</p>
            <p>X-rays</p>
            <p>Anesthesia</p>
            <p>Filling</p>
            <p>Root canal treatment</p>
            <p>Extraction</p>
            <p>Worldwide accident cover</p>
            <p>Oral cacer</p>
            <div className='landingPage__coverWorks__container__cards__card__bottom'>
              <span>*One (1) per lifetime</span>
            </div>
          </div>
          <div className='landingPage__coverWorks__container__cards__card'>
            <div className='landingPage__coverWorks__container__cards__card__top'>
              <h1>Year 2</h1>
            </div>
            <p>Prevention treatment</p>
            <p>X-rays</p>
            <p>Anesthesia</p>
            <p>Filling</p>
            <p>Root canal treatment</p>
            <p>Extraction</p>
            <p>Crown</p>
            <p>Bridge</p>
            <p>Denture</p>
            <p>Implant</p>
            <p>Worldwide accident cover</p>
            <p>Oral cacer cover*</p>
            <div className='landingPage__coverWorks__container__cards__card__bottom'>
              <span>*One (1) per lifetime</span>
            </div>
          </div>
          <div className='landingPage__coverWorks__container__cards__card'>
            <div className='landingPage__coverWorks__container__cards__card__top'>
              <h1>Year 3</h1>
            </div>
            <p>Prevention treatment</p>
            <p>X-rays</p>
            <p>Anesthesia</p>
            <p>Filling</p>
            <p>Root canal treatment</p>
            <p>Extraction</p>
            <p>Crown</p>
            <p>Bridge</p>
            <p>Denture implant!!!</p>
            <p>Teeth whitening</p>
            <p>Adult orthodontics*</p>
            <p>Worldwide accident cover</p>
            <p>Oral cacer cover*</p>
            <div className='landingPage__coverWorks__container__cards__card__bottom'>
              <span>*One (1) per lifetime</span>
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