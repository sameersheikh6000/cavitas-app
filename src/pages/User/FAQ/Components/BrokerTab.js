import React, { useState } from 'react'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const BrokerTab = () => {
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
          <p>
          Q1: How can us as broker get Cavitas dental insurance for our corporate clients?
          </p>
          {faqData[0] === false &&
            <ArrowDownwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(0)} />
          }
          {faqData[0] === true &&
            <ArrowUpwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(0)} />
          }
        </div>
        {faqData[0] === true &&
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
          {faqData[1] === false &&
            <ArrowDownwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(1)} />
          }
          {faqData[1] === true &&
            <ArrowUpwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(1)} />
          }
        </div>
        {faqData[1] === true &&
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