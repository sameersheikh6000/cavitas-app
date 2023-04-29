import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TicketDetail from "./TicketComponent/TicketDetail";
import { Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Stack from "@mui/material/Stack";
import useContactForm from "../../../../hooks/useContactForm";
import AlertMessage from "../../../../components/SnackbarMessages/AlertMessage";
import SuccessMessage from "../../../../components/SnackbarMessages/SuccessMessage";
import useTickets from "../../../../hooks/useTickets";
import { API_KEY } from "../../../../config/helpers/variables";

const SupportTickets = () => {
  const {getTicketsByAdmin} = useTickets();
  const [submittedContact, setSubmittedContact] = useState([]);
  const { getAllContactForms } = useContactForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [ticketList, setTicketList] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  console.log(submittedContact);

  const getContactFormData = async () => {
    const response = await getAllContactForms();
    if (response.status < 300) {
      setSubmittedContact(response.contact_forms);
    } else if (response.status > 300) {
      setErrorMessage("Something went wrong!");
    }
  };

  const getTickets = async () => {
    debugger
    const response = await getTicketsByAdmin();
    if(response?.status < 300){
      setTicketList(response?.tickets)
    }
    else if(response?.status > 300){
      setErrorMessage(response?.message)
    }
  }

  useEffect(() => {
    getContactFormData();
    getTickets();
  }, []);

  return (
    <>
      <br />
      <Stack direction="row" spacing={2}>
        <div className="insuredClientView__header__left">
          <Link to="/admin/support-tickets" style={{textDecoration: "none"}}>
            <Button
              style={{ background: "#5C8894" }}
              className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn__Submit"
            >
              Support Tickets
            </Button>
          </Link>
        </div>
        <div className="insuredClientView__header__left">
          <Link to="/InsuredPerson" style={{textDecoration: "none"}}>
            <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
              Insured Person
            </Button>
          </Link>
        </div>
        <div className="insuredClientView__header__left">
          <Link to="/Contactus" style={{textDecoration: "none"}}>
            <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="insuredClientView__header__left">
          <Link to="/GetQuote" style={{textDecoration: "none"}}>
            <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
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
              <th>Attachement</th>
              <th>Topic</th>
              <th>Description</th>
              <th>Creator</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody>
            {ticketList.length > 0 &&
              ticketList.map((row, index) => (
                <tr key={index}>
                  <td>
                    <a
                      href={`${API_KEY}/api/v1/tickets/${row?.id}/download`}
                      target="_blank"
                      
                    >
                      {row?.file_name}
                    </a>
                  </td>
                  <td>{row?.request}</td>
                  <td>{row?.description}</td>
                  <td>{row?.creator?.email}</td>
                  <td>{row?.created_at}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SupportTickets;
