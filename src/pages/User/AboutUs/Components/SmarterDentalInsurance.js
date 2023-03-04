import { Card } from '@mui/material'
import React from 'react'

const SmarterDentalInsurance = () => {
  return (
    <section className='aboutUs__smarterDentalInsurance'>
      <header>
        <h1>Cavitas - Smmarter dental insurance</h1>
        <p>The insurance service provider is Cavitas dental insurance broker OU together with the best dental insurance capacity provider in Europe.</p>
      </header>
      <div className='aboutUs__smarterDentalInsurance__imageContainer'>
        <img className='aboutUs__smarterDentalInsurance__imageContainer__image' src={require("../../../../assets/SmartDentalInsurance-image1.png")} alt="" />
        <img className='aboutUs__smarterDentalInsurance__imageContainer__image' src={require("../../../../assets/SmartDentalInsurance-image2.png")} alt="" />
        <img className='aboutUs__smarterDentalInsurance__imageContainer__image' src={require("../../../../assets/SmartDentalInsurance-image3.png")} alt="" />
      </div>
      <img className='aboutUs__smarterDentalInsurance__cornerImage' src={require("../../../../assets/SmartDentalInsurance-image.png")} alt="" />
    </section>
  )
}

export default SmarterDentalInsurance