import { Button } from "@mui/material";
import React, { useState } from "react";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link } from "react-router-dom";
const EnterMail = () => {
  return (
    <section className="authentication">
      <div className="authentication__container">
        <div className="authentication__container__imageBox">
          <div className="authentication__container__imageBox__top">
            <img
              className="authentication__container__imageBox__top__logo"
              src={require("../../../../assets/Signin-logo.png")}
              alt=""
            />
            <img
              className="authentication__container__imageBox__top__flag"
              src={require("../../../../assets/Signin-flag.png")}
              alt=""
            />
          </div>

          <div
            className="authentication__container__imageBox__bottom__forget"
            style={{ marginTop: "none" }}
          >
            <img
              className="authentication__container__imageBox__bottom__forget"
              src={require("../../../../assets/Forgot Password_ (1).png")}
              alt=""
            />
          </div>
        </div>
        <div className="authentication__container__formContainer">
          <h2
            className="dashboard__container__content__cavitasDocs__header__iconBox"
            style={{
              color: "#dd3333",
              alignItems: "flex-start",
              marginBottom: "5px",
            }}
          >
            Forgot Password?{" "}
          </h2>
          <p
            style={{
              marginBottom: "5px",
              fontSize: "17px",
            }}
          >
            Please enter the email address associated with your account.
          </p>
          <div className="supportView__header__iconBox__forget">
            <MailOutlinedIcon className="supportView__header__iconBox__icon__forget" />
            <p>Email Address</p>
          </div>
          <form
            className="authentication__container__formContainer__form__forget"
            style={{ width: "300" }}
          >
            <input
              style={{
                backgroundColor: "white",
                boxShadow: "0 0.5rem 1.5rem #d3d3d3",
                marginTop: "15px",
              }}
              type="email"
              placeholder="email address"
              name="email"
            />
            <br />
            <Link to="/AddCode">
              <Button
                style={{ borderRadius: "50px" }}
                className="authentication__container__formContainer__form__forget__loginButton"
                type="submit"
              >
                Continue
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnterMail;
