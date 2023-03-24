import React, { useState, useEffect } from 'react'

import { Button } from '@mui/material'
import useClientInsurance from '../../../../hooks/useClientInsurance';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const AdminInsuredClient = ({ insuranceList }) => {


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
    <section className='dashboard__container__content__insuredClient'>
      <header className='dashboard__container__content__insuredClient__header'>
        <div className='dashboard__container__content__insuredClient__header__iconBox'>
          < BusinessCenterOutlinedIcon lassName='dashboard__container__content__insuredClient__header__iconBox__icon' />
          <p>Pannel Data</p>
        </div>
        <Button size='small' onClick={() => navigate("/admin/PannelData")}>View all</Button>
      </header>
      <div className='dashboard__container__content__insuredClient__details'>
        <table className='dashboard__container__content__insuredClient__details__table'>

        <thead>
            <tr>
                <th>Ticket#</th> 
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



          {/* <thead>
            <tr>
              <th>Company Name</th>
              <th>Reg. No</th>
              <th>Address</th>
              <th>Poliy Period</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {insuranceList.map((insurance, index) => (
              <tr>
                <td>{insurance.name}</td>
                <td>{insurance.email}</td>
                <td>{insurance.phone}</td>
                <td>{moment(insurance.created_at).format("MMM Do YY")}</td>
                <td>
                  <Button size='small' onClick={() => navigate("/admin/insuredclient/group")}>Open Group</Button>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </section>
  )
}

export default AdminInsuredClient