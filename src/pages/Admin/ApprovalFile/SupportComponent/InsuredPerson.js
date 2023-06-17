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
 console.log(clientInfoList)
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
            <p>SUPPORT TICKETS</p>
          </div>
          <div className="insuredClientView__header__right">
            <input type="text" placeholder="Search" />
            <SearchOutlinedIcon className="insuredClientView__header__right__icon" />
          </div>
        </header>
        <br />
        <AlertMessage errorMessage={errorMessage} />
        <div className='insuredClientView__container'>
        { clientInfoList.length > 0 ?
        <table >
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Type</th>
              <th>Status</th>
              <th>Topic</th>
              <th>Created At</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Details</th>
              <th>File</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {clientInfoList.map((row, index) => (
              <tr key={index}>
            <td><Button onClick={() => navigate(`/admin/InsuredPersonDetail/${row?.id}/${lang === 'pl' ? lang : 'en'}`)}>{row?.id}</Button></td>
                <td>{row?.form_type.toUpperCase()}</td>
                <td>{row?.status === 'fresh' ? 'NEW' : row?.status?.toUpperCase() }</td>
                <td>{row?.request ? row?.request : <small style={{color: 'gray'}}><em><u>No Topic</u></em></small>}</td>
                <td>{row?.created_at}</td>
                <td>{row?.full_name}</td>
                <td>{row?.email}</td>
                <td>{row?.details}</td>
                <td>{
                  row?.file?.filename ?
                  <a href={`${API_KEY}/api/v1/client_infos/${row?.id}/download`}>{row?.file?.filename}</a>
                  :
                  <small style={{color: 'gray'}}><em>No File(s)</em></small>
                  }</td>

                <td style={{textAlign: "left"}}>
                  {  (row?.status !== 'accepted' && (row?.file?.filename.split('.')[1] === 'csv' || row?.file?.filename.split('.')[1] === 'xlsx' ) ) ?


                    <AcceptFile client_id={row?.id} getClientInsurance={getClientInsurance}/>
                    :
                    <small style={{color: 'gray'}}><em>Not An Approval File <br /> Or Already Approved</em></small>
                  }
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
