import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import BronzePlan from "./3_Plan/BronzePlan";
import SilverPlan from "./3_Plan/SilverPlan";
import GoldPlan from "./3_Plan/GoldenPlan";
const CoverWorks = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  return (
    <section className="landingPage__coverWorks">
      <header>
        <h1>{t("3_Plan.3_Plan_title")}</h1>
        <p>{t("3_Plan.3_Plan_heading")}</p>
      </header>

      <BronzePlan />
      <SilverPlan />
      <GoldPlan />
    </section>
  );
};

export default CoverWorks;
