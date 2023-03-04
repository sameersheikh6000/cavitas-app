import React from 'react'
import Page from '../../../components/Page/Page';
import AllCare from './Components/AllCare';
import HowItWork from './Components/HowItWork';
import OurOffer from './Components/OurOffer';
import SmartInsurance from './Components/SmartInsurance';
import ValuableReadings from './Components/ValuableReadings';
const EmployLandingPage = () => {
  return (
    <Page>
      <section className='landingPage'>
        <SmartInsurance />
        <OurOffer />
        <HowItWork />
        <AllCare />
        <ValuableReadings />
      </section>
    </Page>
  )
}

export default EmployLandingPage