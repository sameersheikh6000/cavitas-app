import React from 'react'
// import { useNavigate } from 'react-router-dom';
import Page from '../../../components/Page/Page';
import AllCare from './Components/AllCare';
import BecomeMember from './Components/BecomeMember';
// import CoverageQuestions from './Components/CoverageQuestions';
import CoverWorks from './Components/CoverWorks';
import DentalInsurance from './Components/DentalInsurance';
// import HowItWork from './Components/HowItWork';
import Conversation from './Components/Conversation';
// import OurOffer from './Components/OurOffer';
// import SmartInsurance from './Components/SmartInsurance';
import ValuableReadings from './Components/ValuableReadings';
const MemberLandingPage = () => {
  return (
    <Page>
      <section className='landingPage'>
        <DentalInsurance />
        <CoverWorks />
        {/* <OurOffer /> */}
        {/* <HowItWork /> */}
        <AllCare />
        {/* <CoverageQuestions /> */}
        <Conversation />
        <BecomeMember />
        <ValuableReadings />
      </section>
    </Page>
  )
}

export default MemberLandingPage