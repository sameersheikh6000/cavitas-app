import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Stack from "@mui/material/Stack";

function TickekList() {
  return (
    <>
    
      <header className="supportView__header">
        <Stack direction="row" spacing={2} style={{ marginTop: "20px" }}>
          <div>
            <Link to="/support/view">
              <Button
                style={{ background: "#5C8894" }}
                className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn__Submit"
              >
                My support tickets
              </Button>
            </Link>
          </div>
          <div>
            <Link to="/ContactSupportList">
            <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
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
                  <Link to="/Tickets">112233</Link>
                </td>
                <td>WDC</td>
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
    </>
  );
}

export default TickekList;
