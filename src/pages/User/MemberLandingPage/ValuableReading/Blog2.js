import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import { useLocation } from "react-router-dom";
import Page from "../../../../components/Page/Page";

const Blog2 = () => {
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
      <section className="valuableReadingView" id="blog2_header">
        <header>
          <h1>{t("Blog.Blog2_title")}</h1>
          <p> {t("Blog.Blog_date")}</p>
        </header>
        <br />
        <div
          className="valuableReadingView__container"
          style={{ textAlign: "justify" }}
        >
          <p>
            <br />
            {t("Blog.Blog2_part1")}
            <br /> <br />
            <h3> {t("Blog.Blog2_part2_heading")}</h3>
            {t("Blog.Blog2_part3")}
            <br /> <br />
            <h3> {t("Blog.Blog2_part4_heading")}</h3>
            {t("Blog.Blog2_part5")}
            <br /> <br />
            <h3> {t("Blog.Blog2_part6_heading")} </h3>
            {t("Blog.Blog2_part7")}
            <br /> <br />
            <h3> {t("Blog.Blog2_part8_heading")}</h3>
            {t("Blog.Blog2_part9")}
            <br /> <br />
            <h2> {t("Blog.Blog2_part10_heading")} </h2>
            <h3> {t("Blog.Blog2_part11")}</h3>
            {t("Blog.Blog2_part12")}
            <br /> <br />
            <h3> {t("Blog.Blog2_part13")}</h3>
            {t("Blog.Blog2_part14")}
            <br /> <br />
            <h3> {t("Blog.Blog2_part15")}</h3>
            {t("Blog.Blog2_part16")}
            <br /> <br />
            <h3> {t("Blog.Blog2_part17")}</h3>
            {t("Blog.Blog2_part18")}
            <br /> <br />
            <h3> {t("Blog.Blog2_part19")}</h3>
            {t("Blog.Blog2_part20")}
            <br /> <br />
            {t("Blog.Blog2_part21")}
          </p>
        </div>
      </section>
    </Page>
  );
};

export default Blog2;
