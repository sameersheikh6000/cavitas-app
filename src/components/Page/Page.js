import React from 'react'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Page = ({ children }) => {
  return (
    <section className='page'>
      <Navbar />

      {children}
    </section >
  )
}

export default Page