import { Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { useNavigate } from 'react-router-dom';
import useClientInsurance from '../../../../hooks/useClientInsurance';
import moment from 'moment';
import AlertMessage from '../../../../components/SnackbarMessages/AlertMessage';

const InsuredClient = () => {
  const navigate = useNavigate();
  const { getInsuredClients } = useClientInsurance();
  const [insuredClientsList, setInsuredClientsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)

  const getInsuredClientList = async () => {
    debugger
    const response = await getInsuredClients();
    if (response?.status < 300) {
      setInsuredClientsList(response?.insured_clients);
      console.log(insuredClientsList)
    } else {
      setErrorMessage('Something went wrong!')
    }
  }
  useEffect(() => {
    getInsuredClientList();
  }, []);
  return (
    <>
    <AlertMessage errorMessage={errorMessage}/>
    <section className='dashboard__container__content__insuredClient'>
      <header className='dashboard__container__content__insuredClient__header'>
        <div className='dashboard__container__content__insuredClient__header__iconBox'>
          < BusinessCenterOutlinedIcon lassName='dashboard__container__content__insuredClient__header__iconBox__icon' />
          <p>INSURED CLIENTS ({insuredClientsList.length})</p>
        </div>
        <Button size='small' onClick={() => navigate("/insuredclient/view")}>View all</Button>
      </header>
      <div className='dashboard__container__content__insuredClient__details'>
        {insuredClientsList.length > 0 ? 
        <table className='dashboard__container__content__insuredClient__details__table'>
          <thead>
            <tr>
              <th>Company name</th>
              <th>KRS number</th>
              <th>Risk renewal date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {insuredClientsList.map((row, index) => (
                <tr key={index}>
                  <td>{row?.company_name}</td>
                  <td>{row?.company_krs_number}</td>
                  <td>{row?.risk_renewal_date}</td>
                  <td>
                  <Button size='small' onClick={() => navigate("/insuredclient/group")}>Open Group</Button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
        :
        <div style={{textAlign: "center"}}>
          <p style={{marginTop: "10%", fontWeight: "bold", fontSize: "1.2rem"}}>No Clients Data.</p>
        </div>
        }
      </div>
    </section>
    </>
  )
}

export default InsuredClient