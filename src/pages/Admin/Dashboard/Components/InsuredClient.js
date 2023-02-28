import { Button } from '@mui/material'
import React from 'react'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import InsuredClientTable from './InsuredClientTable';
import { useNavigate } from 'react-router-dom';

const InsuredClient = ({ insuranceList }) => {
  const navigate = useNavigate();
  return (
    <section className='insuredClient'>
      <header className='insuredClient__header'>
        <div className='insuredClient__header__iconBox'>
          < BusinessCenterOutlinedIcon lassName='insuredClient__header__iconBox__icon' />
          <p>INSURED CLIENTS (10)</p>
        </div>
        <Button size='small' onClick={() => navigate("/admin/insuredclient/view")}>View all</Button>
      </header>
      <div className='insuredClient__details'>
        <InsuredClientTable insuranceList={insuranceList} />
      </div>
    </section>
  )
}

export default InsuredClient