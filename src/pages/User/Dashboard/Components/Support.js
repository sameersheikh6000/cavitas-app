import { Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useNavigate } from 'react-router-dom';
import useClientInsurance from '../../../../hooks/useClientInsurance';
import AlertMessage from '../../../../components/SnackbarMessages/AlertMessage';
const Support = () => {
  const { getAllClientInsurance } = useClientInsurance();
  const navigate = useNavigate();
  const [clientInfos, setClientInfos] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  const getAllClientInfos = async () => {
    const response = await getAllClientInsurance()
    debugger
    if (response.status < 300) {
      console.log(response)
      setClientInfos(response?.client_infos)
    } else if (response.status > 300) {
      setErrorMessage(response.message);
    }
  }
  useEffect(() => {
    getAllClientInfos()
  }, [])

  return (
    <>
    <AlertMessage errorMessage={errorMessage}/>
    <section className='dashboard__container__content__support'>
      <header className='dashboard__container__content__support__header'>
        <div className='dashboard__container__content__support__header__iconBox'>
          < EmailOutlinedIcon className='dashboard__container__content__support__header__iconBox__icon' />
          <p>SUPPORT TICKETS</p>
        </div>
        <Button size='small' onClick={() => navigate("/support/view")}>View all</Button>
      </header>
      {clientInfos.length > 0 ? 
      <div className='dashboard__container__content__support__details'>
        <table className='dashboard__container__content__support__details__table'>
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
                <th>File</th>
                <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {clientInfos.map((row, index) => (
                <tr key={index}>
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
                </tr>
              )) 
            }
          </tbody>
        </table>
      </div>
      : 
      <div style={{textAlign: "center"}}>
          <p style={{marginTop: "10%", fontWeight: "bold", fontSize: "1.2rem"}}>No Ticket History.</p>
      </div>
      }
    </section>
    </>
  )
}

export default Support