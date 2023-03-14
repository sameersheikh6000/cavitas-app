import React from 'react'
import { Button } from '@mui/material'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const GroupPolicyInfo = ({ user }) => {
  const navigate = useNavigate();

  return (
    <section className='dashboard__container__content__groupPolicyInfo'>
      <header className='dashboard__container__content__groupPolicyInfo__header'>
        <div className='dashboard__container__content__groupPolicyInfo__header__iconBox'>
          < GppGoodOutlinedIcon lassName='dashboard__container__content__groupPolicyInfo__header__iconBox__icon' />
          <p>Group policy information</p>
        </div>
        <Button size='small' onClick={() => navigate("/insuredclient/group")}>View all</Button>
      </header>
      <div className='dashboard__container__content__groupPolicyInfo__details'>
        <table className='dashboard__container__content__groupPolicyInfo__details__table'>
          <thead>
            <tr>
              <th>Type of insurance</th>
              <th>Insurance plan</th>
              {user?.data?.role === "member" ?
                <th>Policy inception date:</th>
                :
                <>
                  <th>No of insured people</th>
                  <th>Risk renewal date</th>
                </>
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cavitas dental insurance</td>
              <td>YEAR 1</td>
              {user?.data?.role === "member" ?
                <td>01.04.2023</td>
                :
                <>
                  <td>7</td>
                  <td>01.04.2023</td>
                </>
              }
            </tr>
            <tr>
              <td>Cavitas dental insurance</td>
              <td>YEAR 1</td>
              {user?.data?.role === "member" ?
                <td>01.04.2023</td>
                :
                <>
                  <td>7</td>
                  <td>01.04.2023</td>
                </>
              }
            </tr>
            <tr>
              <td>Cavitas dental insurance</td>
              <td>YEAR 1</td>
              {user?.data?.role === "member" ?
                <td>01.04.2023</td>
                :
                <>
                  <td>7</td>
                  <td>01.04.2023</td>
                </>
              }
            </tr>
            <tr>
              <td>Cavitas dental insurance</td>
              <td>YEAR 1</td>
              {user?.data?.role === "member" ?
                <td>01.04.2023</td>
                :
                <>
                  <td>7</td>
                  <td>01.04.2023</td>
                </>
              }
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default GroupPolicyInfo