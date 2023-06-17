import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
import { Link, useNavigate } from "react-router-dom";

const OurStory = () => {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, [])

  return (
    <section className="aboutUs__ourStory">
      <div className="aboutUs__ourStory__container">
        <div className="aboutUs__ourStory__container__profilesBox">
          <div className="aboutUs__ourStory__container__profilesBox__left">
            <img
              className="aboutUs__ourStory__container__profilesBox__left__profileImage"
              src={require("../../../../assets/AboutCoFounder-2.png")}
              alt=""
            />
            <p className="aboutUs__ourStory__container__profilesBox__left__name">
              Signe Soonberg
            </p>
            <span className="aboutUs__ourStory__container__profilesBox__left__designation">
              Co-Founder
            </span>
            <div
              className="aboutUs__ourStory__container__profilesBox__left__linkedInIcon"
              style={{ cursor: "pointer" }}
            >
              <Link to="https://www.linkedin.com/in/ssoonberg/">
                <img
                  src={require("../../../../assets/LinkedIn-icon.png")}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="aboutUs__ourStory__container__profilesBox__right">
            <img
              className="aboutUs__ourStory__container__profilesBox__right__profileImage"
              src={require("../../../../assets/AboutCoFounder-1.png")}
              alt=""
            />
            <p className="aboutUs__ourStory__container__profilesBox__right__name">
              Jean Pierre <br /> Bredorf
            </p>
            <span className="aboutUs__ourStory__container__profilesBox__right__designation">
              Co-Founder
            </span>
            <div
              className="aboutUs__ourStory__container__profilesBox__right__linkedInIcon"
              style={{ cursor: "pointer" }}
            >
              <Link to="https://www.linkedin.com/in/lejpvb/">
                <img
                  src={require("../../../../assets/LinkedIn-icon.png")}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="aboutUs__ourStory__container__detailsBox">
          <h1>{t("about.ourstory")}</h1>
          {/* <p className='aboutUs__ourStory__container__detailsBox__desc'>We started in 2018.....</p> */}
          <p className="aboutUs__ourStory__container__detailsBox__desc1">
          {t("about.ourstory_desc1")}
          </p>
          <p className="aboutUs__ourStory__container__detailsBox__desc1">
          {t("about.ourstory_desc2")}
          </p>
          <p className="aboutUs__ourStory__container__detailsBox__desc1">
          {t("about.ourstory_desc3")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
