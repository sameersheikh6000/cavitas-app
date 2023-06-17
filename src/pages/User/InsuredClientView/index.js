import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../config/helpers/i18n";
import AlertMessage from "../../../components/SnackbarMessages/AlertMessage";
import { useNavigate } from "react-router-dom";
import useClientInsurance from "../../../hooks/useClientInsurance";
import { Button } from "@mui/material";
import Page from "../../../components/Page/Page";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SuccessMessage from "../../../components/SnackbarMessages/SuccessMessage";

const InsuredClientView = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);

  const navigate = useNavigate();
  const { getInsuredClients } = useClientInsurance();
  const [insuranceList, setInsuranceList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMeassage] = useState();
  const [filter, setFilter] = useState();

  const getClientInsurance = async () => {
    const response = await getInsuredClients();
    if (response?.status < 300) {
      setInsuranceList(response?.insured_clients);
      setFilter(response?.insured_clients);
      console.log("this is right page....");
    } else {
      setErrorMessage("Something went wrong!");
    }
  };

  const requestSearch = (searchedVal) => {
    const filteredRows = insuranceList.filter((row) => {
      return (
        row?.member_first_name
          ?.toString()
          .toLowerCase()
          .includes(searchedVal.toString().toLowerCase()) ||
        row?.member_last_name
          ?.toString()
          .toLowerCase()
          .includes(searchedVal.toString().toLowerCase()) ||
        row?.member_email
          ?.toString()
          .toLowerCase()
          .includes(searchedVal.toString().toLowerCase()) ||
        row?.company_name
          ?.toLowerCase()
          .includes(searchedVal.toString().toLowerCase()) ||
        row?.company_krs_number
          ?.toLowerCase()
          .includes(searchedVal.toString().toLowerCase()) ||
        row?.company_url_address
          ?.toLowerCase()
          .includes(searchedVal.toString().toLowerCase()) ||
        row?.member_pesel
          ?.toLowerCase()
          .includes(searchedVal.toString().toLowerCase()) ||
        row?.member_relation
          ?.toLowerCase()
          .includes(searchedVal.toString().toLowerCase()) ||
        row?.member_phone_number
          ?.toLowerCase()
          .includes(searchedVal.toString().toLowerCase()) ||
        row?.member_address
          ?.toLowerCase()
          .includes(searchedVal.toString().toLowerCase())
      );
    });
    if (searchedVal.length < 1) {
      setFilter(insuranceList);
    } else {
      setFilter(filteredRows);
    }
  };

  useEffect(() => {
    getClientInsurance();
  }, []);

  return (
    <Page>
      <SuccessMessage successMessage={successMessage} />
      <AlertMessage errorMessage={errorMessage} />
      <section className="insuredClientView">
        <header className="insuredClientView__header">
          <div className="insuredClientView__header__left">
            <BusinessCenterOutlinedIcon className="insuredClientView__header__left__icon" />
            <p>
              {t("Pannel_Dashboard.Insuredclients")} ({insuranceList.length})
            </p>
          </div>
          <div className="insuredClientView__header__right">
            <input
              type="text"
              onChange={(e) => requestSearch(e.target.value)}
              placeholder={`${t("Insured_clients.search")}`}
            />
            <SearchOutlinedIcon className="insuredClientView__header__right__icon" />
          </div>
        </header>
        {insuranceList.length > 0 ? (
          <div className="insuredClientView__container">
            <table>
              <thead>
                <tr>
                  {/* <th>Risk country</th>
                <th>Type of insurance</th>
                <th>Insurance plan</th>
                <th>Sum Insured per insured person per policy year</th>
                <th>Policy number</th>
                <th>Risk inception date</th>
                <th>Risk expiry date</th>
                <th>Risk renewal date</th>   */}
                  <th>{t("Insured_clients.Companyname")}</th>
                  <th>{t("Insured_clients.Companykrsnumber")}</th>
                  <th>{t("Insured_clients.Companyaddress")}</th>
                  <th>{t("Insured_clients.Membergender")}</th>
                  <th>{t("Insured_clients.Memberfirstname")}</th>
                  <th>{t("Insured_clients.MemberLastname")}</th>
                  <th>{t("Insured_clients.MemberPESEL")}</th>
                  {/* <th>{t("Insured_clients.MemberDOB")}</th> */}
                  {/* <th>{t("Insured_clients.Memberage")}</th> */}
                  <th>{t("Insured_clients.Memberrelation")}</th>
                  <th>{t("Insured_clients.Memberphonenumber")}</th>
                  <th>{t("Insured_clients.Membermail")}</th>
                  <th>{t("Insured_clients.Memberaddress")}</th>
                  {/* <th>Group Type</th>
                <th>PARTICIPATION</th>
                <th>Currency</th>
                <th>Payment Frequency</th>
                <th>Annual GWP</th>
                <th>Annual BC</th>
                <th>Annual NP</th>
                <th>Monthly NP</th>
                <th>Monthly BC</th>
                <th>Insurer</th>
                <th>Mandated broker</th>  */}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filter.map((row, index) => (
                  <tr key={index}>
                    {/* <td>{row?.risk_country}</td>
                  <td>{row?.type_of_insurance}</td>
                  <td>{row?.insurance_plan}</td>
                  <td>{row?.sum_insured_per_insured_person_per_policy_year}</td>
                  <td>{row?.policy_number}</td>
                  <td>{row?.risk_inception_date}</td>
                  <td>{row?.risk_expiry_date}</td>
                  <td>{row?.risk_renewal_date}</td> */}
                    <td>{row?.company_name}</td>
                    <td>{row?.company_krs_number}</td>
                    <td>{row?.company_url_address}</td>
                    <td>{row?.member_gender}</td>
                    <td>{row?.member_first_name}</td>
                    <td>{row?.member_last_name}</td>
                    <td>{row?.member_pesel}</td>
                    {/* <td>{row?.member_dob}</td>
                    <td>{row?.member_age}</td> */}
                    <td>{row?.member_relation}</td>
                    <td>{row?.member_phone_number}</td>
                    <td>{row?.member_email}</td>
                    <td>{row?.member_address}</td>
                    {/* <td>{row?.group_type}</td>
                  <td>{row?.participation}</td>
                  <td>{row?.currency}</td>
                  <td>{row?.payment_frequency}</td>
                  <td>{row?.annual_gwp}</td>
                  <td>{row?.annual_bc}</td>
                  <td>{row?.annual_np}</td>
                  <td>{row?.monthly_np}</td>
                  <td>{row?.monthly_bc}</td>
                  <td>{row?.insurer}</td>
                  <td>{row?.mandated_broker}</td> */}
                    <td>
                      <Button
                        size="small"
                        onClick={() => navigate("/insuredclient/group")}
                      >
                        {t("Insured_clients.Opengroup")}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                marginTop: "10%",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              {t("Insured_clients.noclient")}
            </p>
          </div>
        )}
      </section>
    </Page>
  );
};

export default InsuredClientView;
