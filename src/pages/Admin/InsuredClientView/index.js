import React, { useState, useEffect } from 'react'
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';
import { useNavigate } from 'react-router-dom';
import useClientInsurance from '../../../hooks/useClientInsurance';
import { Button } from '@mui/material'
import moment from 'moment';
import Page from "../../../components/Page/Page";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import InsuredClientRejectModal from './Components/InsuredClientReajectModal';

const AdminInsuredClientView = () => {
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
                <th>Company Name</th>
                <th>Reg. No</th>
                <th>Address</th>
                <th>Poliy Period</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Interloop</td>
                <td>12345</td>
                <td>923456789</td>
                <td>Jan, 2022 - Jan, 2023</td>
                <td style={{ display: "flex", alignItems: 'center', justifyContent: 'space-around' }}>
                  <Button color='success' variant='contained' size='small' style={{ color: "white" }} onClick={() => navigate("/admin/dashboard")}>Accept</Button>
                  <InsuredClientRejectModal />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Page>
  )
}

export default AdminInsuredClientView