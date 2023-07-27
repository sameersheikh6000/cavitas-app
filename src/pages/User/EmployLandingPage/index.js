import React from 'react'
import Page from '../../../components/Page/Page';
import AllCare from './Components/AllCare';
import BenefitPlan from './Components/BenefitPlan';
import Conversation from './Components/Conversation';
import HealthyTeeth from './Components/HealthyTeeth';
import EmployerCoverWorks from './Components/CoverWork';
const EmployLandingPage = () => {
  return (
    <Page>
      <section className='landingPage'>
        {/* <SmartInsurance /> */}
        <HealthyTeeth />
        <BenefitPlan />
        <EmployerCoverWorks />
        {/* <OurOffer /> */}
        {/* <HowItWork /> */}
        <AllCare />
        {/* <ValuableReadings /> */}
        <Conversation />
      </section>
    </Page>
  )
}

export default EmployLandingPage