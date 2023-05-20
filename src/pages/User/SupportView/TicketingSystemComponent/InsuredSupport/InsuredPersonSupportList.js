import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../../config/helpers/i18n';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Stack from "@mui/material/Stack";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Page from "../../../../../components/Page/Page";
import useClientInsurance from '../../../../../hooks/useClientInsurance';
import AlertMessage from '../../../../../components/SnackbarMessages/AlertMessage';

function InsuredPersonSupportList() {
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
      setErrorMessage("Something went wrong!");
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
      <Page>
        <AlertMessage errorMessage={errorMessage} />
        <section className="insuredClientView">
          <header className="insuredClientView__header">
            <div className="supportView__header__iconBox">
              <EmailOutlinedIcon className="supportView__header__iconBox__icon" />
              <p>{t("Pannel_Dashboard_Supporttickets.Supporttitle")}</p>
            </div>
            {/* <div className="insuredClientView__header__right">
              <input type="text" placeholder="Search" />
              <SearchOutlinedIcon className="insuredClientView__header__right__icon" />
            </div> */}
            <div className="insuredClientView__header__right">
              <Link to="/SubmitNewTickets">
                <Button
                  color="error"
                  variant="outlined"
                  size="small"
                  style={{
                    color: "white !important",
                    marginLeft: "15px",
                    fontWeight: "bold",
                    borderRadius: "25px",
                    textTransform: "none",
                  }}
                >
                  {t("MysupportTickets.Submitnewticket")}
                </Button>
              </Link>
            </div>
          </header>
          <header>
            <Stack direction="row" spacing={2} style={{ marginTop: "20px" }}>
              <div>
                <Link to="/support/view">
                  <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                  {t("MysupportTickets.Mysupportticket")}
                  </Button>
                </Link>
              </div>
              <div>
                <Link to="/ContactSupportList">
                <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                {t("MysupportTickets.contactsupport")}
                  </Button>
                </Link>
              </div>
              <div>
              <Link to="/QuoteSupportList">
                  <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                  {t("MysupportTickets.quotesupport")}
                  </Button>
                </Link>
              </div>
              <div>
                <Link to="/InsuredPersonSupportList">
                <Button
                    style={{ background: "#5C8894" }}
                    className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn__Submit"
                  >                   
                  {t("MysupportTickets.insuredpersonsupport")}
                  </Button>
                </Link>
              </div>
            </Stack>
            {/* <div className="insuredClientView__header__right">
          <input type="text" placeholder="Search" />
          <SearchOutlinedIcon className="insuredClientView__header__right__icon" />
        </div> */}
          </header>
          <div>
            <div className="insuredClientView__container__mysupport__tickets">
              <table>
                <thead>
                  <tr>
                  <th>{t("contactsupport.ticketnumber")}</th>
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
      </Page>
    </>
  );
}

export default InsuredPersonSupportList;
