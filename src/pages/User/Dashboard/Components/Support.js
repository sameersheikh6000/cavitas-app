import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useNavigate } from "react-router-dom";
import useClientInsurance from "../../../../hooks/useClientInsurance";
import AlertMessage from "../../../../components/SnackbarMessages/AlertMessage";
const Support = () => {
  const navigate = useNavigate();

  const { getAllClientInsurance } = useClientInsurance();
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const [ errorMessage, setErrorMessage] = useState('');
  const [clientInfo, setClientInfo] = useState([]);
  const { t } = useTranslation();
  console.log(clientInfo)

  const getClientInfos = async () => {
    const response = await getAllClientInsurance();
    if (response?.status < 300) {
      setClientInfo(response?.client_infos);
    } else if (response?.status > 300) {
      setErrorMessage(t("Pannel_Dashboard_Supporttickets.wrong"));
    }
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
    getClientInfos();
  }, [])
  

  return (
    <>
      <AlertMessage errorMessage={errorMessage} />
      <section className="dashboard__container__content__support">
        <header className="dashboard__container__content__support__header">
          <div className="dashboard__container__content__support__header__iconBox">
            <EmailOutlinedIcon className="dashboard__container__content__support__header__iconBox__icon" />
            <p>{t("Pannel_Dashboard_Supporttickets.Supporttitle")}</p>
          </div>
          <Button size="small" onClick={() => navigate(`/support/view/${lang == "pl" ? lang : "en"}`)}>
            {t("Pannel_Dashboard_insuredperson.View")}
          </Button>
        </header>
        <div>
            <div className="insuredClientView__container__mysupport__tickets" 
          
            >
              <table    >
                <thead>
                  
                  <tr >
                  <th >{t("contactsupport.ticketnumber")}</th>
                  <th>{t("MysupportTickets.topic")}</th>
                  <th>{t("MysupportTickets.Status")}</th>
                  <th>{t("Insuredsupport.Lastupdateon")}</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    clientInfo ? clientInfo.map((row, index) => (

                    <tr key={index}>
                      <td>
                        <Link to={`/InsuredPersonSupportTicket/${row?.id}/${lang == 'pl' ? lang : 'en'}`}>{row?.id}</Link>
                      </td>
                      <td>{row?.details}</td>
                      <td>{row?.status}</td>
                      <td>{row?.updated_at}</td>
                    </tr>
                    ))
                    :
                    <tr>
                      <td colSpan={4}>No Data To Display!</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
          
      </section>
    </>
  );
};

export default Support;
