import React from "react";
import { Link } from 'react-router-dom'
import TicketDetail from "./TicketComponent/TicketDetail";
import { Button } from "@mui/material";

const SupportTickets = () => {
  return (
    <>
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
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 
            </td>
            <Link to="TicketDetail">112233</Link>
            <td>
            </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

</>
  );
};

export default SupportTickets;
