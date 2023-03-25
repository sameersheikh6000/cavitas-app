import React from 'react'
import { ADMIN_STORAGE_KEY } from '../../../../config/helpers/variables';

const AdminWelcome = () => {

  const user = JSON.parse(sessionStorage.getItem(ADMIN_STORAGE_KEY));
  if (user?.data?.first_name && user?.data?.last_name) {
    var name = `${user?.data?.first_name}` + ' ' + `${user?.data?.last_name}`
  }
  else {
    var name = ""
  }

  return (
    <section className='dashboard__container__content__welcomePage'>
      <h1 className='dashboard__container__content__welcomePage__heading'>Welcome back, {name}!</h1>
      <p className='dashboard__container__content__welcomePage__description'>Cavitas broker dashboard is for ...</p>
      <p className='dashboard__container__content__welcomePage__support'>Need some help? Let's Chat.</p>
      <p className='dashboard__container__content__welcomePage__contact'>XXXXXXX &nbsp; | &nbsp;  support@cavitas.eu</p>
    </section>
  )
}

export default AdminWelcome