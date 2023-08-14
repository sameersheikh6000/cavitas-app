import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../config/helpers/i18n";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Page from "../Page/Page";
const Blog = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  return (
    <Page>
      <section className="faq">
        <header>
          <h1>{t("Blog.Blog_title")}</h1>{" "}
        </header>
      </section>
      <br />
      <div className="landingPage__valuableReadings ">
        <header className="landingPage__valuableReadings__header">
          <Link to="/Blog" style={{ color: "red", textDecoration: "none" }}>
            <p>{t("Blog.Blog_heading")}</p>
          </Link>
        </header>
        <div className="landingPage__valuableReadings__container">
        <div className="landingPage__valuableReadings__container__cardsBox">
          <div className="landingPage__valuableReadings__container__cardsBox__card">
            <div
              className="landingPage__valuableReadings__container__cardsBox__card"
              onClick={() => navigate(`/Blog1/${lang === "pl" ? lang : "en"}`)}
            >
              {/* <img src={require("../../../../assets/ValuableReading-image.png")} alt='' /> */}
              <p className="landingPage__valuableReadings__container__cardsBox__card__name">
                {t("Blog.Blog1_title")}
              </p>
              <span className="landingPage__valuableReadings__container__cardsBox__card__date">
              {t("Blog.Blog_date")}
              </span>
              <p className="landingPage__valuableReadings__container__cardsBox__card__desc">
                {t("Blog.Blog1_desc")}
                &nbsp;{" "}
                <Link to={`/Blog1/${lang === "pl" ? lang : "en"}`} style={{ color: "red" }}>
                  {" "}
                  {t("home.readmore")}
                </Link>
              </p>
            </div>
          </div>



          <div className="landingPage__valuableReadings__container__cardsBox__card">
            <div
              className="landingPage__valuableReadings__container__cardsBox__card"
              onClick={() => navigate(`/Blog3/${lang === "pl" ? lang : "en"}`)}
            >
              {/* <img src={require("../../../../assets/ValuableReading-image-1.png")} alt='' /> */}
              <p className="landingPage__valuableReadings__container__cardsBox__card__name">
                {t("Blog.Blog2_title")}
              </p>
              <span className="landingPage__valuableReadings__container__cardsBox__card__date">
              {t("Blog.Blog_date")}
              </span>
              <p className="landingPage__valuableReadings__container__cardsBox__card__desc">
                {t("Blog.Blog2_desc")}&nbsp;{" "}
                <Link  to={`/Blog2/${lang === "pl" ? lang : "en"}`}
                 style={{ color: "red" }}>
                  {" "}
                  {t("home.readmore")}
                </Link>
              </p>
            </div>
          </div>

          <div className="landingPage__valuableReadings__container__cardsBox__card">
            <div
              className="landingPage__valuableReadings__container__cardsBox__card"
              onClick={() => navigate(`/Blog3/${lang === "pl" ? lang : "en"}`)}
            >
              {/* <img src={require("../../../../assets/ValuableReading-image-2.png")} alt='' /> */}
              <p className="landingPage__valuableReadings__container__cardsBox__card__name">
                {t("Blog.Blog3_title")}
              </p>
              <span className="landingPage__valuableReadings__container__cardsBox__card__date">
              {t("Blog.Blog_date")}
              </span>
              <p className="landingPage__valuableReadings__container__cardsBox__card__desc">
                {t("Blog.Blog3_desc")} &nbsp;{" "}
                <Link  to={`/Blog3/${lang === "pl" ? lang : "en"}`}
                style={{ color: "red" }}>
                  {" "}
                  {t("home.readmore")}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Page>
  );
};

export default Blog;
