import React from 'react'

const PolicyInfo = ({ user }) => {
  return (
    <div className='insuredClientGroup__container__cardsBox__card'>
      <div className='insuredClientGroup__container__cardsBox__card__top'>
        {user?.data?.role === "broker" ?
          <p>Policy info</p>
          :
          <p>Group policy info</p>
        }
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Company Name:</p>
          <p>Rabbit LTD.</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Company KRS number:</p>
          <p>12345</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Company URL address:</p>
          <p>10 Rabbit Hole, Forest</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Risk inception date:</p>
          <p>02,01,2023</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Risk expiry date:</p>
          <p>02,01,2023</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Risk renewal date:</p>
          <p>02,01,2023</p>
        </div>
        {user?.data?.role === "member" ?
          <></>
          :
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
            <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>No of insured persons:</p>
            <p>220</p>
          </div>
        }
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Mandated broker:</p>
          <p>The best LTD.</p>
        </div>
      </div>
    </div>
  )
}

export default PolicyInfo