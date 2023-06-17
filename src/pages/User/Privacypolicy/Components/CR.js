import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { Link } from "@mui/material";

const CR = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  const [faqData, setFaqData] = useState([false, false, false]);

  const handleFaqData = (index) => {
    const newData = [...faqData];
    newData[index] = !newData[index];
    setFaqData(newData);
  };

  return (
    <section className="faqTab">
      <div className="landingPage__dentaltInsurance__container__details">
        {/* <h1 className='landingPage__smartInsurance__container__details__heading'> Privacy Policy </h1> */}
        <h1 className="landingPage__smartInsurance__container__details__heading2">
          {" "}
          COOKIE POLICY{" "}
        </h1>
      </div>
      <div style={{ textAlign: "justify", width: "100%" }}>
        <p>
          <br />
          We use cookies to help improve your experience of our website at{" "}
          <Link style={{cursor:"pointer"}} to="https://cavitas.pl">https://cavitas.pl</Link>{" "}
          This cookie policy is part of Northern1 international insurance broker
          OÜ's privacy policy. It covers the use of cookies between your device
          and our app and site.
          <br />
          <br />
          We also provide basic information on third-party services we may use,
          who may also use cookies as part of their service. This policy does
          not cover their cookies.
          <br />
          <br />
          If you don’t wish to accept cookies from us, you should instruct your
          browser to refuse cookies from{" "}
          <Link  style={{cursor:"pointer"}}  to="https://cavitas.pl">https://cavitas.pl</Link> In such a
          case, we may be unable to provide you with some of your desired
          content and services.
          <br />
          <br />
          <h3>What is a cookie?</h3>
          A cookie is a small piece of data that a website stores on your device
          when you visit. It typically contains information about the website
          itself, a unique identifier that allows the site to recognise your web
          browser when you return, additional data that serves the cookie’s
          purpose, and the lifespan of the cookie itself.
          <br /> <br />
          Cookies are used to enable certain features (eg logging in), track
          site usage (eg analytics), store your user settings (eg time zone,
          notification preferences), and to personalise your content (eg
          advertising, language).
          <br /> <br />
          Cookies set by the website you are visiting are usually referred to as
          first-party cookies. They typically only track your activity on that
          particular site.
          <br /> <br />
          Cookies set by other sites and companies (i.e. third parties) are
          called third-party cookies They can be used to track you on other
          websites that use the same third-party service.
          <br /> <br />
          <h3> Types of cookies and how we use them </h3>
          <h3> Essential cookies</h3>
          Essential cookies are crucial to your experience of a website,
          enabling core features like user logins, account management, shopping
          carts, and payment processing.
          <br />
          We use essential cookies to enable certain functions on our website.
          <br /> <br />
          <h3> Performance cookies</h3>
          Performance cookies track how you use a website during your visit.
          Typically, this information is anonymous and aggregated, with
          information tracked across all site users. They help companies
          understand visitor usage patterns, identify and diagnose problems or
          errors their users may encounter, and make better strategic decisions
          in improving their audience’s overall website experience. These
          cookies may be set by the website you’re visiting (first-party) or by
          third-party services. They do not collect personal information about
          you.
          <br />
          We use performance cookies on our site.
          <br /> <br />
          <h3>Functionality cookies</h3>
          Functionality cookies are used to collect information about your
          device and any settings you may configure on the website you’re
          visiting (like language and time zone settings). With this
          information, websites can provide you with customised, enhanced, or
          optimised content and services. These cookies may be set by the
          website you’re visiting (first-party) or by third-party services.
          <br />
          We use functionality cookies for selected features on our site.
          <br /> <br />
          <h3> Targeting/advertising cookies</h3>
          Targeting/advertising cookies help determine what promotional content
          is most relevant and appropriate to you and your interests. Websites
          may use them to deliver targeted advertising or limit the number of
          times you see an advertisement. This helps companies improve the
          effectiveness of their campaigns and the quality of content presented
          to you. These cookies may be set by the website you’re visiting
          (first-party) or by third-party services. Targeting/advertising
          cookies set by third-parties may be used to track you on other
          websites that use the same third-party service.
          <br />
          We do not use this type of cookie on our site.
          <br />
          <br />
          <i>This policy is effective as of 5 June 2023</i>
          <br />
          <h4> Last updated:</h4> 5 June 2023
        </p>
      </div>
    </section>
  );
};

export default CR;
