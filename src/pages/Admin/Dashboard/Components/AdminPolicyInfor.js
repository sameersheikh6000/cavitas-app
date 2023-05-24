import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useNavigate } from 'react-router-dom';
import AlertMessage from '../../../../components/SnackbarMessages/AlertMessage';
import usePolicyInformation from '../../../../hooks/usePolicyInoformation';
import PolicyInoformationCreate from '../../PolicyInformation/Components/PolicyInformationCreate';
import SuccessMessage from '../../../../components/SnackbarMessages/SuccessMessage';
import PolicyInoformationUpdate from '../../PolicyInformation/Components/PolicyInoformationUpdate';
import PolicyInoformationDestroy from '../../PolicyInformation/Components/PolicyInformationDestroy';
import PolicyIcon from '@mui/icons-material/Policy';

const AdminPolicyInfor = () => {
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


    <>
    <section className='dashboard__container__content__support'>
       <header className='dashboard__container__content__support__header'>
         <div className='dashboard__container__content__support__header__iconBox'>
           < PolicyIcon from  className='dashboard__container__content__support__header__iconBox__icon' />
           <p>Policy Information</p>
         </div>
       <Button size='small' onClick={() => navigate("/admin/PolicyInformation")}>View all</Button>
      </header>
      <div className='dashboard__container__content__insuredClient__details'>
        <table className='dashboard__container__content__insuredClient__details__table'>
          <thead>
            <tr>
        
              <th>Company Name</th>
              <th>No of insured persons</th>
              <th>Risk inception date</th>
              <th>Risk expiry date</th>
              <th>Risk renewal date</th>
              
    
              <th></th>
            </tr>
          </thead>
          <tbody>
          <tr>
                  
                  <td>{policyInformation?.company_name}</td>
                  <td>{policyInformation?.no_of_insured_persons}</td>
                  <td>{policyInformation?.risk_inseption_date}</td>
                  <td>{policyInformation?.risk_expiry_date}</td>
                  <td>{policyInformation?.risk_renewal_date}</td>
                
              </tr>
          </tbody>
        </table>
      
      
      </div>
    </section>
    </>
  )
}

export default AdminPolicyInfor







