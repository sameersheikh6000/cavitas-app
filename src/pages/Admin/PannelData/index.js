import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Button } from '@mui/material'
import Page from '../../../components/Page/Page';
import AlertMessage from "../../../components/SnackbarMessages/AlertMessage";
import SuccessMessage from '../../../components/SnackbarMessages/SuccessMessage';
import useClientInsurance from '../../../hooks/useClientInsurance';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { API_KEY } from '../../../config/helpers/variables';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ExportCsv from './Components/ExportCsv';


const AdminFileApproval = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(null);
  const { getInsuredClientsByAdmin } = useClientInsurance();
  const [insuredClientsList, setInsuredClientsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)
  const [filter, setFilter] = useState();


  const getInsuredClientList = async () => {
    const response = await getInsuredClientsByAdmin();
    if (response.status < 300) {
      console.log(response)
      setInsuredClientsList(response?.insured_clients);
      setFilter(response?.insured_clients)
    } else {
      setErrorMessage('Something went wrong!')
    }
  }
  useEffect(() => {
    getInsuredClientList();
  }, []);

  const requestSearch = (searchedVal) => {
    debugger
    const filteredRows = insuredClientsList.filter((row) => {
      if(searchedVal !== null){
        return  (
          row?.member_first_name?.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
          row?.member_last_name?.toLowerCase().includes(searchedVal.toString().toLowerCase()) || 
          row?.member_email?.toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
          row?.company_name?.toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
          row?.company_krs_number?.toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
          row?.company_url_address?.toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
          row?.member_pesel?.toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
          row?.member_relation?.toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
          row?.member_phone_number?.toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
          row?.member_address?.toLowerCase().includes(searchedVal.toString().toLowerCase()) 
          )
        }
    });
    if (searchedVal.length < 1) {
        setFilter(insuredClientsList)
    }
    else {
        setFilter(filteredRows)
    }
  };
  return (
    <Page>
      <SuccessMessage successMessage={successMessage} />
      <AlertMessage errorMessage={errorMessage} />
      <section className='uploadClient'>
        <header className='insuredClientView__header'>
        <div className='insuredClientView__header__left'>
            <VerifiedUserIcon   className='insuredClientView__header__left__icon' />
            <p>Insured Persons</p>
          </div>
         
          <div className='insuredClientView__header__right' style={{display: "flex"}} >
            <input
              id='search-text'
              type='text'
              placeholder='Search'
              onChange={(e) => requestSearch(e.target.value)}
            />
            {/* <SearchOutlinedIcon className='insuredClientView__header__right__icon' /> */}
            <ExportCsv setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage}/>
            {/* <a href={`${API_KEY}/api/v1/insured_clients/export_csv`} style={{textDecoration: "none"}} target="_blank"><Button size='small' variant='outlined' style={{marginLeft: "7px"}} color='error' >Export CSV</Button></a> */}
            {/* <a href={`${API_KEY}/sample/sample_template.csv`} target='_blank'> download template</a> */}
          </div>
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
            {insuredClientsList.length > 0 ? filter?.map((row, index) => (
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