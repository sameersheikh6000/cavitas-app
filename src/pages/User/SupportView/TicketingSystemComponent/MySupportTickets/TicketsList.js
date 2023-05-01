import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Stack from "@mui/material/Stack";
import useTickets from "../../../../../hooks/useTickets";
import { API_KEY } from "../../../../../config/helpers/variables";

function TickekList() {

  const { getTicketsByUser } = useTickets();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [ticketList, setTicketList] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const getTickets = async () => {
    const response = await getTicketsByUser();
    if(response?.status < 300){
      setTicketList(response?.tickets)
    }
    else if(response?.status > 300){
      setErrorMessage(response?.message)
    }
  }

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <>
    
      <header className="supportView__header">
        <Stack direction="row" spacing={2} style={{ marginTop: "20px" }}>
          <div>
            <Link to="/support/view" style={{textDecoration: "none"}}>
              <Button
                style={{ background: "#5C8894" }}
                className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn__Submit"
              >
                My support tickets
              </Button>
            </Link>
          </div>
          <div>
            <Link to="/ContactSupportList" style={{textDecoration: "none"}}>
            <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
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
              <th>#id</th>
              <th>Topic</th>
              <th>Description</th>
              <th>Creator</th>
              <th>Attachement</th>
              <th>Created Date</th>
              </tr>
            </thead>
            <tbody>
            {ticketList.length > 0 &&
              ticketList.map((row, index) => (
              <tr>
                <td>{row?.status == "fresh" ? "NEW" : row?.status.toUpperCase()}</td>
                <td><a href="" onClick={() => navigate( `/Tickets/${row?.id}`)}>{row?.id} </a> </td>
                <td>{row?.request}</td>
                <td>{row?.description}</td>
                <td>{row?.creator?.email}</td>
                <td>
                    <a
                      href={`${API_KEY}/api/v1/tickets/${row?.id}/download`}
                      target="_blank"
                    >
                      {row?.file_name}
                    </a>
                </td>
                <td>{row?.created_at}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TickekList;
