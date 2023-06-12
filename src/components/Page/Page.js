import React from 'react'
import { ADMIN_STORAGE_KEY, USER_STORAGE_KEY } from '../../config/helpers/variables';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Page = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  const admin = JSON.parse(sessionStorage.getItem(ADMIN_STORAGE_KEY));
  return (
    <section className='page'>
      <Navbar />
      {children}
      {/* {(user?.data?.role || admin?.data?.role) ?
        <></>
        : */}
        {!(user?.data?.role || admin?.data?.role) && 
          <Footer />
        }
      {/* } */}
    </section >
  )
}

export default Page