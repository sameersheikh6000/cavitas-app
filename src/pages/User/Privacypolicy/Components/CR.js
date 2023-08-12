import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import { Link } from "@mui/material";

const CR = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);

  return (
    <section className="faqTab">
      <div className="landingPage__dentaltInsurance__container__details">
        {/* <h1 className='landingPage__smartInsurance__container__details__heading'> Privacy Policy </h1> */}
        <h1 className="landingPage__smartInsurance__container__details__heading2">
          {" "}
          {t("CookiePolicy.Cookie_heading_No1")}{" "}
        </h1>
      </div>
      <div style={{ textAlign: "justify", width: "100%", fontSize:"16px", fontWeight:400 }}>
      <br />
      <h2 >
          {t("PrivacyPolicy.Sub_heading_01")}{" "}
        </h2>
        <p>
          {t("CookiePolicy.Cookie_Para_No1")}{" "}
          <Link style={{ cursor: "pointer" }} to="https://cavitas.pl">
            https://cavitas.pl
          </Link>{" "}
          {t("CookiePolicy.Cookie_Para_No1_b")}
          <br />
          <br />
          {t("CookiePolicy.Cookie_Para_No2")}
          <br />
          <br />
          {t("CookiePolicy.Cookie_Para_No3")}{" "}
          <br />
          <br />
          <h3> {t("CookiePolicy.Cookie_heading_No2")} </h3>
          {t("CookiePolicy.Cookie_Para_No4")}
          <br /> <br />
          {t("CookiePolicy.Cookie_Para_No5")}
          <br /> <br />
          {t("CookiePolicy.Cookie_Para_No6")}
          <br /> <br />
          {t("CookiePolicy.Cookie_Para_No7")}
          <br /> <br />
          <h3> {t("CookiePolicy.Cookie_heading_No3")} </h3>
          <h3> {t("CookiePolicy.Cookie_heading_No4")} </h3>
          {t("CookiePolicy.Cookie_Para_No8")}
          <br />
          {t("CookiePolicy.Cookie_Para_No8_b")}
          <br /> <br />
          <h3> {t("CookiePolicy.Cookie_heading_No5")} </h3>
          {t("CookiePolicy.Cookie_Para_No9")}
          <br />
          {t("CookiePolicy.Cookie_Para_No9_b")}
          <br /> <br />
          <h3> {t("CookiePolicy.Cookie_heading_No6")} </h3>
          {t("CookiePolicy.Cookie_Para_No10")}
          <br />
          {t("CookiePolicy.Cookie_Para_No10_b")}
          <br /> <br />
          <h3> {t("CookiePolicy.Cookie_heading_No7")} </h3>
          {t("CookiePolicy.Cookie_Para_No11")}
          <br />
          {t("CookiePolicy.Cookie_Para_No11_b")}
          {/* <br />
          <br />
          <i>This policy is effective as of 5 June 2023</i>
          <br />
          <h4> Last updated:</h4> 5 June 2023 */}
        </p>
      </div>
    </section>
  );
};

export default CR;
