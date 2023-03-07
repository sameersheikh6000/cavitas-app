import React from 'react'

const BenefitPlan = () => {
  return (
    <section className='landingPage__benefitPlan'>
      <div className='landingPage__benefitPlan__container'>
        <div className='landingPage__benefitPlan__container__picture'>
          <img src={require("../../../../assets/EmployeeBenefit-image.png")} alt="" />
        </div>

        <div className='landingPage__benefitPlan__container__details'>
          <p className='landingPage__benefitPlan__container__details__head'>Give teeth care related employee benefit plan for your employees what they have been waiting for</p >
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>Additional value-added offers for employees andrew recruiters.</p>
          </div>
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>Healthier employees.</p>
          </div>
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>Better prices for corporate employees.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitPlan