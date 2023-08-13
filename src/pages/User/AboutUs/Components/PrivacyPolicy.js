import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  const handleLinkClick = (tabIndex) => {
    localStorage.setItem("selectedTabIndex", tabIndex);
    window.scrollTo(0, 0);
  };
  

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
        <Link  to={`/Privacypolicy/${lang === "pl" ? lang : "en"}`}  onClick={() => handleLinkClick(0)}>

          <img
            src={require("../../../../assets/PrivacyPolicy-image.png")}
            alt=""
          />
          <p>{t("about.ourpolicy_policy1")}</p>
          </Link>
        </div>
        <div className="aboutUs__privacyPolicy__container__card">
        <Link to={`/Privacypolicy/${lang === "pl" ? lang : "en"}`} onClick={() => handleLinkClick(1)}>

          <img
            src={require("../../../../assets/PrivacyPolicy-image.png")}
            alt=""
          />
          <p>{t("about.ourpolicy_policy2")}</p>
          </Link>
        </div>
        <div className='aboutUs__privacyPolicy__container__card' >
        <Link  to={`/Privacypolicy/${lang === "pl" ? lang : "en"}`}  onClick={() => handleLinkClick(2)}>
          <img src={require('../../../../assets/PrivacyPolicy-image.png')}  />
          <p>{t("about.ourpolicy_policy4")}<br />{t("about.ourpolicy_policy4_b")}</p>
          </Link>
        </div>
        <div className="aboutUs__privacyPolicy__container__card">
        <Link  to={`/Privacypolicy/${lang === "pl" ? lang : "en"}`}  onClick={() => handleLinkClick(3)}>

          <img
            src={require("../../../../assets/PrivacyPolicy-image.png")}
            alt=""
          />
          <p>{t("about.ourpolicy_policy3")}</p>
          </Link>
        </div>
      
      </div>
    </section>
  );
};

export default PrivacyPolicy;
