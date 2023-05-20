import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";

const Coverage = ({user}) => {
  
 
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, []);
  return (
    <div className='insuredClientGroup__container__cardsBox__card'>
      <div className='insuredClientGroup__container__cardsBox__card__top'>
        <p>{t("Policyinformation.Coverage")}</p>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Policyinformation.Typeofinsurance")}:</p>
          <p>{t("Policyinformation.Cavitasdentalinsurance")}</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Policyinformation.Insuranceplan")}:</p>
          <p>{t("Policyinformation.BRONZE")}</p>
        </div>
        {user?.data?.role === "broker" ?
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
            <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Insurance coverage:</p>
            <p>Insured person + Spouse/Partner</p>
          </div>
          :
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
            <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Policyinformation.plan")}:</p>
            <p>4500/4500/25000 PLN</p>
          </div>
        }
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Policyinformation.Insurer")}:</p>
          <p>{t("Policyinformation.LTD")}.</p>
        </div>
      </div>
    </div>
  )
}

export default Coverage