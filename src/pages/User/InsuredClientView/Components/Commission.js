import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";

const Commission = ({ user }) => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  return (
    <div className='insuredClientGroup__container__cardsBox__card'>
      <div className='insuredClientGroup__container__cardsBox__card__top'>
        <p>{t("Policyinformation.Bpip")}</p>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Policyinformation.Treatmnenttype")}:</p>

          <p>{t("Policyinformation.Annualsum")}</p>
        </div>
        {user?.data?.role === "broker" &&
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
            <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Commission:</p>
            <p>38,690 EUR</p>
          </div>
        }
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__top'>
        <p style={{ border: "none" }}>{t("Policyinformation.plan2")}</p>
        <span>{t("Policyinformation.Poland")}</span>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Policyinformation.Group1")}:{t("Policyinformation.Group11")}</p>
          <p>1330PLN</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Policyinformation.Group2")}:{t("Policyinformation.Group22")}</p>
          <p>1330PLN</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Policyinformation.Group3")}:{t("Policyinformation.Group33")}</p>
          <p>1330PLN</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Policyinformation.Group4")}:{t("Policyinformation.Group44")}</p>
          <p>1330PLN</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'></p>
          <p>1330PLN</p>
        </div>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__top'>
        <p style={{ border: "none" }}>{t("Policyinformation.plan3")}</p>
        <span>{t("Policyinformation.result3")}</span>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'></p>
          <p></p>
        </div>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__top'>
        <p style={{ border: "none" }}>{t("Policyinformation.plan4")}</p>
        <span>{t("Policyinformation.plan5")}
        </span>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'></p>
          <p></p>
        </div>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__bottom'>
        <p>{t("Policyinformation.plan6")}</p>
      </div>
    </div>
  )
}

export default Commission
