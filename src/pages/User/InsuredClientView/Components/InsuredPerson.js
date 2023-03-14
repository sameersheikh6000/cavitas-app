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
              <th>Insured person first name</th>
              <th>Insured person last name</th>
              <th>Insured person PESEL (ID)</th>
              <th>Relationship</th>
              <th>Insured person phone number</th>
              <th>Insured person E-mail address</th>
              <th>Insured person address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pawel</td>
              <td>Nowak</td>
              <td>45678987654</td>
              <td>P-34567654</td>
              <td>888 999 000</td>
              <td>pawel@</td>
              <td>Warsaw</td>
            </tr>
            <tr>
              <td>Pawel</td>
              <td>Nowak</td>
              <td>45678987654</td>
              <td>P-34567654</td>
              <td>888 999 000</td>
              <td>pawel@</td>
              <td>Warsaw</td>
            </tr>
            <tr>
              <td>Pawel</td>
              <td>Nowak</td>
              <td>45678987654</td>
              <td>P-34567654</td>
              <td>888 999 000</td>
              <td>pawel@</td>
              <td>Warsaw</td>
            </tr>
            <tr>
              <td>Pawel</td>
              <td>Nowak</td>
              <td>45678987654</td>
              <td>P-34567654</td>
              <td>888 999 000</td>
              <td>pawel@</td>
              <td>Warsaw</td>
            </tr>
            <tr>
              <td>Pawel</td>
              <td>Nowak</td>
              <td>45678987654</td>
              <td>P-34567654</td>
              <td>888 999 000</td>
              <td>pawel@</td>
              <td>Warsaw</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default InsuredPerson