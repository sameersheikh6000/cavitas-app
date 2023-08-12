import React, {useEffect } from 'react';
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";

const PPT = () => {
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
        <h1 className="landingPage__smartInsurance__container__details__heading2">
          {" "}
          {t("PrivacyPolicy.Main_heading")}
        </h1>
      </div>
      <div style={{ textAlign: "justify", width: "100%", fontSize:"16px",fontWeight:"400" }}>
      <h2 >
          {t("PrivacyPolicy.Sub_heading_01")}{" "}
        </h2>
        <p>
          {t("PrivacyPolicy.Para_No_1")}
          <br />
          <br />
          {t("PrivacyPolicy.Para_No_2")}
          <br />
          <br />
          {t("PrivacyPolicy.Para_No_3")}
          <br />
          <br />
          <h3> {t("PrivacyPolicy.Sub_heading_02")} </h3>
          {t("PrivacyPolicy.Para_No_4")}
          <br /> <br />
          {t("PrivacyPolicy.Para_No_5")}
          <br /> <br />
          {t("PrivacyPolicy.Para_No_6")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_03")} </h3>
          <p> {t("PrivacyPolicy.Para_No_7")}</p>
          <br /> {t("PrivacyPolicy.Para_No_8")} <br />{" "}
          {t("PrivacyPolicy.Para_No_9")}
          <br /> {t("PrivacyPolicy.Para_No_10")}
          <br />
          <br />
          {t("PrivacyPolicy.Para_No_11")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_04")} </h3>
          {t("PrivacyPolicy.Para_No_12")}
          <br /> <br />
          {t("PrivacyPolicy.Para_No_13")}
          <br /> <br />
          {t("PrivacyPolicy.Para_No_14")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_05")} </h3>
          {t("PrivacyPolicy.Para_No_15")}
          <br /> <br />
          {t("PrivacyPolicy.Para_No_16")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_06")} </h3>
          <span style={{ fontWeight: "bold" }}>
            {t("PrivacyPolicy.s1")}
          </span>{" "}
          {t("PrivacyPolicy.Para_No_17")}
          <br /> <br />
          <span style={{ fontWeight: "bold" }}> {t("PrivacyPolicy.s2")} </span>
          {t("PrivacyPolicy.Para_No_18")}
          <br /> <br />
          <span style={{ fontWeight: "bold" }}> {t("PrivacyPolicy.s3")} </span>
          {t("PrivacyPolicy.Para_No_19")}
          <br /> <br />
          <span style={{ fontWeight: "bold" }}> {t("PrivacyPolicy.s4")} </span>
          {t("PrivacyPolicy.Para_No_20")}
          <br /> <br />
          <span style={{ fontWeight: "bold" }}>{t("PrivacyPolicy.s5")}</span>
          {t("PrivacyPolicy.Para_No_21")}
          <br /> <br />
          <span style={{ fontWeight: "bold" }}>{t("PrivacyPolicy.s6")} </span>
          {t("PrivacyPolicy.Para_No_22")}
          <br /> <br />
          <span style={{ fontWeight: "bold" }}> {t("PrivacyPolicy.s7")} </span>
          {t("PrivacyPolicy.Para_No_23")}
          <br /> <br />
          <span style={{ fontWeight: "bold" }}> {t("PrivacyPolicy.s8")} </span>
          {t("PrivacyPolicy.Para_No_24")}
          <br /> <br />
          <span style={{ fontWeight: "bold" }}>{t("PrivacyPolicy.s9")}</span>
          {t("PrivacyPolicy.Para_No_25")}
          <br /> <br />
          <span style={{ fontWeight: "bold" }}> {t("PrivacyPolicy.s10")} </span>
          {t("PrivacyPolicy.Para_No_26")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_07")} </h3>
          {t("PrivacyPolicy.Para_No_27")}
          <br /> <br />
          {t("PrivacyPolicy.Para_No_28")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_08")} </h3>
          {t("PrivacyPolicy.Para_No_29")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_09")} </h3>
          {t("PrivacyPolicy.Para_No_30")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_10")} </h3>
          {t("PrivacyPolicy.Para_No_31")}
          <br /> <br />
          {t("PrivacyPolicy.Para_No_32")}
          <br /> <br />
          <h3>
            {" "}
            <h3> {t("PrivacyPolicy.Sub_heading_12")} </h3>
          </h3>
          <h3> {t("PrivacyPolicy.Sub_heading_13")} </h3>
          {t("PrivacyPolicy.Para_No_34")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_14")} </h3>
          {t("PrivacyPolicy.Para_No_35")}
          <br /> <br />
          {t("PrivacyPolicy.Para_No_35_b")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_15")} </h3>
          {t("PrivacyPolicy.Para_No_36")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_16")} </h3>
          {t("PrivacyPolicy.Para_No_37")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_17")} </h3>
          {t("PrivacyPolicy.Para_No_38")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_18")} </h3>
          {t("PrivacyPolicy.Para_No_39")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_19")} </h3>
          {t("PrivacyPolicy.Para_No_40")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_20")} </h3>
          <span style={{ fontWeight: "bold" }}> {t("PrivacyPolicy.s11")}</span>
          {t("PrivacyPolicy.Para_No_41")}
          <br /> <br />
          <span style={{ fontWeight: "bold" }}> {t("PrivacyPolicy.s12")} </span>
          {t("PrivacyPolicy.Para_No_42")}
          <br /> <br />
          <span style={{ fontWeight: "bold" }}>{t("PrivacyPolicy.s13")} </span>
          {t("PrivacyPolicy.Para_No_43")}
          <br /> <br />
          <h3> {t("PrivacyPolicy.Sub_heading_21")} </h3>
          {t("PrivacyPolicy.Para_No_44")}
          <br />
          {t("PrivacyPolicy.Para_No_45")}
          <br />
          kontakt@cavitas.pl
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

export default PPT;
