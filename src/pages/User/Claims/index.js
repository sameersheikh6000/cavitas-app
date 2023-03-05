import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../../../components/Page/Page'

const Claims = () => {
  return (
    <Page>
      <section className='claims'>
        <div className='claims__container'>
          <section className='claims__container__claimsPortal'>
            <header>
              <h1>Welcome to the dental claims portal</h1>
              <p>If you already registered on this portal, simply login with your <b>email address</b> and your <b> password. Please note that you must belong to an existing dental insurance Plan in order to login.</b></p>
            </header>
            <div className='claims__container__claimsPortal__loginBox'>
              <div className='claims__container__claimsPortal__loginBox__details'>
                <p>Login details</p>
                <input type="email" />
                <input type="password" />
                <div>
                  <Button>Login</Button>
                </div>
                <div className='claims__container__claimsPortal__loginBox__details__links'>
                  <p>Click here <Link to="/password/forgot">Forgot your password?</Link></p>
                  <p>Not yet registered? <Link to="/signup">Create an account</Link></p>
                  <p>Trouble logging in? <Link to="/support">Contact support</Link></p>
                </div>
              </div>
            </div>
          </section>
          <div className='claims__container__picture'>
            <img src={require("../../../assets/Claim-image.png")} alt="" />
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Claims