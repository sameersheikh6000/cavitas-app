import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Stack from "@mui/material/Stack";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Page from "../../../../../components/Page/Page";
import useContactForm from "../../../../../hooks/useContactForm";

function ContactSupportList() {
  const [submittedContact, setSubmittedContact] = useState([]);
  const { getAllContactForms } = useContactForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const getContactFormData = async () => {
    const response = await getAllContactForms();
    if (response?.status < 300) {
      setSubmittedContact(response.contact_forms);
    } else if (response?.status > 300) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    getContactFormData();
  }, []);

  return (
    <>
      <Page>
        <section className="insuredClientView">
          <header className="insuredClientView__header">
            <div className="supportView__header__iconBox">
              <EmailOutlinedIcon className="supportView__header__iconBox__icon" />
              <p>SUPPORT TICKETS</p>
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
                  Submit New Ticket
                </Button>
              </Link>
            </div>
          </header>
          <header>
            <Stack direction="row" spacing={2} style={{ marginTop: "20px" }}>
              <div>
                <Link to="/support/view" style={{textDecoration: "none"}}>
                  <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                    My support tickets
                  </Button>
                </Link>
              </div>
              <div>
                <Link to="/ContactSupportList" style={{textDecoration: "none"}}>
                  <Button
                    style={{ background: "#5C8894" }}
                    className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn__Submit"
                  >
                    Contact Support
                  </Button>
                </Link>
              </div>
              <div>
              <Link to="/QuoteSupportList" style={{textDecoration: "none"}}>
                  <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                    Quote Support
                  </Button>
                </Link>
              </div>
              {/* <div>
                <Link to="/InsuredPersonSupportList" style={{textDecoration: "none"}}>
                  <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                    Insured person support
                  </Button>
                </Link>
              </div> */}
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
                      <a href="" onClick={() => navigate(`/ContactSupportTicket/${row?.id}`)}>{row?.id}</a>
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
          </div>
        </section>
      </Page>
    </>
  );
}

export default ContactSupportList;
