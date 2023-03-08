import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const CoverageQuestions = () => {
  const navigate = useNavigate();

  return (
    <section className='landingPage__coverageQuestions'>
      <div className='landingPage__coverageQuestions__container'>
        <h1>Your coverage questions answered</h1>
        <Button onClick={() => navigate("/faq")}>Frequently asked questions</Button>
      </div>
    </section >
  )
}

export default CoverageQuestions