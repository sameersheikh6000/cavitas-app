import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ClientDeserve = () => {
  const navigate = useNavigate();
  return (
    <section className='landingPage__clientDeserve'>
      <div className='landingPage__clientDeserve__container'>
        <p>Your clients deserve</p>
        <h1>Good dental coverage</h1>
        <Button onClick={() => navigate('/signin')} > Broker / Agent login</Button>
      </div>
    </section >
  )
}

export default ClientDeserve