import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
const HowItWork = () => {
  return (
    <section className='landingPage__howItwork'>
      <div className='landingPage__howItwork__container'>
        <div className='landingPage__howItwork__container__picture'>
          <img src={require("../../../../assets/howItWork-image.png")} alt="" />
        </div>

        <div className='landingPage__howItwork__container__details'>
          <h1 className='landingPage__howItwork__container__details__heading'>How does it work?</h1>
          <p className='landingPage__howItwork__container__details__desc'>
          We have long-term plans to keep people's teeth healthy           </p>
          <div className='landingPage__howItwork__container__details__detailsContainer'>
            <div className='landingPage__howItwork__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__howItwork__container__details__detailsContainer__box__icon' />
              <p className='landingPage__howItwork__container__details__detailsContainer__box__text'>
              Free choice of dentists in the home country and in all EU              </p>
            </div>
            <div className='landingPage__howItwork__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__howItwork__container__details__detailsContainer__box__icon' />
              <p className='landingPage__howItwork__container__details__detailsContainer__box__text'>
              All teeth in the mouth are covered regadless of previous treatments      
                      </p>
            </div>
            <div className='landingPage__howItwork__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__howItwork__container__details__detailsContainer__box__icon' />
              <p className='landingPage__howItwork__container__details__detailsContainer__box__text'>
              Increasing coverage during 3 consecutive years              </p>
            </div>
            <div className='landingPage__howItwork__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__howItwork__container__details__detailsContainer__box__icon' />
              <p className='landingPage__howItwork__container__details__detailsContainer__box__text'>
              Cover includes check-ups, cleanings, fillings, root canal treatments, tooth extractions, crowns, bridges, implants - and much more              </p>
            </div>
            <div className='landingPage__howItwork__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__howItwork__container__details__detailsContainer__box__icon' />
              <p className='landingPage__howItwork__container__details__detailsContainer__box__text'>
              Accident cover wordwide              </p>
            </div>
            <div className='landingPage__howItwork__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__howItwork__container__details__detailsContainer__box__icon' />
              <p className='landingPage__howItwork__container__details__detailsContainer__box__text'>
              Oral cancer treatment cover once per lifetime              </p>
            </div>
            <div className='landingPage__howItwork__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__howItwork__container__details__detailsContainer__box__icon' />
              <p className='landingPage__howItwork__container__details__detailsContainer__box__text'>
              Easy claiming and refunding process via Cavitas mobile app or online              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWork