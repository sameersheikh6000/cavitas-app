import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AlertMessage from "../../../../components/SnackbarMessages/AlertMessage";
import useClientInsurance from "../../../../hooks/useClientInsurance";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const AdminFileApproval = () => {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { getAllClientInsuranceAdmin } = useClientInsurance();
  const [clientInfoList, setClientInfoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const getClientInsurance = async () => {
    const response = await getAllClientInsuranceAdmin();
    if (response.status < 300) {
      console.log(response);
      setClientInfoList(response.client_infos);
      console.log(clientInfoList);
    } else {
      setErrorMessage("Something went wrong!");

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };
  useEffect(() => {
    getClientInsurance();
  }, []);

  return (
    <>
      <AlertMessage errorMessage={errorMessage} />
      <section className="dashboard__container__content__insuredClient">
        <header className="dashboard__container__content__insuredClient__header">
          <div className="dashboard__container__content__insuredClient__header__iconBox">
            <MailOutlineIcon ClassName="dashboard__container__content__insuredClient__header__iconBox__icon" />
            <p>Support Tickets</p>
          </div>
          <Button size="small" onClick={() => navigate("/InsuredPerson")}>
            View all
          </Button>
        </header>
        <div className="dashboard__container__content__insuredClient__details">
          {clientInfoList.length > 0 ? (
            <table className="dashboard__container__content__insuredClient__details__table">
              <thead>
                <tr>
                  <th>Ticket ID</th>
                  <th>Type</th>
                  <th>Topic</th>
                  <th>Created At</th>
                  {/* <th>Name</th>
                <th>Description</th>
                <th>Total Employees in Company</th>
                <th>Participation</th>
                <th>Mandatory Employees</th>
                <th>Voluntary Employees</th>
                <th>Employee Family Info</th>
                <th>Payment Type</th>
                <th>Broker Reference</th>
                <th>Broker Name</th>
                <th>File</th> */}
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {clientInfoList.map((row, index) => (
                  <tr style={{ minWidth: 0 }}>
                    <td>
                      <Button
                        onClick={() =>
                          navigate(
                            `/admin/InsuredPersonDetail/${row?.id}/${
                              lang == "pl" ? lang : "en"
                            }`
                          )
                        }
                      >
                        {row?.id}
                      </Button>
                    </td>
                    <td>{row?.form_type.toUpperCase()}</td>
                    <td>{row?.request}</td>
                    <td>{row?.created_at}</td>
                    {/* <td>{row?.corporate_client_name}</td>
                  <td>{row?.details}</td>
                  <td>{row?.number_of_employees_in_company}</td>
                  <td>{row?.participation_mode}</td>
                  <td>{row?.mandatory_number_of_employees}</td>
                  <td>{row?.voluntary_number_of_employees}</td>
                  <td>{row?.employees_family_info}</td>
                  <td>{row?.insurance_payment_type}</td>
                  <td>{row?.broker_reference}</td>
                  <td>{row?.referenced_broker_name}</td>
                  <td>{row?.file?.filename}</td> */}
                    <td>
                      {row?.status === "fresh"
                        ? "NEW"
                        : row?.status?.toUpperCase()}
                    </td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  marginTop: "10%",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                No Files To Approve.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AdminFileApproval;
