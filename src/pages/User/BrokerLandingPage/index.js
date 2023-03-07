import React from 'react'
import Page from '../../../components/Page/Page';
import AllCare from './Components/AllCare';
import BenefitPlan from './Components/BenefitPlan';
import ClientDeserve from './Components/ClientDeserve';
import Conversation from './Components/Conversation';
import HowItWork from './Components/HowItWork';
import OurOffer from './Components/OurOffer';
// import SmartInsurance from './Components/SmartInsurance';
import ValuableReadings from './Components/ValuableReadings';
const BrokerLandingPage = () => {
  return (
    <Page>
      <section className='landingPage'>
        {/* <SmartInsurance /> */}
        <ClientDeserve />
        <BenefitPlan />
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