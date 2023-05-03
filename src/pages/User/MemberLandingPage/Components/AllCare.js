import React from 'react'
import DoneIcon from '@mui/icons-material/Done';

const AllCare = () => {
  return (
    <section className='landingPage__allCare'>
      <div className='landingPage__allCare__container'>
        <div className='landingPage__allCare__container__details'>
          <h1 className='landingPage__allCare__container__details__heading'>All-in-1 teeth care!</h1>
          <p className='landingPage__allCare__container__details__desc'>
          Download the Cavitas app to have all information in your pocket. Try it out!          </p>
          <div className='landingPage__allCare__container__details__detailsContainer'>
            <div className='landingPage__allCare__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__allCare__container__details__detailsContainer__box__icon' />
              <p className='landingPage__allCare__container__details__detailsContainer__box__text'>
              Quick dental cover information              </p>
            </div>
            <div className='landingPage__allCare__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__allCare__container__details__detailsContainer__box__icon' />
              <p className='landingPage__allCare__container__details__detailsContainer__box__text'>
              Daily brushing tips & hints
              </p>
            </div>
            <div className='landingPage__allCare__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__allCare__container__details__detailsContainer__box__icon' />
              <p className='landingPage__allCare__container__details__detailsContainer__box__text'>
              Easy claim reporting & monitoring
              </p>
            </div>
            <div className='landingPage__allCare__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__allCare__container__details__detailsContainer__box__icon' />
              <p className='landingPage__allCare__container__details__detailsContainer__box__text'>
              Shop for effective teeth care products               </p>
            </div>
            {/* <div className='landingPage__allCare__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__allCare__container__details__detailsContainer__box__icon' />
              <p className='landingPage__allCare__container__details__detailsContainer__box__text'>
                Shop for teeth care products.
              </p>
            </div> */}
          </div>
          <div className='landingPage__allCare__container__details__imageContainer'>
            <img className='landingPage__allCare__container__details__imageContainer__android' src={require("../../../../assets/allCareAndroid-image.png")} alt="" />
            <img className='landingPage__allCare__container__details__imageContainer__apple' src={require("../../../../assets/allCareiOS-image.png")} alt="" />
          </div>
        </div>
        <div className='landingPage__allCare__container__picture'>
          <img src={require("../../../../assets/AllCare-image.png")} alt="" />
        </div>
      </div>
    </section>
  )
}

export default AllCare