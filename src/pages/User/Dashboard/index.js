import React, { useState, useEffect } from 'react'
import CavitasDocs from './Components/CavitasDocs'
import InsuredClient from './Components/InsuredClient'
import Support from './Components/Support';
import Welcome from './Components/Welcome'
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage'
import Page from '../../../components/Page/Page';
import useClientInsurance from '../../../hooks/useClientInsurance'
import UserProfile from './Components/UserProfile';
import { USER_STORAGE_KEY } from '../../../config/helpers/variables';
import GroupPolicyInfo from './Components/GroupPolicyInfo';
const Dashboard = () => {
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY))
  const { getAllClientInsurance } = useClientInsurance();
  const [insuranceList, setInsuranceList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)


  const getClientInsurance = async () => {

    const response = await getAllClientInsurance();
    if (response.status < 300) {
      setInsuranceList(response.insured_clients);
    } else {
      setErrorMessage('Something went wrong!')
    }
  }
  useEffect(() => {
    getClientInsurance();
  }, []);

  return (
    <Page>
      <AlertMessage errorMessage={errorMessage} />
      <section className='dashboard'>
        <div className='dashboard__container'>
          <div className='dashboard__container__content'>
            <Welcome />
            <UserProfile />
            {user?.data?.role === "broker" &&
                       
              <InsuredClient insuranceList={insuranceList} />
            }
 {user?.data?.role === "broker" ?
             <></>
              :
              <GroupPolicyInfo user={user} />
            }
            <Support />
            {user?.data?.role === "broker" &&
                          <CavitasDocs />
            }
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Dashboard