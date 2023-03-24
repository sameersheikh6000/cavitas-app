
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
  const { getAllClientInsuranceAdmin } = useClientInsurance();
  const [clientInfoList, setClientInfoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)
  const getClientInsurance = async () => {
    debugger
    const response = await getAllClientInsuranceAdmin();
    if (response.status < 300) {
      console.log(response)
      setClientInfoList(response.client_infos);
      console.log(clientInfoList)
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
      <section className='uploadClient'>
        <header>
          <h1>Pannel Data</h1>
        </header>
        <br />
        <div className='dashboard__container__content__insuredClient__details'>
          <table className='dashboard__container__content__insuredClient__details__table'>
            <thead>
            <tr>
                <th>Ticket#</th>  &nbsp; &nbsp;  &nbsp; &nbsp; 
                <th>Name</th>  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; 
                <th>Description</th>  &nbsp; &nbsp;  &nbsp; &nbsp; 
                <th>Total Employees in Company</th>  &nbsp; &nbsp;  &nbsp; &nbsp; 
                <th>Participation</th>  &nbsp; &nbsp;  &nbsp; &nbsp; 
                <th>Mandatory Employees</th> &nbsp; &nbsp;  &nbsp; &nbsp; 
                <th>Voluntary Employees</th> &nbsp; &nbsp;  &nbsp; &nbsp; 
                <th>Employee Family Info</th> &nbsp; &nbsp;  &nbsp; &nbsp; 
                <th>Payment Type</th> &nbsp; &nbsp;  &nbsp; &nbsp; 
                <th>Broker Reference</th> &nbsp; &nbsp;  &nbsp; &nbsp; 
                <th>Broker Name</th> &nbsp; &nbsp;  &nbsp; &nbsp; 
                <th>File</th> &nbsp; &nbsp;  &nbsp; &nbsp; 
                <th>Status</th> &nbsp; &nbsp;  &nbsp; &nbsp; 
              </tr>
            </thead>
            <tbody>

            {clientInfoList.length > 0 ? clientInfoList.map((row, index) => (
                <tr>
                  <td>{row?.id}</td>
                  <td>{row?.corporate_client_name}</td>
                  <td>{row?.details}</td>
                  <td>{row?.number_of_employees_in_company}</td>
                  <td>{row?.participation_mode}</td>
                  <td>{row?.mandatory_number_of_employees}</td>
                  <td>{row?.voluntary_number_of_employees}</td>
                  <td>{row?.employees_family_info}</td>
                  <td>{row?.insurance_payment_type}</td>
                  <td>{row?.broker_reference}</td>
                  <td>{row?.referenced_broker_name}</td>
                  <td>{row?.file?.filename}</td>
                  <td>{row?.status}</td>
                  <td>
                  <Button size='small' onClick={() => navigate("/admin/insuredclient/group")}>Open Group</Button>
                </td>
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