import React, { useState } from 'react'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const BrokerTab = () => {
  const [faqData, setFaqData] = useState(false);

  const handleFaqData = () => {
    if (faqData == false) {
      setFaqData(true)
    } else {
      setFaqData(false)
    }
  }
  return (
    <section className='faqTab'>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
          <p>
          Q1: How can us as broker get Cavitas dental insurance for our corporate clients?
          </p>
          {faqData === false &&
            <ArrowDownwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={handleFaqData} />
          }
          {faqData === true &&
            <ArrowUpwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={handleFaqData} />
          }
        </div>
        {faqData === true &&
          <div className='faqTab__container__box2'>
            <p>
            A1: You must declare your insurance interest to us in order for the group insurance contract between the insurer and your corporate client to be finalized. From there, we'll guide you furthure. 
              </p>
          </div>
        }
      </div>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
          <p>
          Q2: Is there a requirement for minimum amount of employees of my corporate client to conclude Cavitas dental insurance contract with an insurer?
          </p>
          {faqData === false &&
            <ArrowDownwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={handleFaqData} />
          }
          {faqData === true &&
            <ArrowUpwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={handleFaqData} />
          }
        </div>
        {faqData === true &&
          <div className='faqTab__container__box2'>
            <p>
            A2: Yes, please contact us and we'll share you the requirements.
               </p>
          </div>
        }
      </div>
     
    </section>
  )
}

export default BrokerTab