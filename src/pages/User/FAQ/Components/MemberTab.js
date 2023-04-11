import React, { useState } from 'react'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const MemberTab = () => {
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
          Q1: How can me as employee of the company get Cavitas dental insurance cover?
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
            A1: In order for the group insurance contract between the insurer and your company to be finalized and for you to receive the advantages of Cavitas dental insurance, your employer must declare its insurance interest to us (or do it through another mandated broker).</p>          </div>
        }
      </div>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
          <p>
          Q2: Can me as employee add my family members to cover?            
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
            A2: Yes you can add your spouse/partner and children up to 23 year old if you have such permission from your employer.
              </p>
          </div>
        }
      </div>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
          <p>
          Q3: In wich dental clinics Cavitas dental insurance is valid?            </p>
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
            A3: Cavitas dental insurance is valid in any dental clinic in Poland or EU/EEA country (except oral cancer treatment what must be done in Poland only). In the event of an dental accident coverage is valid in all licensed dental clinics wordlwide. 
               </p>
          </div>
        }
      </div>
      {/* <div className='faqTab__container'>
        <div className='faqTab__container__box'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          {faqData === false &&
            <ArrowDownwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={handleFaqData} />
          }
          {faqData === true &&
            <ArrowUpwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={handleFaqData} />
          }
        </div>
        {faqData === true &&
          <div className='faqTab__container__box2'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        }
      </div> */}
    </section>
  )
}

export default MemberTab