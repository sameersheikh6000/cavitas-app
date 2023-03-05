import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AlertMessage from '../../../../components/SnackbarMessages/AlertMessage';
import useClientInsurance from '../../../../hooks/useClientInsurance';


const AdminFileApproval = () => {
  const navigate = useNavigate();
  const { getAllClientInsurance } = useClientInsurance();
  const [insuranceList, setInsuranceList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)


  const getClientInsurance = async () => {
    debugger
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
    <>
      <AlertMessage errorMessage={errorMessage} />
      <section className='dashboard__container__content__insuredClient'>
        <header className='dashboard__container__content__insuredClient__header'>
          <div className='dashboard__container__content__insuredClient__header__iconBox'>
            < TextSnippetIcon lassName='dashboard__container__content__insuredClient__header__iconBox__icon' />
            <p>File approval</p>
          </div>
          <Button size='small' onClick={() => navigate("/admin/insuredclient/view")}>View all</Button>
        </header>
        <div className='dashboard__container__content__insuredClient__details'>
          <table className='dashboard__container__content__insuredClient__details__table'>
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
                <td>
                  <Button size='small' onClick={() => navigate("/admin/insuredclient/group")}>Open Group</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default AdminFileApproval