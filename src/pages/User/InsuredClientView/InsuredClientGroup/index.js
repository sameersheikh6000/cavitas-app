import React from 'react'
import { useNavigate } from 'react-router-dom';
import Page from '../../../../components/Page/Page';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

const InsuredClientGroup = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <section className='insuredClientGroup'>
        <div onClick={() => navigate(-1)} className='insuredClientGroup__back'>
          <ArrowBackIosNewOutlinedIcon className='insuredClientGroup__back__icon' />
          Back
        </div>
        <header className='insuredClientGroup__header'>
          <BusinessCenterOutlinedIcon className='insuredClientGroup__header__icon' />
          <p>Insured Clients - Group - Rabbit Ltd.</p>
        </header>
        <div className='insuredClientGroup__container'>
          <div className='insuredClientGroup__container__cardsBox'>
            <div className='insuredClientGroup__container__cardsBox__card'>
              <div className='insuredClientGroup__container__cardsBox__card__top'>
                Policy info
              </div>
              <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
                <div className='insuredClientGroup__container__cardsBox__card__detailsBox__left'>
                  <p>Name</p>
                  <p>Name</p>
                  <p>Name</p>
                  <p>Name</p>
                  <p>Name</p>
                  <p>Name</p>
                  <p>Name</p>
                  <p>Name</p>
                  <p>Name</p>
                  <p>Name</p>
                  <p>Name</p>
                </div>
                <div className='insuredClientGroup__container__cardsBox__card__detailsBox__right'>
                  <p>Interloop</p>
                  <p>Interloop</p>
                  <p>Interloop</p>
                  <p>Interloop</p>
                  <p>Interloop</p>
                  <p>Interloop</p>
                  <p>Interloop</p>
                  <p>Interloop</p>
                  <p>Interloop</p>
                  <p>Interloop</p>
                  <p>Interloop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default InsuredClientGroup