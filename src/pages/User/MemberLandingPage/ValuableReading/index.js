import React from 'react'
import { useLocation } from 'react-router-dom';
import Page from '../../../../components/Page/Page';

const ValuableReadingView = () => {
  const location = useLocation();
  let splittedLoc = location.pathname.split("/");
  let id = splittedLoc[splittedLoc.length - 1]
  console.log(id);
  return (
    <Page>
      <section className='valuableReadingView'>
        <header>
          <h1>Sed do eiusmod tempor elit magna aliqua.</h1>
          <p>by cavitas | Dec 5, 2022 | All topics, For Brokers, For Employers, For Members</p>
        </header>
        <div className='valuableReadingView__container'>
          <div className='valuableReadingView__container__imageBox'>
            {id == 1 ?
              <img src={require("../../../../assets/ValuableReading-image.png")} alt='' />
              :
              <></>
            }
            {id == 2 ?
              <img src={require("../../../../assets/ValuableReading-image-1.png")} alt='' />
              :
              <></>
            }
            {id == 3 ?
              <img src={require("../../../../assets/ValuableReading-image-2.png")} alt='' />
              :
              <></>
            }
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur neadipiscing elit, sed do eiusmod tempor dirincididunt magna liqua.</p>
        </div>
      </section>
    </Page>
  )
}

export default ValuableReadingView