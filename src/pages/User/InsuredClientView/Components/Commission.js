import React from 'react'

const Commission = ({ user }) => {
  return (
    <div className='insuredClientGroup__container__cardsBox__card'>
      <div className='insuredClientGroup__container__cardsBox__card__top'>
        <p>Benefits per insured person</p>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Treatmnent type:</p>
          <p>Annual sum insured</p>
        </div>
        {user?.data?.role === "broker" &&
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
            <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Commission:</p>
            <p>38,690 EUR</p>
          </div>
        }
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__top'>
        <p style={{ border: "none" }}>REGULAR DENTAL TREATMENT 4500 PLN</p>
        <span>Poland and EU/EEA</span>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Group1: Prevention and scling</p>
          <p>1330PLN</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Group2: X-rays</p>
          <p>1330PLN</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Group3: Basic treatments</p>
          <p>1330PLN</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Group4: Major treatments</p>
          <p>1330PLN</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'></p>
          <p>1330PLN</p>
        </div>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__top'>
        <p style={{ border: "none" }}>ACCIDENT DENTAL TREATMENT 4500 PLN</p>
        <span>Worlwide</span>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'></p>
          <p></p>
        </div>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__top'>
        <p style={{ border: "none" }}>ORAL CANCER TREATMENT 25000 PLN</p>
        <span>*Once per lifetime, Poland
        </span>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'></p>
          <p></p>
        </div>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__bottom'>
        <p>NB! For detailed information about your benefits see Policy terms
          and conditions</p>
      </div>
    </div>
  )
}

export default Commission