import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const DentalInsurance = () => {
  return (
    <section className='landingPage__dentaltInsurance'>
      <div className='landingPage__dentaltInsurance__container'>
        <div className='landingPage__dentaltInsurance__container__details'>
        <h1 className='landingPage__smartInsurance__container__details__heading'>Smarter</h1>
          <h1 className='landingPage__smartInsurance__container__details__heading2'>Dental Insurance</h1>
                   <p className='landingPage__dentaltInsurance__container__details__desc'>
          Cavitas dental insurance is here to help you to keep your teeth in good health
          </p>
          <div className='landingPage__dentaltInsurance__container__details__buttons'>
            <Link to="/member-signin">
              <Button variant='outlined'>Member log in</Button>
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