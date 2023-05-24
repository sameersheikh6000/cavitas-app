import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../../config/helpers/i18n';
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Page from "../../../../../components/Page/Page";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import useContactForm from "../../../../../hooks/useContactForm";
import ContactReplyAnswerForm from "./component/ContactReplyAnswerForm";
import { API_KEY } from "../../../../../config/helpers/variables";

const ContactSupportTicket = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const [contact, setContact] = useState();
  const { id } = useParams();
  const { getContactFormById } = useContactForm();
  const [contactStatus, setContactStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getContactDetail = async () => {
    const response = await getContactFormById(id);
    ;
    if (response?.status < 300) {
      setContact(response?.contact_form);
    } else if (response.status > 300) {
      setErrorMessage(response?.message);
    }
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
    getContactDetail();
  }, []);

  return (
    <Page>
      <section className="insuredClientView">
        <header className="insuredClientView__header">
          <div className="insuredClientView__header__left">
            <MailOutlineIcon className="insuredClientView__header__left__icon" />
            <p>{t("Pannel_Dashboard_Supporttickets.Supporttitle")}</p>
          </div>
          <div className="insuredClientView__header__right">
            <Link  to={`/support/view/${lang == "pl" ? "pl" : "en"}`}>
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
        <br />
        <header className="insuredClientView__header">
          <div className="insuredClientView__header__left">
            <Link to={`/support/view/${lang == "pl" ? "pl" : "en"}`}>
              <Button
                className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__ID_btn__Submit"
                style={{ textDecoration: "none" }}
              >
              {t("Replypannel.contactticket")} #{id}
              </Button>
            </Link>
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
        <br /> <br />
        <Stack direction="row" spacing={7}>
          <section className="dashboard__container__content__cavitasDocs___mysupporttickets___Ticket__detail">
            <Table sx={{ minWidth: "auto" }} aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>{t("Replypannel.Number")}:</TableCell>
                  <TableCell>#{contact?.id}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>{t("Replypannel.Status")} :</TableCell>
                  <TableCell>
                    {contact?.status == "fresh"
                      ? "NEW"
                      : contact?.status.toUpperCase()}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>
                  {t("Replypannel.Subject")} :
                  </TableCell>
                  <TableCell>{contact?.request}</TableCell>
                </TableRow>
              </TableHead>

              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>
                  {t("Replypannel.Createdon")}:
                  </TableCell>
                  <TableCell>{contact?.created_at}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>
                  <th>{t("Insuredsupport.Lastupdateon")}</th>
                  </TableCell>
                  <TableCell>{contact?.updated_at}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell>
                    {" "}
                    <div className="insuredClientView__header__right">
                      <Link to="/admin/ApprovalFile">
                        <Button
                          variant="outlined"
                          size="small"
                          className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__ID_btn__Submit"
                          style={{
                            fontSize: "10px",
                            color: "white !important",
                            color: "white !important",
                            backgroundColor: "red",
                            marginLeft: "15px",
                            borderRadius: "25px",
                            textTransform: "none",
                          }}
                        >
                          Reopen tickets
                        </Button>
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="insuredClientView__header__right">
                      <Link to="/admin/ApprovalFile">
                        <Button
                          variant="outlined"
                          size="small"
                          style={{
                            fontSize: "10px",
                            color: "black",
                            borderRadius: "25px",
                            textTransform: "none",
                            backgroundColor: "white",
                            border: "none",
                          }}
                        >
                          Answer
                        </Button>
                      </Link>
                    </div>
                  </TableCell> */}
                </TableRow>
              </TableHead>
            </Table>
          </section>
          <div>
            {/* User side */}
            <section className="dashboard__container__content__cavitasDocs__Detail__tickets"
             style={{ width: "110%" }}
            >
              <header className="dashboard__container__content__cavitasDocs__header">
                <div className="dashboard__container__content__cavitasDocs__header__iconBox">
                  <PersonOutlineOutlinedIcon />
                  <p style={{ textTransform: "none" }}>{contact?.user?.name}</p>
                </div>
                {contact?.created_at}
              </header>
              <div className="dashboard__container__content__cavitasDocs__Ticketsdetails">
                <table
                  className="dashboard__container__content__cavitasDocs__Ticketsdetails__table"
                  style={{ height: "auto" }}
                >
                  <thead>
                    <tr>{contact?.description}</tr>
                  </thead>
                  <br />
                </table>
              </div>
            </section>
            <br />

            {/* admin side */}
            {contact?.replies &&
              contact?.replies.map((row) => (
                <div>
                  <section
                    className="dashboard__container__content__cavitasDocs__Detail__tickets"
                    style={{ backgroundColor: "#f4e4e4", width: "110%" }}
                  >
                    <header className="dashboard__container__content__cavitasDocs__header">
                      <div className="dashboard__container__content__cavitasDocs__header__iconBox">
                        <img
                          style={{ width: "35px", height: "auto" }}
                          src={require("../../../../../assets/CavitasLogo-img.png")}
                          alt=""
                        />
                        <p style={{ textTransform: "none" }}>Cavitas</p>
                      </div>
                      <small> {row?.created_at} </small>
                    </header>
                    <div className="dashboard__container__content__cavitasDocs__Ticketsdetails">
                      <table
                        className="dashboard__container__content__cavitasDocs__Ticketsdetails__table"
                        style={{ height: "auto" }}
                      >
                        <thead>
                          <tr>
                            <p>
                              <div>{row?.reply_text}</div>
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
                        {row?.file_name ? 
                            <p>                  {t("Replypannel.Attachement")}
 
                              <a
                                href={`${API_KEY}/api/v1/contact_replies/${row?.id}/download`}
                              >
                                {row?.file_name}
                              </a>
                            </p> : 
                            <small><em> {t("Replypannel.Noattachemnt")} </em></small>
                          }
                      </tbody>
                    </div>
                  </section>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                       width: "110%"
                    }}
                  >
                    {!row?.answer && (
                      <ContactReplyAnswerForm
                        contact_reply={row}
                        setErrorMessage={setErrorMessage}
                        setSuccessMessage={setSuccessMessage}
                        getContactDetail={getContactDetail}
                      />
                    )}
                  </div>

                  <br />
                  {row?.answer && (
                    <section className="dashboard__container__content__cavitasDocs__Detail__tickets"
                    style={{ width: "110%" }}
                    >
                      <header className="dashboard__container__content__cavitasDocs__header">
                        <div className="dashboard__container__content__cavitasDocs__header__iconBox">
                          <PersonOutlineOutlinedIcon />
                          <p style={{ textTransform: "none" }}>
                            {contact?.user?.name}
                          </p>
                        </div>
                        {contact?.created_at}
                      </header>

                      <div className="dashboard__container__content__cavitasDocs__Ticketsdetails">
                        <table
                          className="dashboard__container__content__cavitasDocs__Ticketsdetails__table"
                          style={{ height: "auto" }}
                        >
                          <thead>
                            <tr>
                              <div>
                                  <p>{row?.answer?.answer_text}</p>
                              </div>
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
                          {row?.answer?.file_name ? 
                            <p>                  {t("Replypannel.Attachement")}
                            &nbsp;
                              <a
                                href={`${API_KEY}/api/v1/contact_reply_answers/${row?.answer?.id}/download`}
                              >
                                {row?.answer?.file_name}
                              </a>
                            </p> : 
                            <small><em> {t("Replypannel.Noattachemnt")} </em></small>
                          }
                        </tbody>
                      </div>
                    </section>
                  )}
                  <br />
                </div>
              ))}
            <br />

            <br />
          </div>
        </Stack>
      </section>
    </Page>
  );
};

export default ContactSupportTicket;
