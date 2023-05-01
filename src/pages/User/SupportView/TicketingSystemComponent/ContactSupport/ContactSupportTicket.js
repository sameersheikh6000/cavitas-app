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
import useContactForm from "../../../../../hooks/useContactForm";
import ContactReplyAnswerForm from "./component/ContactReplyAnswerForm";

const ContactSupportTicket = () => {
  const [contact, setContact] = useState();
  const { id } = useParams();
  const { getContactFormById } = useContactForm();
  const [contactStatus, setContactStatus] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const getContactDetail = async () => {
    const response = await getContactFormById(id);
    debugger
    if (response?.status < 300) {
      setContact(response?.contact_form);
    }else if (response.status > 300){
      setErrorMessage(response?.message);
    }
  }

  useEffect(() => {
    getContactDetail()
  }, [])
  return (
    <Page>
      <section className="insuredClientView">
        <header className="insuredClientView__header">
          <div className="insuredClientView__header__left">
            <MailOutlineIcon className="insuredClientView__header__left__icon" />
            <p>Support Tickets</p>
          </div>
          <div className="insuredClientView__header__right">
            <Link to="/support/view">
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
              <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__ID_btn__Submit" style={{textDecoration: "none"}}>
                Contact ticket  #{id}
              </Button>
            </Link>
          </div>
          <div className="insuredClientView__header__right">
            <Link to="/SubmitNewTickets" style={{textDecoration: "none"}}>
              <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                Submit New Tickets
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
                  <TableCell>#{contact?.id}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>Status :</TableCell>
                  <TableCell>{ contact?.status == "fresh" ? "NEW" : contact?.status.toUpperCase() }</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>
                    Subject :
                  </TableCell>
                  <TableCell>{contact?.request}</TableCell>
                </TableRow>
              </TableHead>
              
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>
                    Created on:
                  </TableCell>
                  <TableCell>
                    {contact?.created_at}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: "bold" }}>
                    Last update on:
                  </TableCell>
                  <TableCell>
                    {contact?.updated_at}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
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
                  </TableCell>
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
                    <tr>
                     {contact?.description}
                    </tr>
                  </thead>
                  <br />
                </table>
                
              </div>
            </section>
            <br />

            {/* admin side */}
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
                  <input
                    style={{ background: "none", border: "none" }}
                    type="date"
                  ></input>{" "}
                  &nbsp; &nbsp;&nbsp;
                  <p style={{ color: "black", textTransform: "lowercase" }}>
                    at
                  </p>
                  &nbsp; &nbsp;&nbsp;
                  <input
                    style={{ background: "none", border: "none" }}
                    type="time"
                  ></input>
                </Button>
              </header>
              <div className="dashboard__container__content__cavitasDocs__Ticketsdetails">
              {contact?.replies && contact?.replies.map((row) => (
                  <div style={{border: "2px solid red"}}>
                 { row?.reply_text}
                 <ContactReplyAnswerForm contact_reply_id={row?.id} setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage} />
                  </div>
                ))}
                <table
                  className="dashboard__container__content__cavitasDocs__Ticketsdetails__table"
                  style={{ height: "auto" }}
                >
                  <thead>
                    <tr>
                      <p>
                        Hi Cavitas
                        <br></br>
                        Thank you for your quick answer
                        <br></br>
                        BR
                        <br></br>
                        John Smith
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
                  <p>Attachement(s) (Attachement link)</p>
                </tbody>
              </div>
            </section>
            <br />
            {/* User side */}
            <section className="dashboard__container__content__cavitasDocs__Detail__tickets">
              <header className="dashboard__container__content__cavitasDocs__header">
                <div className="dashboard__container__content__cavitasDocs__header__iconBox">
                  <PersonOutlineOutlinedIcon />
                  <p style={{ textTransform: "none" }}>John Smith</p>
                </div>
                <Button size="small">
                  <input
                    style={{ background: "none", border: "none" }}
                    type="date"
                  ></input>{" "}
                  &nbsp; &nbsp;&nbsp;
                  <p style={{ color: "black", textTransform: "lowercase" }}>
                    at
                  </p>
                  &nbsp; &nbsp;&nbsp;
                  <input
                    style={{ background: "none", border: "none" }}
                    type="time"
                  ></input>
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
                        Hi Cavitas
                        <br></br>
                        Thank you for your quick answer
                        <br></br>
                        BR
                        <br></br>
                        John Smith
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
                  <p>Attachement(s) (Attachement link)</p>
                </tbody>
              </div>
            </section>
            <br />
          </div>
        </Stack>
      </section>
    </Page>
  );
};

export default ContactSupportTicket;
