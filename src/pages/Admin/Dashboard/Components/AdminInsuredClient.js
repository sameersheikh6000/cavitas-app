import React, { useState, useEffect } from 'react'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Button } from '@mui/material'
import useClientInsurance from '../../../../hooks/useClientInsurance';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import AlertMessage from '../../../../components/SnackbarMessages/AlertMessage';

const AdminInsuredClient = () => {


  const navigate = useNavigate();
  const { getInsuredClientsByAdmin } = useClientInsurance();
  const [insuredClientsList, setInsuredClientsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)


  const getInsuredClientList = async () => {

    const response = await getInsuredClientsByAdmin();
    if (response.status < 300) {
      console.log(response)
      setInsuredClientsList(response.insured_clients);
      console.log(insuredClientsList)
    } else {
      setErrorMessage('Something went wrong!')

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  }
  useEffect(() => {
    getInsuredClientList();
  }, []);
  return (
    <section className='dashboard__container__content__insuredClient'>
      <AlertMessage errorMessage={errorMessage} />
      <header className='dashboard__container__content__insuredClient__header'>
        <div className='dashboard__container__content__insuredClient__header__iconBox'>
          < VerifiedUserIcon lassName='dashboard__container__content__insuredClient__header__iconBox__icon' />
          <p>Insured Persons</p>
        </div>
        <Button size='small' onClick={() => navigate("/admin/PannelData")}>View all</Button>
      </header>
      {insuredClientsList.length > 0 ?
      <div className='dashboard__container__content__insuredClient__details'>
        <table className='dashboard__container__content__insuredClient__details__table'>
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
            { insuredClientsList.map((row, index) => (
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

                </tr>
              ))
                }
            </tbody>



          {/* <thead>
            <tr>
              <th>Company Name</th>
              <th>Reg. No</th>
              <th>Address</th>
              <th>Poliy Period</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {insuranceList.map((insurance, index) => (
              <tr>
                <td>{insurance.name}</td>
                <td>{insurance.email}</td>
                <td>{insurance.phone}</td>
                <td>{moment(insurance.created_at).format("MMM Do YY")}</td>
                <td>
                  <Button size='small' onClick={() => navigate("/admin/insuredclient/group")}>Open Group</Button>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
      :
      <div style={{textAlign: "center", marginTop: "10%"}}>
        <p style={{fontSize: "1.2rem", fontWeight: "bold"}}>No records.</p>
      </div>}
    </section>
  )
}

export default AdminInsuredClient
