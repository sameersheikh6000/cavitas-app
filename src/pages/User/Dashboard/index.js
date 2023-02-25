import React, { useState, useEffect } from 'react'
import Sidebar from '../../../components/Sidebar'
import SidebarDrawer from '../../../components/SidebarDrawer'
import CavitasDocs from './Components/CavitasDocuments'
import InsuredClient from './Components/InsuredClient'
import Support from './Components/Support'
import UserProfile from './Components/UserProfile'
import Welcome from './Components/Welcome'
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage'
import useTemplate from '../../../hooks/useTemplate'

const Dashboard = () => {
  const { getAllTemplate } = useTemplate();
  const [templatesList, setTemplatesList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)


  const getTemplates = async () => {
    debugger
    const response = await getAllTemplate();
    if (response.status < 300) {
      setTemplatesList(response.insured_clients);
    } else {
      setErrorMessage('Something went wrong!')
    }
  }
  useEffect(() => {
    getTemplates();
  }, []);


  return (
    <section className='dashboard'>
      <AlertMessage errorMessage={errorMessage} />
      <div className='dashboard__container'>
        <div className='dashboard__container__sidebar'>
          <div className='dashboard__container__sidebar__open'>
            <Sidebar />
          </div>
          <div className='dashboard__container__sidebar__drawer'>
            <SidebarDrawer />
          </div>
        </div>
        <div className='dashboard__container__content'>
          <Welcome />
          <UserProfile />
          <InsuredClient templatesList={templatesList} />
          <Support />
          <CavitasDocs />
        </div>
      </div>
    </section>
  )
}

export default Dashboard