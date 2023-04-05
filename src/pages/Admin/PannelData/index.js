import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Button } from '@mui/material'
import Page from '../../../components/Page/Page';
import AlertMessage from "../../../components/SnackbarMessages/AlertMessage";
import useClientInsurance from '../../../hooks/useClientInsurance';


const AdminFileApproval = () => {
  const navigate = useNavigate();
  const { getInsuredClientsByAdmin } = useClientInsurance();
  const [insuredClientsList, setInsuredClientsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)

  const getInsuredClientList = async () => {
    debugger
    const response = await getInsuredClientsByAdmin();
    if (response.status < 300) {
      console.log(response)
      setInsuredClientsList(response.insured_clients);
      console.log(insuredClientsList)
    } else {
      setErrorMessage('Something went wrong!')
    }
  }
  useEffect(() => {
    getInsuredClientList();
  }, []);
  return (
    <Page>
      <AlertMessage errorMessage={errorMessage} />
      <section className='uploadClient'>
        <header>
          <h1>Approved Tickets</h1>
        </header>
        <br />
        <div className='dashboard__container__content__insuredClient__details'>
          <table className='dashboard__container__content__insuredClient__details__table__page__view'>
            <thead>
            <tr>
                <th>Risk country</th>   
                <th>Type of insurance</th>    
                <th>Insurance plan</th>   
                <th>Sum Insured per insured person per policy year</th>   
                <th>Policy number</th>   
                <th>Risk inception date</th>  
                <th>Risk expiry date</th>  
                <th>Risk renewal date</th>  
                <th>Policyholder/Company name</th>  
                <th>Company KRS number</th>  
                <th>Company URL address</th>  
                <th>Member gender</th>  
                <th>Member first name</th>  
                <th>Member last name</th>  
                <th>Member PESEL</th>  
                <th>Member DOB</th>  
                <th>Member age</th>  
                <th>Member relation</th>  
                <th>Member phone number</th>  
                <th>Member e-mail</th>  
                <th>Member address</th>  

                <th></th>
                <th>Group Type</th>  
                <th>PARTICIPATION</th>  
                <th>Currency</th>  
                <th>Payment Frequency</th>  
                <th>Annual GWP</th>  
                <th>Annual BC</th>  
                <th>Annual NP</th>  
                <th>Monthly NP</th>  
                <th>Monthly BC</th>  
                <th>Insurer</th>  
                <th>Mandated broker</th> 
                
                {/* <th>File</th>  
                <th>Status</th>   */}
              </tr>
            </thead>
            <tbody>
            {insuredClientsList.length > 0 ? insuredClientsList.map((row, index) => (
                <tr key={index}>
                  <td>{row?.risk_country}</td>
                  <td>{row?.type_of_insurance}</td>
                  <td>{row?.insurance_plan}</td>
                  <td>{row?.sum_insured_per_insured_person_per_policy_year}</td>
                  <td>{row?.policy_number}</td>
                  <td>{row?.risk_inception_date}</td>
                  <td>{row?.risk_expiry_date}</td>
                  <td>{row?.risk_renewal_date}</td>
                  <td>{row?.company_name}</td>
                  <td>{row?.company_krs_number}</td>
                  <td>{row?.company_url_address}</td>
                  <td>{row?.member_gender}</td>
                  <td>{row?.member_first_name}</td>
                  <td>{row?.member_last_name}</td>
                  <td>{row?.member_pesel}</td>
                  <td>{row?.member_dob}</td>
                  <td>{row?.member_age}</td>
                  <td>{row?.member_relation}</td>
                  <td>{row?.member_phone_number}</td>
                  <td>{row?.member_email}</td>
                  <td>{row?.member_address}</td>
                  <td>{row?.family_scope}</td>
                  <td>{row?.group_type}</td>
                  <td>{row?.participation}</td>
                  <td>{row?.currency}</td>
                  <td>{row?.payment_frequency}</td>
                  <td>{row?.annual_gwp}</td>
                  <td>{row?.annual_bc}</td>
                  <td>{row?.annual_np}</td>
                  <td>{row?.monthly_np}</td>
                  <td>{row?.monthly_bc}</td>
                  <td>{row?.insurer}</td>
                  <td>{row?.mandated_broker}</td>
                  {/* <td>
                    <Button size='small' onClick={() => navigate("/admin/insuredclient/group")}>Open Group</Button>
                  </td> */}
                </tr>
              ))
                :
                <div>
                  <p>No records.</p>
                </div>}
            </tbody>
          </table>
        </div>

      </section>
    </Page>
  )
}

export default AdminFileApproval