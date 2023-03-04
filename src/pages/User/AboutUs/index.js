import React from 'react'
import Page from '../../../components/Page/Page'
import CavitasMeaning from './Components/CavitasMeaning'
import OurStory from './Components/OurStory'
import PrivacyPolicy from './Components/PrivacyPolicy'
import SmarterDentalInsurance from './Components/SmarterDentalInsurance'

const AboutUs = () => {
  return (
    <Page>
      <section className='aboutUs'>
        <CavitasMeaning />
        <OurStory />
        <SmarterDentalInsurance />
        <PrivacyPolicy />
      </section>
    </Page>
  )
}

export default AboutUs