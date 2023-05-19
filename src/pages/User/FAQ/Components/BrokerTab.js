import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const BrokerTab = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, [])
  const [faqData, setFaqData] = useState([false, false]);

  const handleFaqData = (index) => {
    const newData = [...faqData];
    newData[index] = !newData[index];
    setFaqData(newData);
  }

  return (
    <section className='faqTab'>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
        <p>{t("FAQ.FAQ_broker_Q1")}</p>

          {faqData[0] === false &&
            <ArrowDownwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(0)} />
          }
          {faqData[0] === true &&
            <ArrowUpwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(0)} />
          }
        </div>
        {faqData[0] === true &&
          <div className='faqTab__container__box2'>
 <p>{t("FAQ.FAQ_broker_A1")}</p>
          </div>
        }
      </div>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
        <p>{t("FAQ.FAQ_broker_Q2")}</p>
          {faqData[1] === false &&
            <ArrowDownwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(1)} />
          }
          {faqData[1] === true &&
            <ArrowUpwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(1)} />
          }
        </div>
        {faqData[1] === true &&
          <div className='faqTab__container__box2'>
         <p>{t("FAQ.FAQ_broker_A2")}</p>
          </div>
        }
      </div>
     
    </section>
  )
}

export default BrokerTab