import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Page from '../../../components/Page/Page';
import AlertMessage from "../../../components/SnackbarMessages/AlertMessage";
import useClientInsurance from '../../../hooks/useClientInsurance';


const UserInformation = () => {

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
          <h1>User Information</h1>
        </header>
        <div className='dashboard__container__content__cavitasDocs__details'>
        <table className='dashboard__container__content__cavitasDocs__details__table'>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Company Name</td>
              <td>User Email</td>
              <td>Password</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      </section>
    </Page>
  )
}

export default UserInformation