import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import { useLocation } from "react-router-dom";
import Page from "../../../../components/Page/Page";

const Blog3 = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  const location = useLocation();
  let splittedLoc = location.pathname.split("/");
  let id = splittedLoc[splittedLoc.length - 1];
  console.log(id);
  return (
    <Page>
      <section className="valuableReadingView">
        <header className="Blog3_header">
          <h1>{t("Blog.Blog3_title")}</h1>
          <p>by Cavitas | May 20, 2023</p>
        </header>
        <div
          className="valuableReadingView__container"
          style={{ textAlign: "justify" }}
        >
          <p>
            <br />
            {t("Blog.Blog3_part1")}
            <br /> <br />
            <h3> {t("Blog.Blog3_part2_heading")}</h3>
            {t("Blog.Blog3_part3")}
            <br /> <br />
            <h3> {t("Blog.Blog3_part4_heading")}</h3>
            {t("Blog.Blog3_part5")}
            <br /> <br />
            <h3> {t("Blog.Blog3_part6_heading")} </h3>
            {t("Blog.Blog3_part7")}
            <br /> <br />
            <h3> {t("Blog.Blog3_part8_heading")}</h3>
            {t("Blog.Blog3_part9")}
            <br /> <br />
            <h3> {t("Blog.Blog3_part10_heading")}</h3>
            {t("Blog.Blog3_part11")}
            <br /> <br />
            {t("Blog.Blog3_part12")}
          </p>
        </div>
      </section>
    </Page>
  );
};

export default Blog3;

// Extra code add due to some time we need to add this!
// <section className='valuableReadingView'>
// <header>
//   <h1>Sed do eiusmod tempor elit magna aliqua.</h1>
//   <p>by cavitas | Dec 5, 2022 | All topics, For Brokers, For Employers, For Members</p>
// </header>
// <div className='valuableReadingView__container'>
//   <div className='valuableReadingView__container__imageBox'>
//     {id === 1 ?
//       <img src={require("../../../../assets/ValuableReading-image.png")} alt='' />
//       :
//       <></>
//     }
//     {id === 2 ?
//       <img src={require("../../../../assets/ValuableReading-image-1.png")} alt='' />
//       :
//       <></>
//     }
//     {id === 3 ?
//       <img src={require("../../../../assets/ValuableReading-image-2.png")} alt='' />
//       :
//       <></>
//     }
//   </div>
//   <p>Lorem ipsum dolor sit amet, consectetur neadipiscing elit, sed do eiusmod tempor dirincididunt magna liqua.</p>
// </div>
// </section>
