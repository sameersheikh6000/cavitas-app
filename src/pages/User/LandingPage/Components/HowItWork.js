import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import DoneIcon from "@mui/icons-material/Done";
const HowItWork = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  return (
    <section className="landingPage__howItwork">
      <div className="landingPage__howItwork__container">
        <div className="landingPage__howItwork__container__picture">
          <img src={require("../../../../assets/howItWork-image.png")} alt="" />
        </div>

        <div className="landingPage__howItwork__container__details">
          <h1 className="landingPage__howItwork__container__details__heading">
            {t("home.Howdoeswork_title")}
          </h1>
          {/* <p className="landingPage__howItwork__container__details__desc">
            {t("home.Howdoeswork_heading")}{" "}
          </p> */}
          <div className="landingPage__howItwork__container__details__detailsContainer">
            <div className="landingPage__howItwork__container__details__detailsContainer__box">
              <DoneIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
              <p className="landingPage__howItwork__container__details__detailsContainer__box__text">
                {t("home.Howdoeswork_des1")}{" "}
              </p>
            </div>
            <div className="landingPage__howItwork__container__details__detailsContainer__box">
              <DoneIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
              <p className="landingPage__howItwork__container__details__detailsContainer__box__text">
                {t("home.Howdoeswork_des2")}{" "}
              </p>
            </div>
            <div className="landingPage__howItwork__container__details__detailsContainer__box">
              <DoneIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
              <p className="landingPage__howItwork__container__details__detailsContainer__box__text">
                {t("home.Howdoeswork_des3")}{" "}
              </p>
            </div>
            <div className="landingPage__howItwork__container__details__detailsContainer__box">
              <DoneIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
              <p className="landingPage__howItwork__container__details__detailsContainer__box__text">
                {t("home.Howdoeswork_des4")}{" "}
              </p>
            </div>
            <div className="landingPage__howItwork__container__details__detailsContainer__box">
              <DoneIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
              <p className="landingPage__howItwork__container__details__detailsContainer__box__text">
                {t("home.Howdoeswork_des5")}{" "}
              </p>
            </div>
            <div className="landingPage__howItwork__container__details__detailsContainer__box">
              <DoneIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
              <p className="landingPage__howItwork__container__details__detailsContainer__box__text">
                {t("home.Howdoeswork_des6")}{" "}
              </p>
            </div>
            <div className="landingPage__howItwork__container__details__detailsContainer__box">
              <DoneIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
              <p className="landingPage__howItwork__container__details__detailsContainer__box__text">
                {t("home.Howdoeswork_des7")}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
