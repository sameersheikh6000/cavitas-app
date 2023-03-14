import React from 'react'
import { useNavigate } from 'react-router-dom';
import Page from '../../../../components/Page/Page';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PolicyInfo from '../Components/PolicyInfo';
import Coverage from '../Components/Coverage';
import Payment from '../Components/Payment';
import Commission from '../Components/Commission';
import PolicyDocuments from '../Components/PolicyDocuments';
import InsuredPerson from '../Components/InsuredPerson';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import { USER_STORAGE_KEY } from '../../../../config/helpers/variables';

const InsuredClientGroup = () => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  return (
    <Page>
      <section className='insuredClientGroup'>
        {user?.data?.role === "broker" ? <>
          {/* <div onClick={() => navigate(-1)} className='insuredClientGroup__back'>
            <ArrowBackIosNewOutlinedIcon className='insuredClientGroup__back__icon' />
            Back
          </div> */}
          <header className='insuredClientGroup__header'>
            <BusinessCenterOutlinedIcon className='insuredClientGroup__header__icon' />
            <p>Insured Clients - Group - Rabbit Ltd.</p>
          </header>
        </>
          :
          <>
            <header className='insuredClientGroup__header'>
              <GppGoodOutlinedIcon className='insuredClientGroup__header__icon' />
              <p>POLICY INFORMATION</p>
            </header>
          </>
        }
        <div className='insuredClientGroup__container'>
          <div className='insuredClientGroup__container__cardsBox'>
            <div className='insuredClientGroup__container__cardsBox__left'>
              <PolicyInfo user={user} />
              <PolicyDocuments user={user} />
            </div>
            <div className='insuredClientGroup__container__cardsBox__right'>
              <Coverage user={user} />
              <Payment />
              <Commission user={user} />
            </div>
          </div>
          <div className='insuredClientGroup__container2'>
            <InsuredPerson />
          </div>
        </div>
      </section>
    </Page>
  )
}

export default InsuredClientGroup