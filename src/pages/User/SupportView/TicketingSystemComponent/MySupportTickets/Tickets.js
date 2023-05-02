import React, { useState, useEffect } from "react";
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
import useTickets from "../../../../../hooks/useTickets";
import { API_KEY } from "../../../../../config/helpers/variables";
import TicketReplyAnswerForm from "./component/TicketReplyAnswerForm";

const Tickets = () => {
  const { id } = useParams();
  const [supportFormDetail, setSupportFormDetail] = useState();
  const { getTicketDetail } = useTickets();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getSupportTicketDetail = async () => {
    const response = await getTicketDetail(id);
    if (response?.status < 300) {
      setSupportFormDetail(response?.ticket);
    } else if (response.status > 300) {
      setErrorMessage(response?.message);
    }
  };

  useEffect(() => {
    getSupportTicketDetail();
  }, []);
  return (
    <Page>
      <section className="insuredClientView">
        <header className="insuredClientView__header">
          <div className="insuredClientView__header__left">
            <MailOutlineIcon className="insuredClientView__header__left__icon" />
            <p>Support Tickets</p>
          </div>
          <div className="insuredClientView__header__right">
            <Link to="/support/view" style={{ textDecoration: "none" }}>
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
                Return to ticket list
              </Button>
            </Link>
          </div>
        </header>
        <br />
        <header className="insuredClientView__header">
          <div className="insuredClientView__header__left">
            <Link to="/support/view">
              <Button
                className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__ID_btn__Submit"
                style={{ padding: "3px 20px" }}
              >
                My support ticket #{id}
              </Button>
            </Link>
          </div>
          <div className="insuredClientView__header__right">
            <Link to="/SubmitNewTickets" style={{ textDecoration: "none" }}>
              <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                Submit New Ticket
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
                  <TableCell style={{ fontWeight: "bold" }}>Number :</TableCell>
                  <TableCell>{supportFormDetail?.id}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>Status :</TableCell>
                  <TableCell>
                    {supportFormDetail?.status == "fresh"
                      ? "NEW"
                      : supportFormDetail?.status.toUpperCase()}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>
                    Subject :
                  </TableCell>
                  <TableCell>{supportFormDetail?.request}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>
                    Attachment(s):
                  </TableCell>
                  <TableCell>File Link here</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>
                    Created on:
                  </TableCell>
                  <TableCell>{supportFormDetail?.created_at}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>
                    Last update on:
                  </TableCell>
                  <TableCell>{supportFormDetail?.updated_at}</TableCell>
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
                            textDecoration: "none !important",
                          }}
                        >
                          Reopen tickets
                        </Button>
                      </Link>
                    </div>
                  </TableCell> */}
                  {/* <TableCell>
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
            <section className="dashboard__container__content__cavitasDocs__Detail__tickets">
              <header className="dashboard__container__content__cavitasDocs__header">
                <div className="dashboard__container__content__cavitasDocs__header__iconBox">
                  <PersonOutlineOutlinedIcon />
                  <p style={{ textTransform: "none" }}>
                    {supportFormDetail?.user?.name}
                  </p>
                </div>
                <small>
                  {supportFormDetail?.created_at}
                  &nbsp; &nbsp;&nbsp;
                </small>
              </header>
              <div className="dashboard__container__content__cavitasDocs__Ticketsdetails">
                <table
                  className="dashboard__container__content__cavitasDocs__Ticketsdetails__table"
                  style={{ height: "auto" }}
                >
                  <thead>
                    <tr>{supportFormDetail?.description}</tr>
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
                    paddingBottom: "-0.02rem",
                  }}
                >
                  {supportFormDetail?.file_name ? (
                    <a
                      href={`${API_KEY}/api/v1/tickets/${id}/download`}
                      target="_blank"
                    >
                      {supportFormDetail?.file_name}
                    </a>
                  ) : (
                    <small>
                      <em>No Attachments</em>
                    </small>
                  )}
                </tbody>
              </div>
            </section>
            <br />

            {/* admin side */}

            <div className="dashboard__container__content__cavitasDocs__Ticketsdetails">
              {supportFormDetail?.replies &&
                supportFormDetail?.replies.map((row) => (
                  <div>
                    <section
                      className="dashboard__container__content__cavitasDocs__Detail__tickets"
                      style={{ backgroundColor: "#f4e4e4" }}
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
                        <small>{row?.created_at} </small>
                      </header>

                      <table
                        className="dashboard__container__content__cavitasDocs__Ticketsdetails__table"
                        style={{ height: "auto" }}
                      >
                        <thead>
                          <tr style={{ height: "80px" }}>
                            <p>{row?.reply_text} </p>
                          </tr>
                        </thead>
                        <br />
                        <tbody
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderTop: "1px solid lightgray",
                            paddingTop: "1rem",
                            width: "142%",
                            paddingBottom: "1rem",
                          }}
                        >
                          {row?.file_name ? (
                            <p>
                              Attachement(s){" "}
                              <a
                                href={`${API_KEY}/api/v1/ticket_replies/${row?.id}/download`}
                              >
                                {row?.file_name}
                              </a>
                            </p>
                          ) : (
                            <em>
                              <small>No Attachments available</small>
                            </em>
                          )}
                        </tbody>
                      </table>
                    </section>

                    <div
                      style={{ display: "flex", flexDirection: "row-reverse" }}
                    >
                      {!row?.answer && (
                        <TicketReplyAnswerForm
                          ticket_reply_id={row?.id}
                          setErrorMessage={setErrorMessage}
                          setSuccessMessage={setSuccessMessage}
                          getSupportTicketDetail={getSupportTicketDetail}
                        />
                      )}
                    </div>
                    <br />

                    {row?.answer && (
                      <section className="dashboard__container__content__cavitasDocs__Detail__tickets">
                        <header className="dashboard__container__content__cavitasDocs__header">
                          <div className="dashboard__container__content__cavitasDocs__header__iconBox">
                            <PersonOutlineOutlinedIcon />
                            <p style={{ textTransform: "none" }}>
                              {supportFormDetail?.user?.name}
                            </p>
                          </div>
                          <small>
                            {row?.answer?.created_at}
                            &nbsp; &nbsp;&nbsp;
                          </small>
                        </header>
                        <div style={{ minHeight: "100px" }}>
                          <p>{row?.answer.answer_text}</p>
                        </div>
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
                          {row?.answer?.file_name ? (
                            <p>
                              Attachement(s){" "}
                              <a
                                href={`${API_KEY}/api/v1/ticket_reply_answers/${row?.answer?.id}/download`}
                              >
                                {row?.answer?.file_name}
                              </a>
                            </p>
                          ) : (
                            <em>
                              <small>No Attachments available</small>
                            </em>
                          )}
                        </tbody>
                      </section>
                    )}

                    <br />
                  </div>
                ))}
            </div>

            <br />

            <br />
          </div>
        </Stack>
      </section>
    </Page>
  );
};

export default Tickets;
