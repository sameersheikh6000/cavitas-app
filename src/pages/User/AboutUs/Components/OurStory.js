import React from "react";
import { Link, useNavigate } from "react-router-dom";

const OurStory = () => {
  const navigate = useNavigate();

  return (
    <section className="aboutUs__ourStory">
      <div className="aboutUs__ourStory__container">
        <div className="aboutUs__ourStory__container__profilesBox">
          <div className="aboutUs__ourStory__container__profilesBox__left">
            <img
              className="aboutUs__ourStory__container__profilesBox__left__profileImage"
              src={require("../../../../assets/AboutCoFounder-2.png")}
              alt=""
            />
            <p className="aboutUs__ourStory__container__profilesBox__left__name">
              Signe Soonberg
            </p>
            <span className="aboutUs__ourStory__container__profilesBox__left__designation">
              Co-Founder
            </span>
            <div
              className="aboutUs__ourStory__container__profilesBox__left__linkedInIcon"
              style={{ cursor: "pointer" }}
            >
              <Link to="https://www.linkedin.com/in/ssoonberg/">
                <img
                  src={require("../../../../assets/LinkedIn-icon.png")}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="aboutUs__ourStory__container__profilesBox__right">
            <img
              className="aboutUs__ourStory__container__profilesBox__right__profileImage"
              src={require("../../../../assets/AboutCoFounder-1.png")}
              alt=""
            />
            <p className="aboutUs__ourStory__container__profilesBox__right__name">
              Jean Pierre <br /> Bredorf
            </p>
            <span className="aboutUs__ourStory__container__profilesBox__right__designation">
              Co-Founder
            </span>
            <div
              className="aboutUs__ourStory__container__profilesBox__right__linkedInIcon"
              style={{ cursor: "pointer" }}
            >
              <Link to="https://www.linkedin.com/in/lejpvb/">
                <img
                  src={require("../../../../assets/LinkedIn-icon.png")}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="aboutUs__ourStory__container__detailsBox">
          <h1>Our Story</h1>
          {/* <p className='aboutUs__ourStory__container__detailsBox__desc'>We started in 2018.....</p> */}
          <p className="aboutUs__ourStory__container__detailsBox__desc1">
            In 2018 we started mediating dental insurance contracts to people in
            Estonia where, like in other Estern-Europe countries, such insurance
            product offer was not existing. Now we are happy to provide dental
            insurance contracts to Poland under trading name Cavitas
          </p>
          <p className="aboutUs__ourStory__container__detailsBox__desc1">
            The goal of Cavitas - Smarter Dental Insurance is to help people
            maintain their natural teeth for a longer period of time—hopefully
            for the rest of their lives—while also providing dental insurance in
            a more intelligent way that focuses on prevention of teeth-related
            problems and also covering various dental treatment costs. It also
            makes all dental-related information accessible on smart mobile
            devises.
          </p>
          <p className="aboutUs__ourStory__container__detailsBox__desc2">
            Last but not least - we are getting even more smarter! Stay turned!{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
