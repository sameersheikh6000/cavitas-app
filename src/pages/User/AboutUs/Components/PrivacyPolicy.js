import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
const PrivacyPolicy = () => {
    const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, [])
  return (
    <section className="aboutUs__privacyPolicy">
      <header>
        <h1>{t("about.ourpolicy_title")}</h1>
      </header>
      <div className="aboutUs__privacyPolicy__container">
        <div className="aboutUs__privacyPolicy__container__card">
          <img
            src={require("../../../../assets/PrivacyPolicy-image.png")}
            alt=""
          />
          <p>{t("about.ourpolicy_policy1")}</p>
        </div>
        <div className="aboutUs__privacyPolicy__container__card">
          <img
            src={require("../../../../assets/PrivacyPolicy-image.png")}
            alt=""
          />
          <p>{t("about.ourpolicy_policy2")}</p>
        </div>
        <div className="aboutUs__privacyPolicy__container__card">
          <img
            src={require("../../../../assets/PrivacyPolicy-image.png")}
            alt=""
          />
          <p>{t("about.ourpolicy_policy3")}</p>
        </div>
        {/* <div className='aboutUs__privacyPolicy__container__card'>
          <img src={require('../../../../assets/PrivacyPolicy-image.png')} alt="" />
          <p>Company <br /> documents</p>
        </div> */}
      </div>
    </section>
  );
};

export default PrivacyPolicy;
