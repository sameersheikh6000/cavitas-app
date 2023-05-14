import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UpdatePassword = () => {
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
              src={require("../../../../assets/password updated.png")}
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
            Password Updated{" "}
          </h2>
          <p
            style={{
              marginBottom: "5px",
              fontSize: "17px",
            }}
          >
            Your password has been updated successfully <br /> Use your new
            password to login.
          </p>
          <Link to="/signin">
            <Button
              style={{ borderRadius: "50px" }}
              className="authentication__container__formContainer__form__forget__loginButton__update"
            >
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpdatePassword;
