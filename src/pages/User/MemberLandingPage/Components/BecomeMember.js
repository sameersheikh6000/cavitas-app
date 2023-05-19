import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import { Link, useNavigate } from "react-router-dom";

const BecomeMember = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, []);
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
            <Button variant="outlined" onClick={() => navigate("/employ")}>
              {t("Member.Member_landingPage_notmember_btn")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeMember;
