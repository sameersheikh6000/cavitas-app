import React, { useState } from 'react'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const AllTab = () => {
  const [faqData, setFaqData] = useState([false, false, false, false]);

  const handleFaqData = (index) => {
    const newData = [...faqData];
    newData[index] = !newData[index];
    setFaqData(newData);
  }
  return (
    <section className='faqTab'>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
          <p>Q1: What is the purpose of Cavitas dental insurance?</p>
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
            A1: Insurance is a tool to protect against financial loss. In accordance with the principle of insurance and on the basis of mutual assistance, persons seeking to avoid the realization of a certain similar risk collect their funds at the insurer so that some of them receive insurance benefits in the event of a negative consequence. Thus, the principle of insurance is the distribution of the damages (claims) between a large number of persons carrying the same risk.
            </p>          </div>
        }
      </div>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
          <p>
          Q2: Why to join Cavitas dental insurance?
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
          A2: Cavitas dental insurance, like any other insurance, is to prevent and diminish your potential risks. In the case of dental insurance, these risks are the dental costs that you may incur in the future.            </p>
          </div>
        }
      </div>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
          <p>
          Q3: Does an insured person have to disclose their dental status in order to get Cavitas dental insurance cover?            </p>
          {faqData[2] === false &&
            <ArrowDownwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(2)} />
          }
          {faqData[2] === true &&
            <ArrowUpwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(2)} />
          }
        </div>
        {faqData[2] === true &&
          <div className='faqTab__container__box2'>
            <p>
            A3: . No, this is not required. All existing teeth are covered regardless of previous treatment history (missing teeth are excluded). This includes, already ongoing, planned or recommended treatments, provided that the treatment occurs after the start date of the policy period.
            </p>          </div>
        }
      </div>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
          <p>
          Q4: How long is the policy period?            </p>
          {faqData[3] === false &&
            <ArrowDownwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(3)} />
          }
          {faqData[3] === true &&
            <ArrowUpwardOutlinedIcon className='faqTab__container__box__arrowDown' onClick={() => handleFaqData(3)} />
          }
        </div>
        {faqData[3] === true &&
          <div className='faqTab__container__box2'>
            <p>
            Q4: Policy period is 1 year although the Cavitas insurance benefit plan is for the 3-years so that the cover is increasing over three (3) years giving the maximum coverage in the third year. 
            </p>          </div>
        }
      </div>
    </section>
  )
}

export default AllTab