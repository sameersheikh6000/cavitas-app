import React, { useState, useEffect } from 'react'
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';
import { useNavigate } from 'react-router-dom';
import useClientInsurance from '../../../hooks/useClientInsurance';
import { Button } from '@mui/material'
import moment from 'moment';
import Page from "../../../components/Page/Page";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

const InsuredClientView = () => {
  const navigate = useNavigate();
  const { getAllClientInsurance } = useClientInsurance();
  const [insuranceList, setInsuranceList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)


  const getClientInsurance = async () => {

    const response = await getAllClientInsurance();
    if (response.status < 300) {
      setInsuranceList(response.insured_clients);
    } else {
      setErrorMessage('Something went wrong!')
    }
  }
  useEffect(() => {
    getClientInsurance();
  }, []);

  return (
    <Page>
      <AlertMessage errorMessage={errorMessage} />
      <section className='insuredClientView'>
        <header className='insuredClientView__header'>
          <div className='insuredClientView__header__left'>
            <BusinessCenterOutlinedIcon className='insuredClientView__header__left__icon' />
            <p>Insured Clients (10)</p>
          </div>
          <div className='insuredClientView__header__right'>
            <input type='text' placeholder='Search' />
            <SearchOutlinedIcon className='insuredClientView__header__right__icon' />
          </div>
        </header>
        <div className='insuredClientView__container'>
          <table >
            <thead>
              <tr>
                <th>Company name</th>
                <th>KRS number</th>
                <th>Risk renewal date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {insuranceList.map((insurance, index) => (
                <tr>
                  <td></td>
                  <td></td>
                  <td>{moment(insurance.created_at).format("MMM Do YY")}</td>
                  <td>
                    <Button size='small' onClick={() => navigate("/insuredclient/group")}>Open Group</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Page>
  )
}

export default InsuredClientView