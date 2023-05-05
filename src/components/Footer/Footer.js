import React from "react";
import { Link } from "react-router-dom";
import ContactCavitas from "./FooterFormComponent/ContactCavitas";
import ComplaintForm from "./FooterFormComponent/ComplaintForm";
import FeedbackForm from "./FooterFormComponent/Feedbackform";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
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
              The insurance service provider <br /> is Northern1 international
              insurance brokers OÜ <br /> License nr 12806139 <br />
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
            <Link to="/about">About us</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/claims">Claim</Link>
            <Link to="#">Privacy policy</Link>
            <Link to="#">Shop</Link>
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
