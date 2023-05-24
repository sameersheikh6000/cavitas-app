import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Page from '../../../components/Page/Page';
import AlertMessage from "../../../components/SnackbarMessages/AlertMessage";
import usePolicyInformation from '../../../hooks/usePolicyInoformation';
import PolicyInoformationUpdate from './Components/PolicyInoformationUpdate';
import PolicyInoformationCreate from './Components/PolicyInformationCreate';
import SuccessMessage from "../../../components/SnackbarMessages/SuccessMessage";
import PolicyInoformationDestroy from './Components/PolicyInformationDestroy';
import PolicyIcon from '@mui/icons-material/Policy';


const AdminPolicyInformation = () => {

  const navigate = useNavigate();
  const { getPolicyInformationByAdmin } = usePolicyInformation();
  const [errorMessage, setErrorMessage] = useState(null);
  const [policyInformation, setPolicyInformation] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const getPolicyInfo = async () => {
    
    const response = await getPolicyInformationByAdmin();
    if (response?.status < 300) {
      setPolicyInformation(response?.policy_information)
    } else if (response.status > 300) {
      setErrorMessage(response.message);
    }
  }

  useEffect(() => {
    getPolicyInfo();
  }, [])


  return (
    <Page>
      <SuccessMessage successMessage={successMessage}/>
      <AlertMessage errorMessage={errorMessage} />
      <section className='uploadClient'>
        <header style={{display: "flex", justifyContent: "space-between"}}>
        <div className='insuredClientView__header__left'>
            <  PolicyIcon  className='insuredClientView__header__left__icon' />
            &nbsp;&nbsp; <h1>Policy Information</h1>   
                   </div>
          {policyInformation ? "" : 
          <PolicyInoformationCreate setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage} getPolicyInfo={getPolicyInfo}/>
          }
        </header>
        <div className='insuredClientView__container'>
        {policyInformation ?
          <table >
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Company KRS number</th>
                <th>Company URL address</th>
                <th>Risk inception date</th>
                <th>Risk expiry date</th>
                <th>Risk renewal date</th>
                <th>No of insured persons</th>
                <th>Mandated broker</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
             
                <tr>
                  
                  <td>{policyInformation?.company_name}</td>
                  <td>{policyInformation?.company_krs_number}</td>
                  <td>{policyInformation?.company_url_address}</td>
                  <td>{policyInformation?.risk_inseption_date}</td>
                  <td>{policyInformation?.risk_expiry_date}</td>
                  <td>{policyInformation?.risk_renewal_date}</td>
                  <td>{policyInformation?.no_of_insured_persons}</td>
                  <td>{policyInformation?.mandated_broker}</td>
                  <td style={{display: "flex"}}>
                    <PolicyInoformationUpdate policyInformation={policyInformation} setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage} getPolicyInfo={getPolicyInfo}/>
                    <PolicyInoformationDestroy policyInformation_id={policyInformation?.id} setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage} getPolicyInfo={getPolicyInfo}/>
                  </td>
                {/* <td style={{ display: "flex", alignItems: 'center', justifyContent: 'space-around' }}>
                  <Button color='success' variant='contained' size='small' style={{ color: "white" }} onClick={() => navigate("/admin/dashboard")}>Accept</Button>
                  <InsuredClientRejectModal />
                </td> */}
              </tr>
            </tbody>
          </table>
          :
          <div style={{textAlign: "center"}}>
            <p>No records.</p>
          </div>
        }
        </div>
      </section>
    </Page>
  )
}

export default AdminPolicyInformation