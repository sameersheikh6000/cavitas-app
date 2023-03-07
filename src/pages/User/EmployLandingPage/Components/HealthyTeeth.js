import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HealthyTeeth = () => {
  const navigate = useNavigate();
  return (
    <section className='landingPage__healthyTeeth'>
      <div className='landingPage__healthyTeeth__container'>
        <h1>Healthy Teeth-Healthy Employees</h1>
        <Button onClick={() => navigate('/employ-signin')} > Employ / HR manager login</Button>
      </div>
    </section >
  )
}

export default HealthyTeeth