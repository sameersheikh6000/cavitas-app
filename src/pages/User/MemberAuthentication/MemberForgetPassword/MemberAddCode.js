import { Button } from "@mui/material";
import React, { useState } from "react";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link } from "react-router-dom";

const MemberAddCode = () => {
  const [confirmationCode, setConfirmationCode] = useState(["", "", "", ""]);

  function handleInput(event, index) {
    const value = event.target.value.replace(/\D/g, ""); // Only allow digits
    const newCode = [...confirmationCode];
    newCode[index] = value.substring(0, 1); // Only accept the first character
    setConfirmationCode(newCode);
    if (index < 3 && value) {
      // Move focus to the next box if there is a value
      event.target.nextSibling.focus();
    }
  }

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
              src={require("../../../../assets/Verification.png")}
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
            Verification{" "}
          </h2>
          <p
            style={{
              marginBottom: "5px",
              fontSize: "17px",
            }}
          >
            Please enter 4 digit code you received on email <br />
            address{" "}
            <span style={{ color: "red", cursor: "pointer" }}>
              dummyemail@gmail.com
            </span>
          </p>
          <div className="confirmation-code">
            {confirmationCode.map((value, index) => (
              <input
                type="text"
                key={index}
                value={value}
                onChange={(event) => handleInput(event, index)}
                maxLength={1}
              />
            ))}
          </div>
          <Link to="/MemberSetPassword">
            <Button
              style={{ borderRadius: "50px" }}
              className="authentication__container__formContainer__form__forget__loginButton"
              type="submit"
            >
              Continue
            </Button>
          </Link>
          <div>
            <p>Don't receive a Verification code?</p>
          </div>
          <div style={{ disply: "flex", marginTop: "10px" }}>
            <Link className="appbar__linksBox__links__verification">
              Resend code
            </Link>
            &nbsp;
            <span style={{ color: "red" }}>|</span>&nbsp;
            <Link className="appbar__linksBox__links__verification">
              Change email
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberAddCode;
