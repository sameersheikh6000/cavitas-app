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
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
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
          <Button size="small" onClick={() => navigate(`/support/view/${lang === "pl" ? lang : "en"}`)}>
            {t("Pannel_Dashboard_insuredperson.View")}
          </Button>
        </header>
        <div>
            <div className="insuredClientView__container__mysupport__tickets"
          style={{marginTop:"0rem"}}
            >
              <table    style={{ textAlign:"center", border:"none"}}>
                <thead style={{ textAlign:"center", border:"none"}}>

                  <tr style={{ textAlign:"center", border:"none"}}>
                  <th style={{ textAlign:"center", border:"none"}}>{t("contactsupport.ticketnumber")}</th>
                  <th style={{ textAlign:"center", border:"none"}}>{t("MysupportTickets.topic")}</th>
                  <th style={{ textAlign:"center", border:"none"}}>{t("MysupportTickets.Status")}</th>
                  <th style={{ textAlign:"center", border:"none"}}>{t("Insuredsupport.Lastupdateon")}</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign:"center", border:"none"}}>
                  {
                    clientInfo ? clientInfo.map((row, index) => (

                    <tr key={index} style={{ textAlign:"center", border:"none"}}>
                      <td style={{ textAlign:"center", border:"none"}}>
                        <Link to={`/InsuredPersonSupportTicket/${row?.id}/${lang === 'pl' ? lang : 'en'}`}>{row?.id}</Link>
                      </td>
                      <td style={{ textAlign:"center", border:"none"}}>{row?.request}</td>
                      <td style={{ textAlign:"center", border:"none"}}>{row?.status}</td>
                      <td style={{ textAlign:"center", border:"none"}}>{row?.updated_at}</td>
                    </tr>
                    ))
                    :
                    <tr style={{ textAlign:"center", border:"none"}}>
                      <td style={{ textAlign:"center", border:"none"}} colSpan={4}>No Data To Display!</td>
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
