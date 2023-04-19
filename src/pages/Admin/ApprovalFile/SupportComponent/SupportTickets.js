import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import TicketDetail from "./TicketComponent/TicketDetail";
import { Button } from "@mui/material";
import useContactForm from "../../../../hooks/useContactForm";
import AlertMessage from "../../../../components/SnackbarMessages/AlertMessage";
import SuccessMessage from "../../../../components/SnackbarMessages/SuccessMessage";

const SupportTickets = () => {
  const [submittedContact, setSubmittedContact] = useState([]);
  const {getAllContactForms} = useContactForm();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  console.log(submittedContact)

  const getContactFormData = async () => {
    debugger
      const response = await getAllContactForms();
    if (response.status < 300) {
        setSubmittedContact(response.contact_forms);
      } else if (response.status > 300) {
          setErrorMessage('Something went wrong!')
      }
    }

  useEffect(() => {
    getContactFormData();
  }, [])

  return (
    <>
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
          {submittedContact.length > 0 && submittedContact.map((row, index) => (
            <tr key={index}>
              <td>{row?.status}</td>
              <td>
                <Link to="TicketDetail">{row?.id}</Link>
              </td>
              <td>{row?.request}</td>
              <td>{row?.identity}</td>
              <td>{`${row?.first_name}` + ' ' + `${row?.last_name}` }</td>
              <td>{row?.email}</td>
              <td>{row?.description}</td>
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
