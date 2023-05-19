import { Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { useNavigate } from 'react-router-dom';
import useClientInsurance from '../../../../hooks/useClientInsurance';
import moment from 'moment';
import AlertMessage from '../../../../components/SnackbarMessages/AlertMessage';

const InsuredClient = () => {

  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, [])

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
          <p> {t("Pannel_Dashboard_insuredperson.Insuredclient")} ({insuredClientsList.length})</p>
        </div>
        <Button size='small' onClick={() => navigate("/insuredclient/view")}>{t("Pannel_Dashboard_insuredperson.View")}</Button>
      </header>
      <div className='dashboard__container__content__insuredClient__details'>
        {insuredClientsList.length > 0 ? 
        <table className='dashboard__container__content__insuredClient__details__table'>
          <thead>
            <tr>
            <th>{t("Employer_Pannel_registration.companyname")}</th>
              
              <th>{t("Pannel_Dashboard_insuredperson.Krsnumber")}</th>
              <th>{t("Pannel_Dashboard_insuredperson.Riskrenewaldate")}</th>
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
                  <Button size='small' onClick={() => navigate("/insuredclient/group")}>{t("Pannel_Dashboard_insuredperson.Opengroup")}</Button>
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