import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Page from '../../../components/Page/Page';
import AlertMessage from "../../../components/SnackbarMessages/AlertMessage";
import useClientInsurance from '../../../hooks/useClientInsurance';


const AdminPolicyInformation = () => {

  const navigate = useNavigate();
  const { createClientInsuranceAdmin } = useClientInsurance();
  const [errorMessage, setErrorMessage] = useState(null);
  const [insurance, setInsurance] = useState({
    subject: "",
    description: "",
    file: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInsurance({
      ...insurance, [name]: name !== "file" ? value : e.target.files[0]
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let data = {
      ...insurance,
    };
    const response = await createClientInsuranceAdmin(data);
    if (response.status < 300) {
      navigate("admin/dashboard");
    } else if (response.status > 300) {
      setErrorMessage(response.message);
    }
  }


  return (
    <Page>
      <AlertMessage errorMessage={errorMessage} />
      <section className='uploadClient'>
        <header>
          <h1>Upload Policy Information</h1>
        </header>
   {/* add */}
      </section>
    </Page>
  )
}

export default AdminPolicyInformation