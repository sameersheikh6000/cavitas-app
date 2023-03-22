import { Button } from '@mui/material'
import React from 'react'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const InsuredClient = () => {
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
        <table className='dashboard__container__content__insuredClient__details__table'>
          <thead>
            <tr>
              <th>Company name</th>
              <th>KRS number</th>
              <th>Risk renewal date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>{moment().format("MMM Do YY")}</td>
              <td>
                <Button size='small' onClick={() => navigate("/insuredclient/group")}>Open Group</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default InsuredClient