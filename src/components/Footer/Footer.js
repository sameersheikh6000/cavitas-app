import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../../config/helpers/i18n';
import { Link } from "react-router-dom";
import ContactCavitas from "./FooterFormComponent/ContactCavitas";
import ComplaintForm from "./FooterFormComponent/ComplaintForm";
import FeedbackForm from "./FooterFormComponent/Feedbackform";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, [])
  return (
    <section className="footer">
      <div className="footer__container">
        <img
          className="footer__container__logo"
          src={require("../../assets/Footer-logo.png")}
          alt=""
        />
        <div className="footer__container__top">
          <div className="footer__container__top__box">
            <p className="footer__container__top__box__details">
            {t("footer.heading_1")}
            <br />   {t("footer.heading_2")}
             <br />    {t("footer.heading_3")}<br />
             {t("footer.heading_4")}
            </p>
          </div>
          <div className="footer__container__top__box">
            {/* <Link to="/support"> */}
            <Link>
              <ContactCavitas />
            </Link>
            <Link>

              <ComplaintForm />
            </Link>
            <Link>
              <FeedbackForm />
            </Link>
          </div>
          <div className="footer__container__top__box">
          <Link to={`/about/${lang === "pl" ? "pl" : "en"}`} className="appbar__linksBox__links__link">
                    {t("nav.aboutUs")}
                  </Link>
                  <Link className="appbar__linksBox__links__link" to={`/Blog/${lang === "pl" ? lang : "en"}`}>
                  {t("nav.Blog")}
                  </Link>
            <Link className="appbar__linksBox__links__link" to={`/faq/${lang === "pl" ? lang : "en"}`}>
                  {t("nav.faq")}
                  </Link>
                  <Link className="appbar__linksBox__links__link" to={`/claims/${lang === "pl" ? lang : "en"}`}>
                  {t("nav.claims")}
                  </Link>
            <Link to={`/Privacypolicy/${lang === "pl" ? "pl" : "en"}`}
             onClick={handleLinkClick}>
            {t("nav.PrivacyPolicy")}</Link>
            <Link to={"/Shop"}>{t("nav.Shop")}</Link>
          </div>
          <div className="footer__container__top__box">
            <Link>   {t("footer.findus")}</Link>
            <Link>
              <FacebookOutlinedIcon />
              {/* Facebook */}
            </Link>
            <Link>
              <LinkedInIcon />
              {/* Linkedin */}
            </Link>
            <Link >
              <InstagramIcon />
            </Link>
          </div>
        </div>
        <p className="footer__container__copyRight">
          &copy; Copyright 2023 Cavitas - smarter dental insurance.
        </p>
      </div>
    </section>
  );
};

export default Footer;
