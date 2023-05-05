import React, { useState } from 'react'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const EmployerTab = () => {
  const [faqData, setFaqData] = useState([false, false, false]);

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
          Q1: How us as company can get Cavitas dental insurance cover for our employees?            </p>
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
            A1: In order for the group insurance contract between the insurer and the company please declare your insurance interest to us (or to your other mandated broker).
            </p>
          </div>
        }
      </div>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
          <p>Q2: Is there a requirement for minimum amount of employees to conclude Cavitas dental insurance contract with insurer?

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
            <p>A2: Yes, please contact us and we'll share you the requirements.</p>
          </div>
        }
      </div>
      <div className='faqTab__container'>
        <div className='faqTab__container__box'>
          <p>
          Q3: How my employees would se serviced during policy period?
          </p>
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
            A3: All members (employee and family members) can download Cavitas dental insurance mobile application to have a quick access to policy information, submit quickly claims, get guidelines how to brush the teeth as well buy effective teeth care products. On website (www.cavitas.pl) all members can access to login-protected area to have a access to the same information. 
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

export default EmployerTab