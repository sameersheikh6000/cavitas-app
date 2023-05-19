import { Card } from "@mui/material";
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
const SmarterDentalInsurance = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, [])
  return (
    <section className="aboutUs__smarterDentalInsurance">
      <header>
        <h1>{t("about.smartdental_title")}</h1>
        <p>
        {t("about.smartdental_p1")}
        </p>
        <p>
        {t("about.smartdental_p2")}
        </p>
        <p>
        {t("about.smartdental_p3")}
        </p>
      </header>
      <div className="aboutUs__smarterDentalInsurance__imageContainer">
        <img
          className="aboutUs__smarterDentalInsurance__imageContainer__image"
          src={require("../../../../assets/SmartDentalInsurance-image1.png")}
          alt=""
        />
        {/* <img className='aboutUs__smarterDentalInsurance__imageContainer__image' src={require("../../../../assets/SmartDentalInsurance-image2.png")} alt="" /> */}
        <img
          className="aboutUs__smarterDentalInsurance__imageContainer__image"
          src={require("../../../../assets/SmartDentalInsurance-image3.png")}
          alt=""
        />
      </div>
      {/* <img className='aboutUs__smarterDentalInsurance__cornerImage' src={require("../../../../assets/SmartDentalInsurance-image.png")} alt="" /> */}
    </section>
  );
};

export default SmarterDentalInsurance;
