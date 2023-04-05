import React from 'react'

const OurStory = () => {
  return (
    <section className='aboutUs__ourStory'>
      <div className='aboutUs__ourStory__container'>
        <div className='aboutUs__ourStory__container__profilesBox'>
          <div className='aboutUs__ourStory__container__profilesBox__left'>
            <img className='aboutUs__ourStory__container__profilesBox__left__profileImage' src={require("../../../../assets/AboutCoFounder-2.png")} alt="" />
            <p className='aboutUs__ourStory__container__profilesBox__left__name'>Signe Soonberg</p>
            <span className='aboutUs__ourStory__container__profilesBox__left__designation'>Co-Founder</span>
            <div className='aboutUs__ourStory__container__profilesBox__left__linkedInIcon'>
              <img src={require("../../../../assets/LinkedIn-icon.png")} alt="" />
            </div>
          </div>
          <div className='aboutUs__ourStory__container__profilesBox__right'>
            <img className='aboutUs__ourStory__container__profilesBox__right__profileImage' src={require("../../../../assets/AboutCoFounder-1.png")} alt="" />
            <p className='aboutUs__ourStory__container__profilesBox__right__name'>Jean Pierre <br /> Bredorf</p>
            <span className='aboutUs__ourStory__container__profilesBox__right__designation'>Co-Founder</span>
            <div className='aboutUs__ourStory__container__profilesBox__right__linkedInIcon'>
              <img src={require("../../../../assets/LinkedIn-icon.png")} alt="" />
            </div>
          </div>
        </div>
        <div className='aboutUs__ourStory__container__detailsBox'>
          <h1>Our Story</h1>
          <p className='aboutUs__ourStory__container__detailsBox__desc'>We started in 2018.....</p>
          <p className='aboutUs__ourStory__container__detailsBox__desc1'>
          In 2018 we started mediating dental insurance contracts to people in Estonia where, like in other Estern-Europe (post-Soviet) countries such insurance product offer was not existing. During 4 years we eperience high interest towards such risk as well high risk profile of the product.             </p>
          
          <p className='aboutUs__ourStory__container__detailsBox__desc1'>
          Via discussions with numerous dental insurance risk carriers, we have found a way to both satisfy the insurance interest needs of our clients and, on the other hand, satisfy insurers' demands for the fair loss ratios.</p>          
          <p className='aboutUs__ourStory__container__detailsBox__desc2'>
          Last but not least - we are getting even more smarter! Stay turned!             </p>
        </div>
      </div>
    </section>
  )
}

export default OurStory