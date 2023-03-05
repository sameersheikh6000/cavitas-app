import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const InsuredPerson = () => {
  return (
    <section className='insuredClientGroup__container2__insuredPerson'>
      <header className='insuredClientGroup__container2__insuredPerson__header'>
        <p>Insured Person</p>
        <div>
          <input type="text" />
          <SearchOutlinedIcon className='insuredClientGroup__container2__insuredPerson__header__icon' />
        </div>
      </header>
      <div className='insuredClientGroup__container2__insuredPerson__tableBox'>
        <table>
          <thead>
            <tr>
              <th>Member title</th>
              <th>Member first name</th>
              <th>Member last name</th>
              <th>Member ID code</th>
              <th>Member DOB</th>
              <th>Member phone number</th>
              <th>Member E-mail</th>
              <th>Member address line 1</th>
              <th>Member address line 2</th>
              <th>Member post code</th>
              <th>Member country</th>
              <th>Policy schedule issued</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
            </tr>
            <tr>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
            </tr>
            <tr>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default InsuredPerson