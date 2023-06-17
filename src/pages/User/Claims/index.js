import { Button } from '@mui/material'
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from '../../../config/helpers/i18n';
import { Link } from 'react-router-dom'
import Page from '../../../components/Page/Page'

const Claims = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  return (
    <Page>
      <section className='claims'>
        <div className='claims__container'>
          <section className='claims__container__claimsPortal'>
            <header>
              <h1>{t("claim.claim_title")}</h1>
              <p>{t("claim.claim_heading_part1")} &nbsp;
               <b>{t("claim.claim_heading_part2")}  </b> {t("claim.claim_heading_part3")}
               &nbsp;   <b>{t("claim.claim_heading_part4")}</b></p>
            </header>
            <div className='claims__container__claimsPortal__loginBox'>
              <div className='claims__container__claimsPortal__loginBox__details'>
                <p>{t("claim.claim_logindetail")}</p>
                <input type="email" />
                <input type="password" />
                <div>
                  <Button>{t("claim.claim_login")}</Button>
                </div>
                <div className='claims__container__claimsPortal__loginBox__details__links'>
                  <p>{t("claim.claim_clickhere")} <Link to="/password/forgot">{t("claim.claim_clickhere_forget")}</Link></p>
                  <p>{t("claim.claim_newaccount")} <Link to="/signup">{t("claim.claim_newaccount_create")}</Link></p>
                  <p>{t("claim.claim_troubbling")} <Link to="/support">{t("claim.claim_trobbling_support")}</Link></p>
                </div>
              </div>
            </div>
          </section>
          <div className='claims__container__picture'>
            <img src={require("../../../assets/Claim-image.png")} alt="" />
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Claims
