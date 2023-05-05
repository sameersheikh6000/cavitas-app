import React from "react";

import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

const ValuableReadings = () => {
  const navigate = useNavigate();
  return (
  //   <section className="landingPage__valuableReadings">
  //   <header className="landingPage__valuableReadings__header">
  //     <h1>Valuable Reading</h1>
  //     {/* <p>Recent blog posts</p> */}
  //     <p>Cavitas blog</p>
  //   </header>
  //   <div className="landingPage__valuableReadings__container">
  //     <div className="landingPage__valuableReadings__container__cardsBox">
  //       <div className="landingPage__valuableReadings__container__cardsBox__card">
  //       <div
  //         className="landingPage__valuableReadings__container__cardsBox__card"
  //         onClick={() => navigate("/Blog1")}
  //       >
  //         {/* <img src={require("../../../../assets/ValuableReading-image.png")} alt='' /> */}
  //         <p className="landingPage__valuableReadings__container__cardsBox__card__name">
  //           Importance of dental insurance
  //         </p>
  //         <span className="landingPage__valuableReadings__container__cardsBox__card__date">
  //           by Cavitas | April 3, 2023
  //         </span>
  //         <p className="landingPage__valuableReadings__container__cardsBox__card__desc">
  //           Maintaining good dental health is an important aspect of overall
  //           health and well-being. However, dental care can be expensive, and
  //           many people may avoid seeking care due to cost concerns. That's
  //           where dental insurance comes in. Dental insurance is a type of
  //           insurance that provides coverage for dental treatments and
  //           services, helping to reduce the out-of-pocket cost for individuals
  //           and families.
  //           <div className='landingPage__smartInsurance__container__details__buttons ' >
  //           <Link to="/Blog1">
  //           <Button variant='outlined'>Read More</Button>
  //         </Link>
  //         </div>
  //         </p>
  //         </div>
  //       </div>
  //       <div className="landingPage__valuableReadings__container__cardsBox__card">
  //       <div
  //         className="landingPage__valuableReadings__container__cardsBox__card"
  //         onClick={() => navigate("/Blog2")}
  //       >
  //         {/* <img src={require("../../../../assets/ValuableReading-image-1.png")} alt='' /> */}
  //         <p className="landingPage__valuableReadings__container__cardsBox__card__name">
  //           Good teeth care matters!
  //         </p>
  //         <span className="landingPage__valuableReadings__container__cardsBox__card__date">
  //           by Cavitas | April 3, 2023
  //         </span>
  //         <p className="landingPage__valuableReadings__container__cardsBox__card__desc">
  //           Taking care of your teeth is essential for maintaining good oral
  //           hygiene and overall health. Neglecting dental health can lead to a
  //           variety of problems, ranging from bad breath and tooth decay to
  //           gum disease and tooth loss. In this blog post, we'll discuss why
  //           it's important to take care of your teeth and how you can do it.
  //           <div className='landingPage__smartInsurance__container__details__buttons ' >
  //           <Link to="/Blog2">
  //           <Button variant='outlined'>Read More</Button>
  //         </Link>
  //         </div>
  //         </p>
  //         </div>
  //       </div>
  //       <div className="landingPage__valuableReadings__container__cardsBox__card">
  //       <div
  //         className="landingPage__valuableReadings__container__cardsBox__card"
  //         onClick={() => navigate("/Blog3")}
  //       >
  //         {/* <img src={require("../../../../assets/ValuableReading-image-2.png")} alt='' /> */}
  //         <p className="landingPage__valuableReadings__container__cardsBox__card__name">
  //           Why is it a good investment to offer dental insurance to
  //           employees?
  //         </p>
  //         <span className="landingPage__valuableReadings__container__cardsBox__card__date">
  //           by Cavitas | April 3, 2023
  //         </span>
  //         <p className="landingPage__valuableReadings__container__cardsBox__card__desc">
  //           Dental insurance is a type of insurance that helps employees pay
  //           for dental care, such as regular check-ups, cleanings, fillings,
  //           and other procedures. Here are some reasons why employers should
  //           consider providing dental insurance to their employees as part of
  //           their benefits package.
  //           <div className='landingPage__smartInsurance__container__details__buttons ' >
  //           <Link to="/Blog3">
  //           <Button variant='outlined'>Read More</Button>
  //         </Link>
  //         </div>
  //         </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  <section className="landingPage__valuableReadings">
  <header className="landingPage__valuableReadings__header">
    <h1>Valuable Reading</h1>
    {/* <p>Recent blog posts</p> */}
    <p>Cavitas blog</p>
  </header>
  <div className="landingPage__valuableReadings__container">
    <div className="landingPage__valuableReadings__container__cardsBox">
      <div className="landingPage__valuableReadings__container__cardsBox__card">
        <div
          className="landingPage__valuableReadings__container__cardsBox__card"
          onClick={() => navigate("/Blog1")}
        >
          {/* <img src={require("../../../../assets/ValuableReading-image.png")} alt='' /> */}
          <p className="landingPage__valuableReadings__container__cardsBox__card__name">
            Importance of dental insurance
          </p>
          <span className="landingPage__valuableReadings__container__cardsBox__card__date">
            by Cavitas | April 3, 2023
          </span>
          <p className="landingPage__valuableReadings__container__cardsBox__card__desc">
            Maintaining good dental health is an important aspect of overall
            health and well-being. However, dental care can be expensive,
            and many people may avoid seeking care due to cost concerns.
            That's where dental insurance comes in. Dental insurance is a
            type of insurance that provides coverage &nbsp;{" "}
            <Link to="/Blog1" style={{ color: "red" }}>
              {" "}
              Read More
            </Link>
            {/* <div className='landingPage__smartInsurance__container__details__buttons ' >
          <Link to="/Blog1">
          <Button variant='outlined'>Read More</Button>
        </Link>
        </div> */}
          </p>
        </div>
      </div>
      <div className="landingPage__valuableReadings__container__cardsBox__card">
        <div
          className="landingPage__valuableReadings__container__cardsBox__card"
          onClick={() => navigate("/Blog2")}
        >
          {/* <img src={require("../../../../assets/ValuableReading-image-1.png")} alt='' /> */}
          <p className="landingPage__valuableReadings__container__cardsBox__card__name">
            Good teeth care matters!
          </p>
          <span className="landingPage__valuableReadings__container__cardsBox__card__date">
            by Cavitas | April 3, 2023
          </span>
          <p className="landingPage__valuableReadings__container__cardsBox__card__desc">
            Taking care of your teeth is essential for maintaining good oral
            hygiene and overall health. Neglecting dental health can lead to
            a variety of problems, ranging from bad breath and tooth decay
            to gum disease and tooth loss. In this blog post, we'll discuss
            why it's important to take care of your teeth and how you can do it.&nbsp;{" "}
            <Link to="/Blog2" style={{ color: "red" }}>
              {" "}
              Read More
            </Link>
            {/* <div className="landingPage__smartInsurance__container__details__buttons ">
              <Link to="/Blog2">
                <Button variant="outlined">Read More</Button>
              </Link>
            </div> */}
          </p>
        </div> 
      </div>
      <div className="landingPage__valuableReadings__container__cardsBox__card">
        <div
          className="landingPage__valuableReadings__container__cardsBox__card"
          onClick={() => navigate("/Blog3")}
        >
          {/* <img src={require("../../../../assets/ValuableReading-image-2.png")} alt='' /> */}
          <p className="landingPage__valuableReadings__container__cardsBox__card__name">
            Why is it a good investment to offer dental insurance to
            employees?
          </p>
          <span className="landingPage__valuableReadings__container__cardsBox__card__date">
            by Cavitas | April 3, 2023
          </span>
          <p className="landingPage__valuableReadings__container__cardsBox__card__desc">
            Dental insurance is a type of insurance that helps employees pay
            for dental care, such as regular check-ups, cleanings, fillings,
            and other procedures. Here are some reasons why employers should
            consider providing &nbsp;{" "}
            <Link to="/Blog3" style={{ color: "red" }}>
              {" "}
              Read More
            </Link>
            {/* <div className="landingPage__smartInsurance__container__details__buttons ">
              <Link to="/Blog3">
                <Button variant="outlined">Read More</Button>
              </Link>
            </div> */}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default ValuableReadings;
