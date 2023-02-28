import React from 'react'
import { Button } from '@mui/material'
import moment from 'moment';

const InsuredClientTable = ({ insuranceList }) => {
  return (
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
        {insuranceList.map((template, index) => (
          <tr>
            <td>{template.name}</td>
            <td>{template.email}</td>
            <td>{template.phone}</td>
            <td>{moment(template.created_at).format("MMM Do YY")}</td>
            <td>
              <Button size='small'>Open Group</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default InsuredClientTable