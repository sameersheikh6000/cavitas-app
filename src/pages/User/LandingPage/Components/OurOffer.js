import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import GetQuoteCavitas from "./LandingPageFormComponent/GetQuoteCavitas";

const OurOffer = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  const handleComposeEmail = () => {
    const subject =  t("home.value_member");
    const body = `Hello there,  

  I stumbled upon an incredible website!
  www.cavitas.pl offers an exceptional dental insurance cover called Cavitas that not only covers employees but also their beloved family members.
  
  Imagine the peace of mind you'll have knowing that you and your loved ones are safeguarded by a top-of-the-line dental insurance policy. This employee benefit is truly remarkable, and I would highly 
  recommend considering it.

  Best regards,
  Your loyal employee`;

    const encodedBody = encodeURIComponent(body);
    const composeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&su=${encodeURIComponent(
      subject
    )}&body=${encodedBody}`;

    window.open(composeUrl, "_blank");
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  return (
    <section className="landingPage__ourOffer">
      <header className="landingPage__ourOffer__header">
        <h1>{t("home.landingPage__ourOffer__header_h1")}</h1>
        <p>{t("home.landingPage__ourOffer__header_p")}</p>
      </header>
      <div className="landingPage__ourOffer__container">
        <div className="landingPage__ourOffer__container__boxes">
          <div className="landingPage__ourOffer__container__boxes__detailsContainer">
            <h4 className="landingPage__ourOffer__container__boxes__detailsContainer__heading">
              {t("home.value_member")}
            </h4>
            <div className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox">
              <img
                className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage"
                src={require("../../../../assets/OfferTick-image.png")}
                alt=""
              />
              <span className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc">
                {t("home.value_member1")}
              </span>
            </div>
            <div className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox">
              <img
                className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage"
                src={require("../../../../assets/OfferTick-image.png")}
                alt=""
              />
              <span className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc">
                {t("home.value_member2")}
              </span>
            </div>
            <div className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox">
              <img
                className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage"
                src={require("../../../../assets/OfferTick-image.png")}
                alt=""
              />
              <span className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc">
                {t("home.value_member3")}
              </span>
            </div>
            <div className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox">
              <img
                className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage"
                src={require("../../../../assets/OfferTick-image.png")}
                alt=""
              />
              <span className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc">
                {t("home.value_member4")}
              </span>
            </div>
            <div className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox">
              <img
                className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage"
                src={require("../../../../assets/OfferTick-image.png")}
                alt=""
              />
              <span className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc">
                {t("home.value_member5")}
              </span>
            </div>
            {/* <div className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox'>
              <img className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage' src={require("../../../../assets/OfferTick-image.png")} alt="" />
              <span className='landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc'>Lorem ipsum</span>
            </div> */}
            {/* <Button>Suggest to your employer</Button> */}
          </div>

          <div className="landingPage__ourOffer__container__boxes__detailsContainer">
            <h4 className="landingPage__ourOffer__container__boxes__detailsContainer__heading">
              {t("home.value_employer")}
            </h4>
            <div className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox">
              <img
                className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage"
                src={require("../../../../assets/OfferTick-image.png")}
                alt=""
              />
              <span
                className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc"
                style={{ fontSize: "14px" }}
              >
                {t("home.value_employer1")}
              </span>
            </div>
            <div className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox">
              <img
                className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage"
                src={require("../../../../assets/OfferTick-image.png")}
                alt=""
              />
              <span className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc">
                {t("home.value_employer2")}
              </span>
            </div>
            <div className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox">
              <img
                className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage"
                src={require("../../../../assets/OfferTick-image.png")}
                alt=""
              />
              <span className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc">
                {t("home.value_employer3")}
              </span>
            </div>
            <div className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox">
              <img
                className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage"
                src={require("../../../../assets/OfferTick-image.png")}
                alt=""
              />
              <span className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc">
                {t("home.value_employer4")}
              </span>
            </div>
            <div className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox">
              <img
                className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__tickImage"
                src={require("../../../../assets/OfferTick-image.png")}
                alt=""
              />
              <span className="landingPage__ourOffer__container__boxes__detailsContainer__tickBox__desc">
                {t("home.value_employer5")}
              </span>
            </div>
          </div>
        </div>

        <div className="landingPage__ourOffer__container__boxes">
          <div
            className="landingPage__ourOffer__container__boxes__detailsContainer"
            style={{ border: "none" }}
          >
            <Button onClick={() => handleComposeEmail()}>
              {t("Broker.suggest")}
            </Button>
          </div>

          <div
            className="landingPage__ourOffer__container__boxes__detailsContainer"
            style={{ border: "none" }}
          >
            <GetQuoteCavitas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffer;
