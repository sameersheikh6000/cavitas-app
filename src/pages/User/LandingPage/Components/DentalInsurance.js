import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const DentalInsurance = () => {
  return (
    <section className='landingPage__dentaltInsurance'>
      <div className='landingPage__dentaltInsurance__container'>
        <div className='landingPage__dentaltInsurance__container__details'>
          <h1 className='landingPage__dentaltInsurance__container__details__heading'>Dental Insurance</h1>
          <p className='landingPage__dentaltInsurance__container__details__desc'>
            Cavitas - smarter dental insurance cover exactly what you need to keep your natural teeth in good shapre for minimum 3 years.
          </p>
          <div className='landingPage__dentaltInsurance__container__details__buttons'>
            <Link to="/member-signin">
              <Button variant='outlined'>Member login</Button>
            </Link>
            <Link to="/claims">
              <Button variant='outlined'>Submit claim</Button>
            </Link>
          </div>
        </div>
        <div className='landingPage__dentaltInsurance__container__picture'>
          <img src={require("../../../../assets/DentalInsurance-image.png")} alt="" />
        </div>
      </div>
    </section >
  )
}

export default DentalInsurance