import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const PolicyDocuments = ({ user }) => {

  
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
        <p> {t("Policyinformation.PolicyDocuments")}</p>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Pannel_Dashboard_Alldocuments.Documenttype")}</p>
          <p></p>
        </div>
        {user?.data?.role === "member" ?
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
            <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Policyinformation.Policyschedule")}:</p>
            <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox'>
              <VisibilityOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
              <ShareOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
              <FileDownloadOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
            </div>
          </div>
          :
          <></>
        }
        {user?.data?.role === "member" ?
          <></>
          :
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
            <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Masterpolicy:</p>
            <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox'>
              <VisibilityOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
              <ShareOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
              <FileDownloadOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
            </div>
          </div>
        }
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Policyinformation.ptac")}:</p>
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox'>
            <VisibilityOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
            <ShareOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
            <FileDownloadOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
          </div>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Policyinformation.IPID")}:</p>
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox'>
            <VisibilityOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
            <ShareOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
            <FileDownloadOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
          </div>
        </div>
        {user?.data?.role === "member" ?
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
            <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Policyinformation.claimform")}:</p>
            <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox'>
              <VisibilityOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
              <ShareOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
              <FileDownloadOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
            </div>
          </div>
          :
          <></>
        }
      </div>
    </div>
  )
}

export default PolicyDocuments