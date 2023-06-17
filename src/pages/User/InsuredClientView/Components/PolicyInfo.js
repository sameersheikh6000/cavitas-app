import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import usePolicyInformation from "../.../../../../../hooks/usePolicyInoformation";

const PolicyInfo = ({ user }) => {

  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  const {getPolicyInformation} = usePolicyInformation();
  const [policyInfo, setPolicyInfo] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const fetchPoicy = async () => {

    const response = await getPolicyInformation();
    if (response?.status < 300) {
      setPolicyInfo(response?.policy_information)
    } else if (response.status > 300) {
      setErrorMessage(response.message);
    }
  }

  useEffect(() => {
    fetchPoicy();
  }, [])
    return (
    <div className='insuredClientGroup__container__cardsBox__card'>
      <div className='insuredClientGroup__container__cardsBox__card__top'>
        {user?.data?.role === "broker" ?
          <p>{t("Policyinformation.pi_brokertitle")}</p>
          :
          <p>{t("Policyinformation.pi_heading")}</p>
        }
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Insured_clients.Companyname")}:</p>
          <p>{policyInfo?.company_name}</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Insured_clients.Companykrsnumber")}:</p>
          <p>{policyInfo?.company_krs_number}</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>{t("Insured_clients.Companyaddress")}:</p>
          <p>{policyInfo?.company_url_address}</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>
          {t("Policyinformation.Riskinceptiondate")}
:</p>
          <p>{policyInfo?.risk_inseption_date}</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>
               {t("Policyinformation.Riskexpirydate")}:
</p>
          <p>{policyInfo?.risk_expiry_date}</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>
        {t("Policyinformation.Riskrenewaldate")}:

            </p>
          <p>{policyInfo?.risk_renewal_date}</p>
        </div>
        {user?.data?.role === "member" ?
          <></>
          :
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
            <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>
            {t("Policyinformation.noperson")}:</p>
            <p>{policyInfo?.no_of_insured_persons}</p>
          </div>
        }
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>
          {t("Policyinformation.Mandatedbroker")}
:</p>
          <p>{policyInfo?.mandated_broker}</p>
        </div>
      </div>
    </div>
  )
}

export default PolicyInfo
