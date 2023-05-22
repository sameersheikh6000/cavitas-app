import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BecomeMember = () => {
  const navigate = useNavigate();
  return (
    <section className="landingPage__becomeMember">
      <div className="landingPage__becomeMember__container">
        <div className="landingPage__becomeMember__container__picture">
          <img
            src={require("../../../../assets/BecomeMember-image.png")}
            alt=""
          />
        </div>
        <div className="landingPage__becomeMember__container__details">
          <h1 className="landingPage__becomeMember__container__details__heading">
            You are not member yet?
          </h1>
          <p className="landingPage__becomeMember__container__details__desc">
            If you are not covered with Cavitas - smarter dental insurance help
            your employer to know about our employee benefit.
          </p>
          <div>
            <Button variant="outlined" onClick={() => navigate("/employ")}>
              Suggest to your employer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeMember;
