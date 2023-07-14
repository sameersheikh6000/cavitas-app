import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../config/helpers/i18n";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Page from "../../../components/Page/Page";
import DeleteAccountForm from "./DeleteaccountFormComponent/DeleteAccountForm";

const AccountDelete = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  return (
    <Page>
      <section className="faq">
        <header>
          <h1 style={{ textTransform: "none" }}>
            {t("Delete_account.Deleteaccount")}
          </h1>{" "}
        </header>
      </section>
      <br />
      <div className="landingPage__valuableReadings ">
        <div
          className="landingPage__valuableReadings__container"
          style={{ fontSize: "18px", marginTop: "0px", padding: "40px" }}
        >
          <p>{t("Delete_account.cavitasuser")}</p>
          <br />
          <div
            className="landingPage__valuableReadings__container__cardsBox"
            style={{ fontSize: "18px" }}
          >
            <p>{t("Delete_account.para_no_1")}</p>
            <br />
            <p>{t("Delete_account.para_no_2")}</p>
            <br />
            <br />
          </div>
          <div
            className="landingPage__valuableReadings__container"
            style={{ fontSize: "18px", marginTop: "0px" }}
          >
            <p> {t("Delete_account.para_no_3")}</p>
            <p> {t("Delete_account.para_no_4")}</p>
          </div>
          <div className="landingPage__healthyTeeth__container">
            <DeleteAccountForm />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default AccountDelete;
