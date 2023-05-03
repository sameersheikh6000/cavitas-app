import { Card } from '@mui/material'
import React from 'react'

const SmarterDentalInsurance = () => {
  return (
    <section className='aboutUs__smarterDentalInsurance'>
      <header>
        <h1>Cavitas - Smmarter dental insurance</h1>
<p>
The insurance service provider is Northern1 international insurance brokers OÜ. We are agent of our clients and we act in best interest of our clients.   </p>
      <p>We do our best efforts to provide the selection of insurance contracts from various dental insurance capacity providers in Europe. </p>
      <p>Due to specifics of dental insurance cover we currently mediate dental insurance contracts from 2 capacity providers:</p>
      </header>
      <div className='aboutUs__smarterDentalInsurance__imageContainer'>
        <img className='aboutUs__smarterDentalInsurance__imageContainer__image' src={require("../../../../assets/SmartDentalInsurance-image1.png")} alt="" />
        {/* <img className='aboutUs__smarterDentalInsurance__imageContainer__image' src={require("../../../../assets/SmartDentalInsurance-image2.png")} alt="" /> */}
        <img className='aboutUs__smarterDentalInsurance__imageContainer__image' src={require("../../../../assets/SmartDentalInsurance-image3.png")} alt="" />
      </div>
      <img className='aboutUs__smarterDentalInsurance__cornerImage' src={require("../../../../assets/SmartDentalInsurance-image.png")} alt="" />
    </section>
  )
}

export default SmarterDentalInsurance