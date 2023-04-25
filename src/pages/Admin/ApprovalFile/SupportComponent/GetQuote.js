import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TicketDetail from "./TicketComponent/TicketDetail";
import { Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Page from "../../../../components/Page/Page";
import Stack from "@mui/material/Stack";
import useContactForm from "../../../../hooks/useContactForm";
import AlertMessage from "../../../../components/SnackbarMessages/AlertMessage";
import SuccessMessage from "../../../../components/SnackbarMessages/SuccessMessage";

const GetQuote = () => {
  const [submittedContact, setSubmittedContact] = useState([]);
  const { getAllContactForms } = useContactForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  console.log(submittedContact);

  const getContactFormData = async () => {
    debugger;
    const response = await getAllContactForms();
    if (response.status < 300) {
      setSubmittedContact(response.contact_forms);
    } else if (response.status > 300) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    getContactFormData();
  }, []);

  return (
    <>
      <Page>
        {/* <AlertMessage errorMessage={errorMessage} /> */}
        <section className="insuredClientView">
          <header className="insuredClientView__header">
            <div className="insuredClientView__header__left">
              <MailOutlineIcon className="insuredClientView__header__left__icon" />
              <p>Support Tickets</p>
            </div>
            <div className="insuredClientView__header__right">
              <input type="text" placeholder="Search" />
              <SearchOutlinedIcon className="insuredClientView__header__right__icon" />
            </div>
          </header>
          <br />
          <Stack direction="row" spacing={2}>
            <div className="insuredClientView__header__left">
              <Link to="/admin/support-tickets">
                <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                  Support Tickets
                </Button>
              </Link>
            </div>
            <div className="insuredClientView__header__left">
              <Link to="/InsuredPerson">
                <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                  Insured Person
                </Button>
              </Link>
            </div>
            <div className="insuredClientView__header__left">
              <Link to="/Contactus">
              <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">

                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="insuredClientView__header__left">
              <Link to="/GetQuote">
                <Button
                  style={{ background: "#5C8894" }}
                  className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn__Submit"
                >
                  
                  get quote
                </Button>
              </Link>
            </div>
          </Stack>
          <AlertMessage errorMessage={errorMessage} />
          <div className="insuredClientView__container">
            <table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Ticket Number</th>
                  <th>Topic</th>
                  <th>Created by</th>
                  <th>First and last name</th>
                  <th>E-mail address</th>
                  <th>Detail</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {submittedContact.length > 0 &&
                  submittedContact.map((row, index) => (
                    <tr key={index}>
                      <td>
                        {row?.status == "fresh"
                          ? "NEW"
                          : row?.status.toUpperCase()}
                      </td>
                      <td>
                        <a
                          href=""
                          onClick={() =>
                            navigate(
                              `/admin/support-tickets/${row?.id}/TicketDetail`
                            )
                          }
                        >
                          {row?.id}
                        </a>
                      </td>
                      <td>{row?.request}</td>
                      <td>{row?.identity}</td>
                      <td>
                        {`${row?.first_name}` + " " + `${row?.last_name}`}
                      </td>
                      <td>{row?.email}</td>
                      <td>{row?.description}</td>
                      <td>{row?.created_at}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      </Page>
    </>
  );
};

export default GetQuote;
