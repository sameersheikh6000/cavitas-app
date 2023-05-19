import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
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
            The insurance service provider is <br />Northern1 international insurance brokers OÜ <br /> License no 12806139 <br />
              Tallinn Estonia
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
          <Link to={`/about/${lang == "pl" ? "pl" : "en"}`} className="appbar__linksBox__links__link">
                    {t("nav.aboutUs")}
                  </Link>
                  <Link className="appbar__linksBox__links__link" to={`/Blog/${lang == "pl" ? "pl" : "en"}`}>
                  {t("nav.Blog")}
                  </Link>
            <Link className="appbar__linksBox__links__link" to={`/faq/${lang == "pl" ? "pl" : "en"}`}>
                  {t("nav.faq")}
                  </Link>
                  <Link className="appbar__linksBox__links__link" to={`/claims/${lang == "pl" ? "pl" : "en"}`}>
                  {t("nav.claims")}
                  </Link>
            <Link to="#">{t("nav.PrivacyPolicy")}</Link>
            <Link to="#">{t("nav.Shop")}</Link>
          </div>
          <div className="footer__container__top__box">
            <Link to="/findus">Find us</Link>
            <Link to="/findus">
              <FacebookOutlinedIcon />
              {/* Facebook */}
            </Link>
            <Link to="/findus">
              <LinkedInIcon />
              {/* Linkedin */}
            </Link>
            <Link to="/findus">
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
