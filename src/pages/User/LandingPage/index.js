import React from 'react'
// import { useNavigate } from 'react-router-dom';
import Page from '../../../components/Page/Page';
import AllCare from './Components/AllCare';
// import BecomeMember from './Components/BecomeMember';
// import CoverageQuestions from './Components/CoverageQuestions';
// import CoverWorks from './Components/CoverWorks';
import DentalInsurance from './Components/DentalInsurance';
import HowItWork from './Components/HowItWork';
import OurOffer from './Components/OurOffer';
import SmartInsurance from './Components/SmartInsurance';
import ValuableReadings from './Components/ValuableReadings';
import { USER_STORAGE_KEY } from '../../../config/helpers/variables';
const LandingPage = () => {
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  return (
    <Page>
      {!user &&
      <section className='landingPage'>
        <SmartInsurance />
        {/* <CoverWorks /> */}
        <OurOffer />
        <HowItWork />
        <AllCare />
        {/* <CoverageQuestions /> */}
        {/* <BecomeMember /> */}
        <ValuableReadings />
      </section>
    }
    </Page>
  )
}

export default LandingPage