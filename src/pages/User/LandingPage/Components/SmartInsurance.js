import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SmartInsurance = () => {
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
            <Link to="/employ">
              <Button variant='outlined'>I'm employer</Button>
            </Link>
            <Link to="/member">
              <Button variant='outlined'>I'm member</Button>
            </Link>
            <Link to="/broker">
              <Button variant='outlined'>I'm broker</Button>
            </Link>
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