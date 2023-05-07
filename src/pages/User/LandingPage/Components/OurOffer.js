import { Button } from '@mui/material'
import React from 'react'
import GetQuoteCavitas from './LandingPageFormComponent/GetQuoteCavitas'

const OurOffer = () => {
  return (
    <section className='landingPage__ourOffer'>
      <header className='landingPage__ourOffer__header'>
        <h1>What do we offer?</h1>
<p>
To attract and retain top talents, companies often provide additional benefits beyond just salary. We offer reimbursement for dental treatment costs as one of our services because dental expenses can be a significant financial burden for employees.
</p>
      </header>
      <div className='landingPage__ourOffer__container'>
        <div className='landingPage__ourOffer__container__boxes'>
          <div className='landingPage__ourOffer__container__boxes__detailsContainer'>
            <h4 className='landingPage__ourOffer__container__boxes__detailsContainer__heading'>Value for member</h4>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Eases the cost of dental treatment</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Regular prevention care</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Healthier teeth</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Better overall health</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Family is also covered</span>
            </div>
            {/* <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Lorem ipsum</span>
            </div> */}
            {/* <Button>Suggest to your employer</Button> */}
          </div>
          
          <div className='landingPage__ourOffer__container__boxes__detailsContainer'>
            <h4 className='landingPage__ourOffer__container__boxes__detailsContainer__heading'>Value for employer</h4>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Attract and retain top talents</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Healthier employees</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Less sickness days</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Increased productivity</span>
            </div>
            <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>A caring company image</span>
            </div>
            {/* <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Lorem ipsum</span>
            </div> */}
            {/* <GetQuoteCavitas /> */}
          </div>
          
        </div>
       
       
        <div className='landingPage__ourOffer__container__boxes'>
          <div className='landingPage__ourOffer__container__boxes__detailsContainer'
           style={{border: "none"}}>
         
          
            <Button>Suggest to your employer</Button>
          </div>
          
          <div className='landingPage__ourOffer__container__boxes__detailsContainer'
          style={{border: "none"}}>
            <GetQuoteCavitas />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default OurOffer