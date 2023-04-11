import React from 'react'

const BenefitPlan = () => {
  return (
    <section className='landingPage__benefitPlan'>
      <div className='landingPage__benefitPlan__container'>
        <div className='landingPage__benefitPlan__container__picture'>
          <img src={require("../../../../assets/EmployeeBenefit-image.png")} alt="" />
        </div>

        <div className='landingPage__benefitPlan__container__details'>
          <p className='landingPage__benefitPlan__container__details__head'>
          By enabling oral health related employee benefit plan you are:</p>
                    <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>
            Attracting and retaining talented employees
            </p>
          </div>
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>
            Demonstrating your commitment to the health and well-being of your employees and their families
            </p>
          </div>
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>
            Improving productivity and reduce absenteeism caused by toothaches or gum disease              </p>
          </div>
          <div>
            <img src={require('../../../../assets/OfferTick-image.png')} alt="" />
            <p>
            Improving employees' ability to save on dental costs</p>          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitPlan