import React from 'react'

const ValuableReadings = () => {
  return (
    <section className='landingPage__valuableReadings'>
      <header className='landingPage__valuableReadings__header'>
        <h1>Valuable Reading</h1>
        <p>Recent blog posts</p>
      </header>
      <div className='landingPage__valuableReadings__container'>
        <div className='landingPage__valuableReadings__container__cardsBox'>
          <div className='landingPage__valuableReadings__container__cardsBox__card'>
            <img src={require("../../../../assets/ValuableReading-image.png")} alt='' />
            <p className='landingPage__valuableReadings__container__cardsBox__card__name'>Sed do eiusmod tempor edit magna aliqua.</p>
            <span className='landingPage__valuableReadings__container__cardsBox__card__date'>By cavitas | Dec 5, 2022</span>
            <p className='landingPage__valuableReadings__container__cardsBox__card__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div className='landingPage__valuableReadings__container__cardsBox__card'>
            <img src={require("../../../../assets/ValuableReading-image-1.png")} alt='' />
            <p className='landingPage__valuableReadings__container__cardsBox__card__name'>Sed do eiusmod tempor edit magna aliqua.</p>
            <span className='landingPage__valuableReadings__container__cardsBox__card__date'>By cavitas | Dec 5, 2022</span>
            <p className='landingPage__valuableReadings__container__cardsBox__card__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div className='landingPage__valuableReadings__container__cardsBox__card'>
            <img src={require("../../../../assets/ValuableReading-image-2.png")} alt='' />
            <p className='landingPage__valuableReadings__container__cardsBox__card__name'>Sed do eiusmod tempor edit magna aliqua.</p>
            <span className='landingPage__valuableReadings__container__cardsBox__card__date'>By cavitas | Dec 5, 2022</span>
            <p className='landingPage__valuableReadings__container__cardsBox__card__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuableReadings