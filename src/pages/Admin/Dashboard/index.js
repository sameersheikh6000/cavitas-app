import React, { useState, useEffect } from 'react'
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage'
import Page from '../../../components/Page/Page'
import useClientInsurance from '../../../hooks/useClientInsurance'
import AdminWelcome from './Components/AdminWelcome'
import AdminrProfile from './Components/AdminProfile'
import AdminInsuredClient from './Components/AdminInsuredClient'
import AdminCavitasDocs from './Components/AdminCavitasDocs'
import AdminFIleApproval from './Components/AdminFIleApproval'
import AdminPolicyInfor from './Components/AdminPolicyInfor'
import AdminCavitasDocuments from './Components/AdminCavitasDocuments'

const AdminDashboard = () => {
  const { getAllClientInsuranceAdmin } = useClientInsurance();
  const [insuranceList, setInsuranceList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)


  const getClientInsurance = async () => {
    const response = await getAllClientInsuranceAdmin();
    if (response.status < 300) {
      setInsuranceList(response.insured_clients);
    } else {
      setErrorMessage('Something went wrong!')
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
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
            <AdminWelcome />
            <AdminrProfile />
            <AdminInsuredClient insuranceList={insuranceList} />

            <AdminFIleApproval insuranceList={insuranceList} />
            {/* <AdminSupport /> */}
            <AdminPolicyInfor />
            <AdminCavitasDocs />
            <AdminCavitasDocuments />
            {/* <AdminSupport /> */}

          </div>
        </div>
      </section>
    </Page>
  )
}

export default AdminDashboard
