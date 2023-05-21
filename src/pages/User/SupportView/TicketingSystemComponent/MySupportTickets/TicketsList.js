import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../../config/helpers/i18n';
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Stack from "@mui/material/Stack";
import useTickets from "../../../../../hooks/useTickets";
import { API_KEY } from "../../../../../config/helpers/variables";

function TickekList() {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

 

  const { getTicketsByUser } = useTickets();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [ticketList, setTicketList] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const getTickets = async () => {
    const response = await getTicketsByUser();
    if(response?.status < 300){
      setTicketList(response?.tickets)
    }
    else if(response?.status > 300){
      setErrorMessage(response?.message)
    }
  }

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
    getTickets();
  }, []);

  return (
    <>
    
      <header className="supportView__header">
        <Stack direction="row" spacing={2} style={{ marginTop: "20px" }}>
          <div>
            <Link 
             to={`/support/view/${lang == "pl" ? "pl" : "en"}`}
            style={{textDecoration: "none"}}>
              <Button
                style={{ background: "#5C8894" }}
                className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn__Submit"
              >
                  {t("MysupportTickets.Mysupportticket")}

              </Button>
            </Link>
          </div>
          <div>
            <Link to={`/ContactSupportList/${lang == "pl" ? "pl" : "en"}`}
            style={{textDecoration: "none"}}>
            <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
            {t("MysupportTickets.contactsupport")}

              </Button>
            </Link>
          </div>
          <div>
            <Link to={`/QuoteSupportList/${lang == "pl" ? "pl" : "en"}`}
            style={{textDecoration: "none"}}>
            <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
            {t("MysupportTickets.quotesupport")}

              </Button>
            </Link>
          </div>
          <div>
            <Link to={`/InsuredPersonSupportList/${lang == "pl" ? "pl" : "en"}`}
            style={{textDecoration: "none"}}>
              <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
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
               <th>{t("MysupportTickets.Status")}</th>
               <th>{t("MysupportTickets.#id")}</th>
               <th>{t("MysupportTickets.topic")}</th>
               <th>{t("MysupportTickets.description")}</th>
               <th>{t("MysupportTickets.creator")}</th>
               <th>{t("MysupportTickets.attachement")}</th>
               <th>{t("MysupportTickets.createddate")}</th>
              </tr>
            </thead>
            <tbody>
            {ticketList.length > 0 &&
              ticketList.map((row, index) => (
              <tr>
                <td>{row?.status == "fresh" ? "NEW" : row?.status}</td>
                <td><a href="" onClick={() => navigate( `/Tickets/${row?.id}/${lang == "pl" ? "pl" : "en"}`)}>{row?.id} </a> </td>
                <td>{row?.request}</td>
                <td>{row?.description}</td>
                <td>{row?.creator?.email}</td>
                <td>
                    <a
                      href={`${API_KEY}/api/v1/tickets/${row?.id}/download`}
                      target="_blank"
                    >
                      {row?.file_name}
                    </a>
                </td>
                <td>{row?.created_at}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TickekList;
