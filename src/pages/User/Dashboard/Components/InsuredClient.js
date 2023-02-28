import { Button } from '@mui/material'
import React from 'react'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import InsuredClientTable from './InsuredClientTable';
import { useNavigate } from 'react-router-dom';

const InsuredClient = ({ insuranceList }) => {
  const navigate = useNavigate();
  return (
    <section className='dashboard__container__content__insuredClient'>
      <header className='dashboard__container__content__insuredClient__header'>
        <div className='dashboard__container__content__insuredClient__header__iconBox'>
          < BusinessCenterOutlinedIcon lassName='dashboard__container__content__insuredClient__header__iconBox__icon' />
          <p>INSURED CLIENTS (10)</p>
        </div>
        <Button size='small' onClick={() => navigate("/insuredclient/view")}>View all</Button>
      </header>
      <div className='dashboard__container__content__insuredClient__details'>
        <InsuredClientTable insuranceList={insuranceList} />
      </div>
    </section>
  )
}

export default InsuredClient