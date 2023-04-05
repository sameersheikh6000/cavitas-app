import React from 'react'

const PrivacyPolicy = () => {
  return (
    <section className='aboutUs__privacyPolicy'>
      <header>
        <h1>Our privacy policy and other documents</h1>
      </header>
      <div className='aboutUs__privacyPolicy__container'>
        <div className='aboutUs__privacyPolicy__container__card'>
          <img src={require('../../../../assets/PrivacyPolicy-image.png')} alt="" />
          <p>Privacy policy</p>
        </div>
        <div className='aboutUs__privacyPolicy__container__card'>
          <img src={require('../../../../assets/PrivacyPolicy-image.png')} alt="" />
          <p>Cookie policy</p>
        </div>
        <div className='aboutUs__privacyPolicy__container__card'>
          <img src={require('../../../../assets/PrivacyPolicy-image.png')} alt="" />
          <p>Broker <br /> agreement</p>
        </div>
        <div className='aboutUs__privacyPolicy__container__card'>
          <img src={require('../../../../assets/PrivacyPolicy-image.png')} alt="" />
          <p>Company <br /> documents</p>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy