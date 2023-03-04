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
          <p className='aboutUs__ourStory__container__detailsBox__desc1'>Cavitas - smarter dental insurance providing dental insurance in smarter way in order to focus on prevention of teeth related problems which help peoples to keep their natural teeth longer (hopefully all their lives), have all teeth related help in their smartphones...</p>
          <p className='aboutUs__ourStory__container__detailsBox__desc2'>Last but not least - we are getting even more smarter! stay tuned!</p>
        </div>
      </div>
    </section>
  )
}

export default OurStory