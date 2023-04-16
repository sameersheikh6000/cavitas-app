import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ContactCavitas from "../BrokerFormComponent/ContactCavitas";

const Conversation = () => {
 
  const navigate = useNavigate();

  return (
    <>
      <section className="landingPage__conversation">
        <div className="landingPage__conversation__container">
          <div className="landingPage__clientDeserve__container">
            <h1>
              Let's discuss how we can help you to <br />
              serve your corporate clients best
            </h1>
            <ContactCavitas />
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Conversation;






