import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import { useNavigate } from "react-router-dom";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import AlertMessage from "../../../../components/SnackbarMessages/AlertMessage";
import moment from "moment";
import usePolicyInformation from "../../../../hooks/usePolicyInoformation";
import PolicyInoformationCreate from "../../../Admin/PolicyInformation/Components/PolicyInformationCreate";
import SuccessMessage from "../../../../components/SnackbarMessages/SuccessMessage";
import PolicyInoformationUpdate from "../../../Admin/PolicyInformation/Components/PolicyInoformationUpdate";
import PolicyInoformationDestroy from "../../../Admin/PolicyInformation/Components/PolicyInoformationUpdate";

const GroupPolicyInfo = ({ user }) => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, []);
  const navigate = useNavigate();

  const { getPolicyInformation } = usePolicyInformation();
  const [errorMessage, setErrorMessage] = useState(null);
  const [policyInformation, setPolicyInformation] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const getPolicyInfo = async () => {
    debugger;
    const response = await getPolicyInformation();
    if (response?.status < 300) {
      setPolicyInformation(response?.policy_information);
    } else if (response.status > 300) {
      setErrorMessage(response.message);
    }
  };

  useEffect(() => {
    getPolicyInfo();
  }, []);

  return (
    <section className="dashboard__container__content__groupPolicyInfo">
      <header className="dashboard__container__content__groupPolicyInfo__header">
        <div className="dashboard__container__content__groupPolicyInfo__header__iconBox">
          <GppGoodOutlinedIcon lassName="dashboard__container__content__groupPolicyInfo__header__iconBox__icon" />
          <p>{t("Policyinformation.pi_heading")}</p>
        </div>
        <Button size="small" onClick={() => navigate("/insuredclient/group")}>
          {t("Pannel_Dashboard_insuredperson.View")}
        </Button>
      </header>

      <div className="dashboard__container__content__insuredClient__details">
        <table className="dashboard__container__content__insuredClient__details__table">
          <thead>
            <tr>
              <th>{t("Insured_clients.Companyname")}</th>
              <th>{t("Policyinformation.Riskinceptiondate")}</th>
              <th>{t("Policyinformation.Riskexpirydate")}</th>
              <th>{t("Policyinformation.Riskrenewaldate")}</th>
              {/* <th>No of insured persons</th> */}
              {/* <th>Risk inception date</th>
              <th>Risk expiry date</th>
              <th>Risk renewal date</th> */}

              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{policyInformation?.company_name}</td>
              {/* <td>{policyInformation?.no_of_insured_persons}</td> */}
              <td>{policyInformation?.risk_inseption_date}</td>
              <td>{policyInformation?.risk_expiry_date}</td>
              <td>{policyInformation?.risk_renewal_date}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GroupPolicyInfo;

