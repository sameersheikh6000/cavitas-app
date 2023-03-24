import { Button } from '@mui/material'
import React from 'react'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const AdminInsuredClient = ({ insuranceList }) => {
  const navigate = useNavigate();
  return (
    <section className='dashboard__container__content__insuredClient'>
      <header className='dashboard__container__content__insuredClient__header'>
        <div className='dashboard__container__content__insuredClient__header__iconBox'>
          < BusinessCenterOutlinedIcon lassName='dashboard__container__content__insuredClient__header__iconBox__icon' />
          <p>INSURED CLIENTS (10)</p>
        </div>
        <Button size='small' onClick={() => navigate("/admin/PolicyInformation")}>View all</Button>
      </header>
      <div className='dashboard__container__content__insuredClient__details'>
        <table className='dashboard__container__content__insuredClient__details__table'>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Reg. No</th>
              <th>Address</th>
              <th>Poliy Period</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* {insuranceList.map((insurance, index) => (
              <tr>
                <td>{insurance.name}</td>
                <td>{insurance.email}</td>
                <td>{insurance.phone}</td>
                <td>{moment(insurance.created_at).format("MMM Do YY")}</td>
                <td>
                  <Button size='small' onClick={() => navigate("/admin/insuredclient/group")}>Open Group</Button>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AdminInsuredClient