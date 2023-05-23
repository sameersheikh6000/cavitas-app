import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../../config/helpers/i18n';
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Page from "../../../../../components/Page/Page";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import useClientInsurance from "../../../../../hooks/useClientInsurance";
import ClientInfoReplyAnswerForm from "./component/ClientInfoReplyAnswerForm";
import { API_KEY } from "../../../../../config/helpers/variables";

const InsuredPersonSupportTicket = () => {
  const { id } = useParams();
  const { getClientInfoById } = useClientInsurance();
  const [clientInfo, setClientInfo] = useState()
  const [ errorMessage, setErrorMessage ] = useState('');
  const [successMessage, setSuccessMessage] = useState();

  const getClient = async () => {
    const response = await getClientInfoById(id);
    debugger;
    if (response?.status < 300) {
      setClientInfo(response?.client_info);
    } else if (response?.status > 300) {
      setErrorMessage(response?.message);
    }
  };

  
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
    getClient();
  }, [])
  return (
    <Page>
      <section className="insuredClientView">
        <header className="insuredClientView__header">
          <div className="insuredClientView__header__left">
            <MailOutlineIcon className="insuredClientView__header__left__icon" />
            <p>{t("Replypannel.insuredticket")}</p>  
          </div>
          <div className="insuredClientView__header__right">
            <Link 
            to={`/SubmitNewTickets/${lang == "pl" ? "pl" : "en"}`}
            
            style={{ textDecoration: "none" }}>
              <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
              {t("MysupportTickets.Submitnewticket")}
              </Button>
            </Link>
          </div>
        </header>
        <br />
        <header className="insuredClientView__header">
          <div className="insuredClientView__header__left">
            <Link to={`/support/view/${lang == "pl" ? "pl" : "en"}`}>
              <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__ID_btn__Submit">{t("Replypannel.myinsuredticket")} #{id}              </Button>
            </Link>
          </div>
          <div className="insuredClientView__header__right">
            <Link to={`/support/view/${lang == "pl" ? "pl" : "en"}`}>
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
               {t("Replypannel.Returnticket")}
              </Button>
            </Link>
          </div>
          
        </header>
        <br /> <br />
        <Stack direction="row" spacing={7}>
          <section className="dashboard__container__content__cavitasDocs___mysupporttickets___Ticket__detail">
            <Table sx={{ minWidth: "auto" }} aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>{t("Replypannel.Number")}:</TableCell>
                  <TableCell>{clientInfo?.id}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>{t("Replypannel.Status")}:</TableCell>
                  <TableCell>{clientInfo?.status}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>
                  {t("Replypannel.Subject")}:
                  </TableCell>
                  <TableCell>      {t("Replypannel.nosubject")}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>
                  {t("Replypannel.Attachement")}
                  </TableCell>
                  <TableCell>{clientInfo?.file?.url}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>
                  {t("Replypannel.Createdon")}:
                  </TableCell>
                  <TableCell>
                    {clientInfo?.created_at}
                    
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>
                  {t("Insuredsupport.Lastupdateon")}:
                  </TableCell>
                  <TableCell>
                    {clientInfo?.updated_at}
                    
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  
                </TableRow>
              </TableHead>
            </Table>
          </section>
          <div>
            {/* User side */}
            <section className="dashboard__container__content__cavitasDocs__Detail__tickets">
              <header className="dashboard__container__content__cavitasDocs__header">
                <div className="dashboard__container__content__cavitasDocs__header__iconBox">
                  <PersonOutlineOutlinedIcon />
                  <p style={{ textTransform: "none" }}>{clientInfo?.user?.name}</p>
                </div>
                <Button size="small">
                 {clientInfo?.created_at}
                </Button>
              </header>
              <div className="dashboard__container__content__cavitasDocs__Ticketsdetails">
                <table
                  className="dashboard__container__content__cavitasDocs__Ticketsdetails__table"
                  style={{ height: "auto" }}
                >
                  <thead>
                    <tr>
                      <p>
                       {clientInfo?.details}
                      </p>
                    </tr>
                  </thead>
                  <br />
                </table>
                <tbody
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid lightgray",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  <p>  {t("Replypannel.Attachement")} {clientInfo?.file?.url ? <a href={`${API_KEY}/api/v1/client_infos/${id}/download_file`}>{clientInfo?.file?.filename}</a> : 'No files'}</p>
                </tbody>
              </div>
            </section>
            <br />

            {/* admin side */}

            { clientInfo?.replies && clientInfo?.replies.map((row, index) => (

              <>
              <section
                className="dashboard__container__content__cavitasDocs__Detail__tickets"
                style={{ backgroundColor: "#f4e4e4" }}
              >
                <header className="dashboard__container__content__cavitasDocs__header">
                  <div className="dashboard__container__content__cavitasDocs__header__iconBox">
                    {/* <img src={require("")} alt="" /> */}

                    <p style={{ textTransform: "none" }}>Cavitas</p>
                  </div>
                  <Button size="small">
                  {row?.created_at}
                  </Button>
                </header>
                <div className="dashboard__container__content__cavitasDocs__Ticketsdetails">
                  <table
                    className="dashboard__container__content__cavitasDocs__Ticketsdetails__table"
                    style={{ height: "auto" }}
                  >
                    <thead>
                      <tr>
                        <p>
                          {row?.reply_text}
                        </p>
                      </tr>
                    </thead>
                    <br />
                  </table>
                  <tbody
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid lightgray",
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    <p>  {t("Replypannel.Attachement")} {row?.file_name ? <a href={`${API_KEY}/api/v1/client_info_replies/${row?.id}/download`}>{row?.file_name}</a> : 'No files'}</p>
                  </tbody>
                </div>
              </section>
              <br />
              {/* User side */}
              {row?.answer ?
              <section className="dashboard__container__content__cavitasDocs__Detail__tickets">
                <header className="dashboard__container__content__cavitasDocs__header">
                  <div className="dashboard__container__content__cavitasDocs__header__iconBox">
                    <PersonOutlineOutlinedIcon />
                    <p style={{ textTransform: "none" }}>{clientInfo?.user?.name}</p>
                  </div>
                  <Button size="small">
                   {row?.answer?.created_at}
                  </Button>
                </header>
                <div className="dashboard__container__content__cavitasDocs__Ticketsdetails">
                  <table
                    className="dashboard__container__content__cavitasDocs__Ticketsdetails__table"
                    style={{ height: "auto" }}
                  >
                    <thead>
                      <tr>
                        <p>
                          {row?.answer?.answer_text}
                        </p>
                      </tr>
                    </thead>
                    <br />
                  </table>
                  <tbody
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid lightgray",
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    <p>  {t("Replypannel.Attachement")} {row?.answer?.file_name ? <a href={`${API_KEY}/api/v1/client_info_reply_answers/${row?.answer.id}/download`}>{row?.answer?.file_name}</a> : 'No files'}</p>
                  </tbody>
                </div>
              </section>
              :
              (index === (clientInfo?.replies?.length - 1) && !row?.answer) && 
                <ClientInfoReplyAnswerForm client_info_reply={row} setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage} getClientInfoData={getClient}/>
              
              }
              </>

            ))
             
            }








            <br />
          </div>
        </Stack>
      </section>
    </Page>
  );
};

export default InsuredPersonSupportTicket;
