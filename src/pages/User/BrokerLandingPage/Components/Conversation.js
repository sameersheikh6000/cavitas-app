import React, {useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
import { useNavigate } from "react-router-dom";
import ContactCavitas from "../BrokerFormComponent/ContactCavitas";


const Conversation = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, [])

  const navigate = useNavigate();

  return (
    <>
      <section className="landingPage__conversation">
        <div className="landingPage__conversation__container">
          <div className="landingPage__clientDeserve__container">
            <h1>
              {t("Broker.Broker__conversion")}
            </h1>
            <ContactCavitas />

          </div>
        </div>
      </section>
    </>
  );
};

export default Conversation;






