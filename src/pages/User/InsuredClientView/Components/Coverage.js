import React from 'react'

const Coverage = ({user}) => {
  return (
    <div className='insuredClientGroup__container__cardsBox__card'>
      <div className='insuredClientGroup__container__cardsBox__card__top'>
        <p>Coverage</p>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Type of insurance:</p>
          <p>Cavitas dental insurance</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Insurance plan:</p>
          <p>BRONZE</p>
        </div>
        {user?.data?.role === "broker" ?
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
            <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Insurance coverage:</p>
            <p>Insured person + Spouse/Partner</p>
          </div>
          :
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
            <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Sum insured per insured person
              per policy year:</p>
            <p>4500/4500/25000 PLN</p>
          </div>
        }
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Insurer:</p>
          <p>Very good LTD.</p>
        </div>
      </div>
    </div>
  )
}

export default Coverage