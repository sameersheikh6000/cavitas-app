import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ContactCavitas from './EmployerFormComponent/ContactCavitas';

const Conversation = () => {
  const navigate = useNavigate();

  return (
    <section className='landingPage__conversation'>
    <div className='landingPage__conversation__container'>
    <div className='landingPage__clientDeserve__container'>
    <h1>Let's cover your employees
      
    </h1>
      {/* <Button onClick={() => navigate('/')} > Contact US</Button> */}
      <ContactCavitas />
    </div>
       </div>
  </section>
  )
}

export default Conversation