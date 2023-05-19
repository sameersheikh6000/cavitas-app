import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
import DoneIcon from '@mui/icons-material/Done';

const AllCare = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, [])
  return (
    <section className='landingPage__allCare'>
      <div className='landingPage__allCare__container'>
        <div className='landingPage__allCare__container__details'>
          <h1 className='landingPage__allCare__container__details__heading'>{t("home.Easyformember_title")}</h1>
          
<p className='landingPage__allCare__container__details__desc'>{t("home.Easyformember_heading")}</p>
                      <div className='landingPage__allCare__container__details__detailsContainer'>
            <div className='landingPage__allCare__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__allCare__container__details__detailsContainer__box__icon' />
              <p className='landingPage__allCare__container__details__detailsContainer__box__text'>
              {t("home.Easyformember_desc1")}              </p>
            </div>
            <div className='landingPage__allCare__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__allCare__container__details__detailsContainer__box__icon' />
              <p className='landingPage__allCare__container__details__detailsContainer__box__text'>
              {t("home.Easyformember_desc2")}               </p>
            </div>
            <div className='landingPage__allCare__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__allCare__container__details__detailsContainer__box__icon' />
              <p className='landingPage__allCare__container__details__detailsContainer__box__text'>
              {t("home.Easyformember_desc3")}                </p>
            </div>
            <div className='landingPage__allCare__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__allCare__container__details__detailsContainer__box__icon' />
              <p className='landingPage__allCare__container__details__detailsContainer__box__text'>
              {t("home.Easyformember_desc4")}                </p>
            </div>
            {/* <div className='landingPage__allCare__container__details__detailsContainer__box'>
              <DoneIcon className='landingPage__allCare__container__details__detailsContainer__box__icon' />
              <p className='landingPage__allCare__container__details__detailsContainer__box__text'>
                Shop for teeth care products.
              </p>
            </div> */}
          </div>
          <div className='landingPage__allCare__container__details__imageContainer'>
            <img className='landingPage__allCare__container__details__imageContainer__android' src={require("../../../../assets/allCareAndroid-image.png")} alt="" />
            <img className='landingPage__allCare__container__details__imageContainer__apple' src={require("../../../../assets/allCareiOS-image.png")} alt="" />
          </div>
        </div>
        <div className='landingPage__allCare__container__picture'>
          <img src={require("../../../../assets/AllCare-image.png")} alt="" />
        </div>
      </div>
    </section>
  )
}

export default AllCare