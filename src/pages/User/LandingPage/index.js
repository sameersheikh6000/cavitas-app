import React, { useEffect } from 'react'
import Page from '../../../components/Page/Page';
import AllCare from './Components/AllCare';
import HowItWork from './Components/HowItWork';
import OurOffer from './Components/OurOffer';
import SmartInsurance from './Components/SmartInsurance';
import ValuableReadings from './Components/ValuableReadings';
import { USER_STORAGE_KEY } from '../../../config/helpers/variables';
const LandingPage = () => {
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  // window.location.reload();
  useEffect(() => {
    window.sessionStorage.clear();

    // Clear cookies
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  }, [1]);
  return (
    <Page>
      {!user &&
      <section className='landingPage'>
        <SmartInsurance />
        <OurOffer />
        <HowItWork />
        <AllCare />
        <ValuableReadings />
      </section>
    }
    </Page>
  )
}

export default LandingPage