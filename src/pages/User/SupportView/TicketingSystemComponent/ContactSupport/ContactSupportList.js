import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Stack from "@mui/material/Stack";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Page from "../../../../../components/Page/Page";

function ContactSupportList() {
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
                <Link to="/support/view">
                  <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                    My support tickets
                  </Button>
                </Link>
              </div>
              <div>
                <Link to="/ContactSupportList">
                  <Button
                    style={{ background: "#5C8894" }}
                    className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn__Submit"
                  >
                    Contact Support
                  </Button>
                </Link>
              </div>
              <div>
              <Link to="/QuoteSupportList">
                  <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                    Quote Support
                  </Button>
                </Link>
              </div>
              <div>
                <Link to="/InsuredPersonSupportList">
                  <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                    Insured person support
                  </Button>
                </Link>
              </div>
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
                    <th>Ticket Number</th>
                    <th>Topic</th>
                    <th>Status</th>
                    <th>Last update on</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link to="/ContactSupportTicket">22233</Link>
                    </td>
                    <td>ADC</td>
                    <td>New</td>
                    <td>Today</td>
                  </tr>
                  <tr>
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
                  </tr>
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
