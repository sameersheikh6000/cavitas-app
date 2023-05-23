import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TicketDetail from "./TicketComponent/ContactFormDetail";
import { Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Page from "../../../../components/Page/Page";
import Stack from "@mui/material/Stack";
import AlertMessage from "../../../../components/SnackbarMessages/AlertMessage";
import AcceptFile from "../Components/AcceptFile";
import useClientInsurance from "../../../../hooks/useClientInsurance";
import { API_KEY } from "../../../../config/helpers/variables";

const InsuredPerson = () => {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { getAllClientInsuranceAdmin } = useClientInsurance();
  const [clientInfoList, setClientInfoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)

  const getClientInsurance = async () => {
    const response = await getAllClientInsuranceAdmin();
    if (response.status < 300) {
      setClientInfoList(response.client_infos);
    } else {
      setErrorMessage('Something went wrong!')
    }
  }

  useEffect(() => {
    getClientInsurance();
  }, []);

  return (
    <>
      <Page>
        <AlertMessage errorMessage={errorMessage} />
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
              <Link to="/admin/support-tickets" style={{textDecoration: "none"}}>
                <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                  Support Tickets
                </Button>
              </Link>
            </div>
            <div className="insuredClientView__header__left">
              <Link to="/InsuredPerson" style={{textDecoration: "none"}}>
                <Button
                  style={{ background: "#5C8894" }}
                  className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn__Submit"
                >
                  Insured Person
                </Button>
              </Link>
            </div>
            <div className="insuredClientView__header__left">
              <Link to="/admin/Contactus" style={{textDecoration: "none"}}>
                <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="insuredClientView__header__left">
              <Link to="/GetQuote"style={{textDecoration: "none"}}>
                <Button className="authentication__container__formContainer__form__loginButton_Form__Support__Ticket__btn">
                  get quote
                </Button>
              </Link>
            </div>
          </Stack>
          <AlertMessage errorMessage={errorMessage} />
          <div className='insuredClientView__container'>
          { clientInfoList.length > 0 ? 
          <table >
            <thead>
              <tr>
                <th>id#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Total Employees in Company</th>
                <th>Participation</th>
                <th>Mandatory Employees</th>
                <th>Voluntary Employees</th>
                <th>Employee Family Info</th>
                <th>Payment Type</th>
                <th>Broker Reference</th>
                <th>Broker Name</th>
                <th>File</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {clientInfoList.map((row, index) => (
                <tr>
              <td><Button onClick={() => navigate(`/admin/InsuredPersonDetail/${row?.id}/${lang == 'pl' ? lang : 'en'}`)}>{row?.id}</Button></td>

                  <td>{row?.corporate_client_name}</td>
                  <td>{row?.details}</td>
                  <td>{row?.number_of_employees_in_company}</td>
                  <td>{row?.participation_mode}</td>
                  <td>{row?.mandatory_number_of_employees}</td>
                  <td>{row?.voluntary_number_of_employees}</td>
                  <td>{row?.employees_family_info}</td>
                  <td>{row?.insurance_payment_type}</td>
                  <td>{row?.broker_reference}</td>
                  <td>{row?.referenced_broker_name}</td>
                  <td>{
                    <a href={`${API_KEY}/api/v1/client_infos/${row?.id}/download_file`}>{row?.file?.filename}</a>
                    }</td>
                  <td>{row?.status}</td>
                  <td>
                    <AcceptFile client_id={row?.id} getClientInsurance={getClientInsurance}/>
                  </td>
              
              </tr>
              )) 
              }
            </tbody>
          </table>
          :
          <div style={{textAlign: "center"}}>
          <p style={{marginTop: "20%", fontWeight: "bold", fontSize: "1.2rem"}}>No Files To Approve.</p>
        </div>}
        </div>
        </section>
      </Page>
    </>
  );
};

export default InsuredPerson;
