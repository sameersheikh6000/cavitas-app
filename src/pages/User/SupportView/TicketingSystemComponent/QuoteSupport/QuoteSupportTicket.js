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
import useQuoteForm from "../../../../../hooks/useQuoteForm";
import QuoteReplyAnswerForm from "./component/QuoteReplyAnswerForm";
import { API_KEY } from "../../../../../config/helpers/variables";

const QuoteSupportTicket = () => {
  const { id } = useParams();
  const [quoteFormDetail, setQuoteFormDetail] = useState();
  const { getQuoteDetail } = useQuoteForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  console.log(quoteFormDetail);

  const getQuoteFormDetail = async () => {
    const response = await getQuoteDetail(id);
    if (response?.status < 300) {
      setQuoteFormDetail(response?.quote_form);
    } else if (response.status > 300) {
      setErrorMessage(response?.message);
    }
  };

  useEffect(() => {
    getQuoteFormDetail();
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
              <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__ID_btn__Submit">
                My Quote ticket #{quoteFormDetail?.id}
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
                  <TableCell>#{quoteFormDetail?.id}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>Status :</TableCell>
                  <TableCell>
                    {quoteFormDetail?.status == "fresh"
                      ? "NEW"
                      : quoteFormDetail?.status.toUpperCase()}
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
                  <TableCell>{quoteFormDetail?.identity}</TableCell>
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
                  <TableCell>{quoteFormDetail?.created_at}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>
                    Last update on:
                  </TableCell>
                  <TableCell>{quoteFormDetail?.updated_at}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                ></TableRow>
              </TableHead>
            </Table>
          </section>
          <div>
            {/* User side */}
            <section
              className="dashboard__container__content__cavitasDocs__Detail__tickets"
              style={{ width: "110%" }}
            >
              <header className="dashboard__container__content__cavitasDocs__header">
                <div className="dashboard__container__content__cavitasDocs__header__iconBox">
                  <PersonOutlineOutlinedIcon />
                  <p style={{ textTransform: "none" }}>
                    {quoteFormDetail?.user?.name}
                  </p>
                </div>
                <small> {quoteFormDetail?.created_at} </small>
              </header>
              <div className="dashboard__container__content__cavitasDocs__Ticketsdetails">
                <table
                  className="dashboard__container__content__cavitasDocs__Ticketsdetails__table"
                  style={{ height: "auto" }}
                >
                  <thead>
                    <tr>
                      <p>{quoteFormDetail?.description}</p>
                    </tr>
                  </thead>
                  <br />
                </table>
              </div>
            </section>
            <br />

            {/* admin side */}
            {quoteFormDetail?.replies &&
              quoteFormDetail?.replies.map((row) => (
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
                            <p>Attachement(s): &nbsp;
                              <a
                                href={`${API_KEY}/api/v1/quote_replies/${row?.id}/download`}
                              >
                                {row?.file_name}
                              </a>
                            </p> : 
                            <small><em>No Attachements </em></small>
                          }
                      </tbody>
                    </div>
                  </section>

                  <div
                    style={{ display: "flex", flexDirection: "row-reverse",  width: "110%" }}
                  >
                    {!row?.answer && (
                      <QuoteReplyAnswerForm
                        quote_reply={row}
                        setErrorMessage={setErrorMessage}
                        setSuccessMessage={setSuccessMessage}
                        getQuoteFormDetail={getQuoteFormDetail}
                      />
                    )}
                  </div>

                  <br />
                  {row?.answer && (
                    <section
                      className="dashboard__container__content__cavitasDocs__Detail__tickets"
                      style={{ width: "110%" }}
                    >
                      <header className="dashboard__container__content__cavitasDocs__header">
                        <div className="dashboard__container__content__cavitasDocs__header__iconBox">
                          <PersonOutlineOutlinedIcon />
                          <p style={{ textTransform: "none" }}>
                            {quoteFormDetail?.user?.name}
                          </p>
                        </div>
                        <small> {row?.answer?.created_at} </small>
                      </header>
                      <div className="dashboard__container__content__cavitasDocs__Ticketsdetails">
                        <table
                          className="dashboard__container__content__cavitasDocs__Ticketsdetails__table"
                          style={{ height: "auto" }}
                        >
                          <thead>
                            <tr>
                              <p>
                                <p>{row?.answer?.answer_text}</p>
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
                          {row?.answer?.file_name ? 
                            <p>Attachement(s): &nbsp;
                              <a
                                href={`${API_KEY}/api/v1/quote_reply_answers/${row?.answer?.id}/download`}
                              >
                                {row?.answer?.file_name}
                              </a>
                            </p> : 
                            <small><em>No Attachements </em></small>
                          }
                        </tbody>
                      </div>
                    </section>
                  )}
                  <br />
                </div>
              ))}
          </div>
        </Stack>
      </section>
    </Page>
  );
};

export default QuoteSupportTicket;
