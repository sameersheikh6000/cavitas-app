import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";

const SmartInsurance = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, []);

  return (
    <section className="landingPage__smartInsurance">
      <div className="landingPage__smartInsurance__container">
        <div className="landingPage__smartInsurance__container__details">
          <h1 className="landingPage__smartInsurance__container__details__heading">
            {t("home.smarter")}
          </h1>
          <h1 className="landingPage__smartInsurance__container__details__heading2">
            {t("home.dentalInsurance")}
          </h1>
          <p className="landingPage__smartInsurance__container__details__desc">
            {t("home.upperDescription")}{" "}
          </p>
          <div className="landingPage__smartInsurance__container__details__buttons ">
            <Link to={`/broker/${lang}`}>
              <Button variant="outlined">
                {t("home.smarter_insurance_button_broker")}
              </Button>
            </Link>
            <Link to={`/employ/${lang}`}>
              <Button variant="outlined">
                {t("home.smarter_insurance_button2_employer")}
              </Button>
            </Link>
            <Link to={`/member/${lang}`}>
              <Button variant="outlined">
                {t("home.smarter_insurance_button3_member")}
              </Button>
            </Link>
          </div>
        </div>
        <div className="landingPage__smartInsurance__container__picture">
          <img src={require("../../../../assets/home_new.png")} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SmartInsurance;
