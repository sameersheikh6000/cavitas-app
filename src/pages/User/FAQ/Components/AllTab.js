import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const AllTab = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const [faqData, setFaqData] = useState([false, false, false, false]);

  const handleFaqData = (index) => {
    const newData = [...faqData];
    newData[index] = !newData[index];
    setFaqData(newData);
    
  }

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, [])
  return (
    <section className='faqTab'>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
          <p>{t("FAQ.FAQ_genral_Q1")}</p>
          {faqData[0] === false &&
            <ArrowDownwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(0)} />
          }
          {faqData[0] === true &&
            <ArrowUpwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(0)} />
          }
        </div>
        {faqData[0] === true &&
          <div className='faqTab__container__box2'>
          
            <p>{t("FAQ.FAQ_genral_A1")}</p>
                     </div>
        }
      </div>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
          <p>
          <p>{t("FAQ.FAQ_genral_Q2")}</p>
          </p>
          {faqData[1] === false &&
            <ArrowDownwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(1)} />
          }
          {faqData[1] === true &&
            <ArrowUpwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(1)} />
          }
        </div>
        {faqData[1] === true &&
          <div className='faqTab__container__box2'>
          
           <p>{t("FAQ.FAQ_genral_A2")}</p>
          </div>
        }
      </div>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
        
          <p>{t("FAQ.FAQ_genral_Q3")}</p>
          {faqData[2] === false &&
            <ArrowDownwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(2)} />
          }
          {faqData[2] === true &&
            <ArrowUpwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(2)} />
          }
        </div>
        {faqData[2] === true &&
          <div className='faqTab__container__box2'>
         
            <p>{t("FAQ.FAQ_genral_A3")}</p>
                      </div>
        }
      </div>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
        <p>{t("FAQ.FAQ_genral_Q4")}</p>
          {faqData[3] === false &&
            <ArrowDownwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(3)} />
          }
          {faqData[3] === true &&
            <ArrowUpwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(3)} />
          }
        </div>
        {faqData[3] === true &&
          <div className='faqTab__container__box2'>
                      <p>{t("FAQ.FAQ_genral_A4")}</p>
         </div>
        }
      </div>
    </section>
  )
}

export default AllTab