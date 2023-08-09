import { Button } from "@mui/material";
import React, {useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import {useNavigate } from "react-router-dom";

const BecomeMember = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  const handleComposeEmail = () => {
    const subject =  t("Suggest_mail.Suggest_mail_title");
    const body = `${t("Suggest_mail.Suggest_mail_p1")}

${t("Suggest_mail.Suggest_mail_p2")}
${t("Suggest_mail.Suggest_mail_p3")}

${t("Suggest_mail.Suggest_mail_p4")}
${t("Suggest_mail.Suggest_mail_p5")}
    
${t("Suggest_mail.Suggest_mail_p6")}`;

    const encodedBody = encodeURIComponent(body);
    const composeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&su=${encodeURIComponent(
      subject
    )}&body=${encodedBody}`;

    window.open(composeUrl, "_blank");
  };
  const navigate = useNavigate();
  return (
    <section className="landingPage__becomeMember">
      <div className="landingPage__becomeMember__container">
        <div className="landingPage__becomeMember__container__picture">
          <img
            src={require("../../../../assets/BecomeMember-image.png")}
            alt=""
          />
        </div>
        <div className="landingPage__becomeMember__container__details">
          <h1 className="landingPage__becomeMember__container__details__heading">
            {t("Member.Member_landingPage_notmember_title")}
          </h1>
          <p className="landingPage__becomeMember__container__details__desc">
            {t("Member.Member_landingPage_notmember_desc")}
          </p>
          <div>
          <Button onClick={() => handleComposeEmail()}>
            {t("Member.Member_landingPage_notmember_btn")}
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeMember;
