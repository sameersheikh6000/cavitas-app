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
      </div>
      <div className='faqTab__container'>
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
      </div>
      <div className='faqTab__container'>
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
      </div>
      <div className='faqTab__container'>
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
      </div>
    </section>
  )
}

export default MemberTab