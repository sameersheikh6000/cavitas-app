import { Button } from "@mui/material";
import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const EmployerSetPassword = () => {
  const [viewPassword, setViewPassword] = useState(false);

  const handleShowPassword = () => {
    if (viewPassword === false) {
      setViewPassword(true);
    } else {
      setViewPassword(false);
    }
  };

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
              src={require("../../../../assets/update password.png")}
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
            Update Password{" "}
          </h2>
          <p
            style={{
              marginBottom: "5px",
              fontSize: "17px",
            }}
          >
            Your new password must be different from <br /> previously used
            passwords
          </p>

          <div className="authentication__container__formContainer">
            <form className="authentication__container__formContainer__form">
              <div
                className="supportView__header__iconBox__forget"
                style={{ marginRight: "150px", fontWeight: "normal" }}
              >
                <LockIcon className="supportView__header__iconBox__icon__forget" />
                <p style={{ fontWeight: "normal", fontSize: "16px" }}>
                  New Password
                </p>
              </div>
              <div className="authentication__container__formContainer__form__passwordBox">
                {viewPassword === true ? (
                  <input
                    style={{
                      backgroundColor: "white",
                      boxShadow: "0 0.5rem 1.5rem #d3d3d3",
                      width: "300px",
                      cursor: "pointer",
                    }}
                    type="text"
                    name="password"
                    placeholder="New Password"
                  />
                ) : (
                  <input
                    style={{
                      backgroundColor: "white",
                      boxShadow: "0 0.5rem 1.5rem #d3d3d3",
                      width: "300px",
                      cursor: "pointer",
                    }}
                    type="password"
                    name="password"
                    placeholder="New Password"
                    autoComplete="off"
                  />
                )}
                <RemoveRedEyeOutlinedIcon
                  className="authentication__container__formContainer__form__passwordBox__passwordIcon__forget"
                  onClick={handleShowPassword}
                />
              </div>
              <div
                className="supportView__header__iconBox__forget"
                style={{ marginRight: "80px", fontWeight: "normal" }}
              >
                <LockIcon className="supportView__header__iconBox__icon__forget" />
                <p style={{ fontWeight: "normal", fontSize: "16px" }}>
                  New Confirm Password
                </p>
              </div>
              <div className="authentication__container__formContainer__form__passwordBox">
                {viewPassword === true ? (
                  <input
                    style={{
                      backgroundColor: "white",
                      boxShadow: "0 0.5rem 1.5rem #d3d3d3",
                      width: "300px",
                      cursor: "pointer",
                    }}
                    type="text"
                    name="password"
                    placeholder="Confirm Password"
                  />
                ) : (
                  <input
                    style={{
                      cursor: "pointer",
                      backgroundColor: "white",
                      boxShadow: "0 0.5rem 1.5rem #d3d3d3",
                      width: "300px",
                    }}
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                    autoComplete="off"
                  />
                )}
                <RemoveRedEyeOutlinedIcon
                  className="authentication__container__formContainer__form__passwordBox__passwordIcon__forget"
                  onClick={handleShowPassword}
                />
              </div>
              <Link to="/EmployerUpdatePassword">
               <Button
                style={{ borderRadius: "50px" }}
                className="authentication__container__formContainer__form__forget__loginButton__update"
              >
                Continue
              </Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerSetPassword;
