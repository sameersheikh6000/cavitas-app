import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer__container'>
        <img className='footer__container__logo' src={require("../../assets/Footer-logo.png")} alt='' />
        <div className='footer__container__top'>
          <div className='footer__container__top__box'>
            <p className='footer__container__top__box__details'>
              The insurance service provider: <br /> is Cavitas dental insurance OU. <br /> License nr 16501780. <br />Tallinn Estonia
            </p>
          </div>
          <div className='footer__container__top__box'>
            <Link to="/support">
              Contact for support
            </Link>
            <Link to="/complaint">
              Contact for complaint
            </Link>
            <Link to="/feedback">
              Give us feedback
            </Link>
          </div>
          <div className='footer__container__top__box'>
            <Link to="/about">
              About us
            </Link>
            <Link to="/blog">
              Blog
            </Link>
            <Link to="/faq">
              FAQ
            </Link>
            <Link to="/privacypolicy">
              Privacy policy
            </Link>
            <Link to="/shop">
              Shop
            </Link>
          </div>
          <div className='footer__container__top__box'>
            <Link to="/findus">
              Find us
            </Link>
          </div>
        </div>
        <p className='footer__container__copyRight'>c 2022 Cavitas - smarter dental insurance.</p>
      </div>
    </section>
  )
}

export default Footer