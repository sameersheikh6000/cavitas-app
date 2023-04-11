import React from 'react'

const BenefitPlan = () => {
  return (
    <section className='landingPage__benefitPlan'>
      <div className='landingPage__benefitPlan__container'>
        <div className='landingPage__benefitPlan__container__picture'>
          <img src={require("../../../../assets/BenefitPlan-image.png")} alt="" />
        </div>

        <div className='landingPage__benefitPlan__container__details'>
          <p className='landingPage__benefitPlan__container__details__head'>
          Provide long-awaited dental care benefits to your clients' employees          </p>
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>
            To attract and keep talented employees              </p>
          </div>
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>
            To demonstrate commitment to the health of employees and their families
            </p>
          </div>
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>
            To helping employees to access preventive dental care, which can help detect oral health issues at early stage
            </p>
          </div>
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>
            To improve productivity and reduce absenteeism caused by toothaches or gum disease            </p>
          </div>
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>
            To relieave employees' dental costs burden</p>          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitPlan