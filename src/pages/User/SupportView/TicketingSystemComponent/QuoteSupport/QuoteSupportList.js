import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Stack from "@mui/material/Stack";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Page from "../../../../../components/Page/Page";
import { API_KEY } from "../../../../../config/helpers/variables";
import useQuoteForm from "../../../../../hooks/useQuoteForm";

function QuoteSupportList() {
  const { getAllQuote } = useQuoteForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [quoteList, setQuoteList] = useState([]);

  const getQuotes = async () => {
    const response = await getAllQuote();
    if(response?.status < 300){
      setQuoteList(response?.quote_forms)
    }
    else if(response?.status > 300){
      setErrorMessage(response?.message)
    }
  }

  useEffect(() => {
    getQuotes();
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
                <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                    Contact Support
                  </Button>
                </Link>
              </div>
              <div>
              <Link to="/QuoteSupportList" style={{textDecoration: "none"}}>
                  <Button
                    style={{ background: "#5C8894" }}
                    className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn__Submit"
                  >
                    Quote Support
                  </Button>
                </Link>
              </div>
              {/* <div>
                <Link to="/InsuredPersonSupportList">
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
                    <th>Group Name</th>
                    <th>No. of Employ</th>
                    <th>Company Name</th>
                    <th>Created by</th>
                    <th>Name</th>
                    <th>E-mail address</th>
                    <th>Detail</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                {quoteList.length > 0 &&
                  quoteList.map((row, index) => (
                    <tr key={index}>
                      <td>
                        {row?.status == "fresh"
                          ? "NEW"
                          : row?.status}
                      </td>
                      <td>
                        <a
                          href=""
                          onClick={() =>
                            navigate(
                              `/QuoteSupportTicket/${row?.id}`
                            )
                          }
                        >
                          #{row?.id}
                        </a>
                      </td>
                      <td>{row?.group_name}</td>
                      <td>{row?.number_of_employ}</td>
                      <td>{row?.company_name}</td>
                      <td>{row?.identity}</td>
                      <td>
                        {row?.name}
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

export default QuoteSupportList;
