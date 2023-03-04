import React from 'react'
import { USER_STORAGE_KEY } from '../../config/helpers/variables';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Page = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  return (
    <section className='page'>
      <Navbar />
      {children}
      {user?.data?.role !== "broker" &&
        <Footer />
      }
    </section >
  )
}

export default Page