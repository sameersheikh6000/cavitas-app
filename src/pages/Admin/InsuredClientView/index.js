import React, { useState, useEffect } from 'react'
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';
import { useNavigate } from 'react-router-dom';
import useClientInsurance from '../../../hooks/useClientInsurance';
import { Button } from '@mui/material'
import moment from 'moment';
import Page from "../../../components/Page/Page";
import { API_KEY } from '../../../config/helpers/variables';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import InsuredClientRejectModal from './Components/InsuredClientReajectModal';
import ClientInfoUpdate from './Components/ClientInfoUpdate';


const AdminInsuredClientView = () => {
  const { getAllClientInsuranceAdmin } = useClientInsurance();
  const [clientInfoList, setClientInfoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)

  const getClientInsurance = async () => {

    const response = await getAllClientInsuranceAdmin();
    if (response.status < 300) {
      setClientInfoList(response.client_infos);
    } else {
      setErrorMessage('Something went wrong!')

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
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
            <p>Clients to be Insured ({clientInfoList.length})</p>
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
                <th>id#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Total Employees in Company</th>
                <th>Participation</th>
                <th>Mandatory Employees</th>
                <th>Voluntary Employees</th>
                <th>Employee Family Info</th>
                <th>Payment Type</th>
                <th>Broker Reference</th>
                <th>Broker Name</th>
                <th>File</th>
                <th>Status</th>
                <th></th>
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
                  <td>{
                    <a href={`${API_KEY}/api/v1/client_infos/${row?.id}/download`}>{row?.file?.filename}</a>
                    }</td>
                  <td>{row?.status}</td>
                  <td><ClientInfoUpdate client_id={row?.id} getClientInsurance={getClientInsurance}/>
                  </td>
                {/* <td style={{ display: "flex", alignItems: 'center', justifyContent: 'space-around' }}>
                  <Button color='success' variant='contained' size='small' style={{ color: "white" }} onClick={() => navigate("/admin/dashboard")}>Accept</Button>
                  <InsuredClientRejectModal />
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

export default AdminInsuredClientView
