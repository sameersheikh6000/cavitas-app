import React, {useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import { USER_STORAGE_KEY } from "../../../../config/helpers/variables";

const Welcome = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  if (user?.data?.first_name && user?.data?.last_name) {
    var name = `${user?.data?.first_name}` + " " + `${user?.data?.last_name}`;
  } else {
    var name = "";
  }

  return (
    <section className="dashboard__container__content__welcomePage">
      {/* <h1 className='dashboard__container__content__welcomePage__heading'>Welcome back, {name}!</h1> */}
      <h3 className="dashboard__container__content__welcomePage__heading">
        {t("Pannel_Dashboard_Dashboard.Heading")}
      </h3>

      <p className="dashboard__container__content__welcomePage__description">
        {t("Pannel_Dashboard_Dashboard_Employ.Heading_Part1")}
        <br />
        {t("Pannel_Dashboard_Dashboard_Employ.Heading_Part2")}
        <br />
        {t("Pannel_Dashboard_Dashboard_Employ.Heading_Part3")}

        <br />

        {t("Pannel_Dashboard_Dashboard_Employ.Heading_Part4")}
        <br />
        {t("Pannel_Dashboard_Dashboard_Employ.Heading_Part7")}

       <br />
        {t("Pannel_Dashboard_Dashboard_Employ.Heading_Part5")}
        <br />
        {t("Pannel_Dashboard_Dashboard_Employ.Heading_Part6")}
      </p>

      {/* <p className='dashboard__container__content__welcomePage__support'>Need some help? Let's Chat.</p>
      <p className='dashboard__container__content__welcomePage__contact'>XXXXXXX &nbsp; | &nbsp;  support@cavitas.eu</p>
     */}
    </section>
  );
};

export default Welcome;
