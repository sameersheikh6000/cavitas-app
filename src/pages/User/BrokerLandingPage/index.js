import React from 'react'
import Page from '../../../components/Page/Page';
import AllCare from './Components/AllCare';
import BenefitPlan from './Components/BenefitPlan';
import ClientDeserve from './Components/ClientDeserve';
import Conversation from './Components/Conversation';
import CoverWorks from './Components/CoverWorks';
const BrokerLandingPage = () => {
  return (
    <Page>
      <section className='landingPage'>
        {/* <SmartInsurance /> */}
        <ClientDeserve />
        <BenefitPlan />
        <CoverWorks />
        {/* <OurOffer /> */}
        {/* <HowItWork /> */}
        <AllCare />
        {/* <ValuableReadings /> */}
        <Conversation />
      </section>
    </Page>
  )
}

export default BrokerLandingPage