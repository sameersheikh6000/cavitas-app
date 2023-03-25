import React, {useState, useEffect} from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import useClientInsurance from '../../../../hooks/useClientInsurance';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const InsuredPerson = () => {
  const navigate = useNavigate();
  const { getInsuredClients } = useClientInsurance();
  const [insuranceList, setInsuranceList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)


  const getClientInsurance = async () => {
    const response = await getInsuredClients();
    if (response?.status < 300) {
      setInsuranceList(response?.insured_clients);
    } else {
      setErrorMessage('Something went wrong!')
    }
  }
  useEffect(() => {
    getClientInsurance();
  }, []);

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
              <th>Type of Insurance</th>
              <th>Insurance Plan</th>
              <th>Sum Insured per insured person per policy year</th>
              <th>Risk inception date </th>
              <th>Risk expiry date</th>
              <th>Risk renewal date</th>
              <th>Policyholder/Company name</th>
              <th>Company KRS number</th>
              <th>Company URL address</th>
              <th>Member first name</th>
              <th>Member last name</th>
              <th>Member PESEL</th>
              <th>Member relation</th>
              <th>Member phone number</th>
              <th>Member e-mail</th>
              <th>Member address</th>
              <th>Payment Frequency</th>
              <th>Annual GWP </th>
              <th>Insurer </th>
              <th>Mandated broker</th>
              
            </tr>
          </thead>
          <tbody>
          {insuranceList.map((row, index) => (
                <tr key={index}>
                  
                  <td>{row?.type_of_insurance}</td>
                  <td>{row?.insurance_plan}</td>
                  <td>{row?.sum_insured_per_insured_person_per_policy_year}</td>
                  <td>{row?.risk_inception_date}</td>
                  <td>{row?.risk_expiry_date}</td>
                  <td>{row?.risk_renewal_date}</td>
                  <td>{row?.company_name}</td>
                  <td>{row?.company_krs_number}</td> 
                  <td>{row?.company_url_address}</td>
                  <td>{row?.member_first_name}</td>
                  <td>{row?.member_last_name}</td>
                  <td>{row?.member_pesel}</td>
                  <td>{row?.member_relation}</td>
                  <td>{row?.member_phone_number}</td>
                  <td>{row?.member_email}</td>
                  <td>{row?.member_address}</td>
                  <td>{row?.payment_frequency}</td>
                  <td>{row?.annual_gwp}</td>
                  <td>{row?.insurer}</td>
                  <td>{row?.mandated_broker}</td>
                </tr>
            ))}
           
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default InsuredPerson