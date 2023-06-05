import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

const PPT = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const [faqData, setFaqData] = useState([false, false, false, false]);

  const handleFaqData = (index) => {
    const newData = [...faqData];
    newData[index] = !newData[index];
    setFaqData(newData);
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, []);
  return (
    <section className="faqTab">
      <div className="landingPage__dentaltInsurance__container__details">
        <h1 className="landingPage__smartInsurance__container__details__heading2">
          {" "}
          PRIVACY POLICY
        </h1>
        <h3 className="landingPage__dentaltInsurance__container__details__desc">
          Introduction{" "}
        </h3>
      </div>
      <div style={{ textAlign: "justify", width: "100%" }}>
        <p>
          <br />
          Your privacy is important to us. It is Northern1 international
          insurance broker OÜ's (“we”, “us” and “our”) privacy policy (“policy”)
          to respect your (“you”, “your”) privacy and comply with any applicable
          law and regulation regarding any personal information we may collect
          about you, including via our dental insurance dedicated Cavitas mobile
          application (“app”), website www.Cavitas.pl, and its associated
          services.
          <br />
          <br />
          Personal information is any information about you which can be used to
          identify you. This information may include you as a person (such as
          name, address, identity number, date of birth, email address, contact
          number, username and password), your devices, payment details, and
          even information about how you use an app or online service.
          <br />
          <br />
          In the event our app contains links to third-party sites and services,
          please be aware that those sites and services have their own privacy
          policies. After following a link to any third-party content, you
          should read their posted privacy policy information about how they
          collect and use personal information. This policy does not apply to
          any of your activities after you leave our app.
          <br />
          <br />
          <h3> Information We Collect</h3>
          Information we collect falls into one of two categories: 'voluntarily
          provided' information and 'automatically collected' information.
          <br /> <br />
          'Voluntarily provided' information refers to any information you
          knowingly and actively provide us when using our app and its
          associated services.
          <br /> <br />
          'Automatically collected' information refers to any information
          automatically sent by your device in the course of accessing our app
          and its associated services.
          <br /> <br />
          <h3>Collection and Use of Information </h3>
          <p>
            {" "}
            We may collect personal information from you when you do any of the
            following on our website:
          </p>
          <br /> ● Use a mobile device or web browser to access our content{" "}
          <br /> ● Contact us via ticketing system, email, social media, or on
          any similar technologies <br /> ● When you mention us on social media
          <br />
          <br />
          We may combine voluntarily provided and automatically collected
          personal information with general information or research data we
          receive from other trusted sources. For example, If you consent to us
          accessing your social media profiles, we may combine information
          sourced from those profiles with information received from you
          directly to provide you with an enhanced experience of our app and
          services.
          <br /> <br />
          <h3> Security of Your Personal Information</h3>
          When we collect and process personal information, and while we retain
          this information, we will protect it within commercially acceptable
          means to prevent loss and theft, as well as unauthorised access,
          disclosure, copying, use or modification.
          <br /> <br />
          Although we will do our best to protect the personal information you
          provide to us, we advise that no method of electronic transmission or
          storage is 100% secure and no one can guarantee absolute data
          security.
          <br /> <br />
          You are responsible for selecting any password and its overall
          security strength, ensuring the security of your own information
          within the bounds of our services. For example, ensuring you do not
          make your personal information publicly available via our platform.
          <br /> <br />
          <h3> How Long We Keep Your Personal Information</h3>
          We keep your personal information only for as long as we need to. This
          time period may depend on what we are using your information for, in
          accordance with this policy. For example, if you have provided us with
          personal information such as an email address when contacting us about
          a specific enquiry, we may retain this information for the duration of
          your enquiry remaining open as well as for our own records so we may
          effectively address similar enquiries in future. If your personal
          information is no longer required for this purpose, we will delete it
          or make it anonymous by removing all details that identify you.
          <br /> <br />
          However, if necessary, we may retain your personal information for our
          compliance with a legal, accounting, or reporting obligation or for
          archiving purposes in the public interest, scientific, or historical
          research purposes or statistical purposes.
          <br /> <br />
          <h3> Your Rights and Controlling Your Personal Information</h3>
          <span style={{ fontWeight: "bold" }}> Your choice: </span> By
          providing personal information to us, you understand we will collect,
          hold, use, and disclose your personal information in accordance with
          this privacy policy. You do not have to provide personal information
          to us, however, if you do not, it may affect your use of our app or
          the products and/or services offered on or through it.
          <br /> <br />
          <span style={{ fontWeight: "bold" }}>
            {" "}
            Information from third parties:{" "}
          </span>
          If we receive personal information about you from a third party, we
          will protect it as set out in this privacy policy. If you are a third
          party providing personal information about somebody else, you
          represent and warrant that you have such person’s consent to provide
          the personal information to us.
          <br /> <br />
          <span style={{ fontWeight: "bold" }}> Marketing permission: </span>
          If you have previously agreed to us using your personal information
          for direct marketing purposes, you may change your mind at any time by
          contacting us using the details below.
          <br /> <br />
          <span style={{ fontWeight: "bold" }}> Access: </span>
          You may request details of the personal information that we hold about
          you.
          <br /> <br />
          <span style={{ fontWeight: "bold" }}> Correction: </span>
          If you believe that any information we hold about you is inaccurate,
          out of date, incomplete, irrelevant, or misleading, please contact us
          using the details provided in this privacy policy. We will take
          reasonable steps to correct any information found to be inaccurate,
          incomplete, misleading, or out of date.
          <br /> <br />
          <span style={{ fontWeight: "bold" }}> Non-discrimination: </span>
          We will not discriminate against you for exercising any of your rights
          over your personal information. Unless your personal information is
          required to provide you with a particular service or offer (for
          example serving particular content to your device), we will not deny
          you goods or services and/or charge you different prices or rates for
          goods or services, including through granting discounts or other
          benefits, or imposing penalties, or provide you with a different level
          or quality of goods or services.
          <br /> <br />
          <span style={{ fontWeight: "bold" }}>
            {" "}
            Downloading of personal Information:{" "}
          </span>
          We provide a means for you to download the personal information you
          have shared through our app. Please contact us for more information.
          <br /> <br />
          <span style={{ fontWeight: "bold" }}>
            {" "}
            Notification of data breaches:{" "}
          </span>
          We will comply with laws applicable to us in respect of any data
          breach.
          <br /> <br />
          <span style={{ fontWeight: "bold" }}> Complaints: </span>
          If you believe that we have breached a relevant data protection law
          and wish to make a complaint, please contact us using the details
          below and provide us with full details of the alleged breach. We will
          promptly investigate your complaint and respond to you, in writing,
          setting out the outcome of our investigation and the steps we will
          take to deal with your complaint. You also have the right to contact a
          regulatory body or data protection authority in relation to your
          complaint.
          <br /> <br />
          <span style={{ fontWeight: "bold" }}> Unsubscribe: </span>
          To unsubscribe from our email database or opt-out of communications
          (including marketing communications), please contact us using the
          details provided in this privacy policy, or opt-out using the opt-out
          facilities provided in the communication. We may need to request
          specific information from you to help us confirm your identity.
          <br /> <br />
          <h3> Use of Cookies</h3>
          Our privacy policy covers the use of cookies between your device and
          our servers. A cookie is a small piece of data that an app may store
          on your device, typically containing a unique identifier that allows
          the app servers to recognise your device when you use the app;
          information about your account, session and/or device; additional data
          that serves the purpose of the cookie; and any self-maintenance
          information about the cookie itself.
          <br /> <br />
          We use cookies to give your device access to core features of our app,
          to track app usage and performance on your device, to tailor your
          experience of our app based on your preferences, and to serve
          advertising to your device. Any communication of cookie data between
          your device and our servers occurs within a secure environment.
          <br /> Please refer to our{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            {" "}
            Cookie Policy
          </span>{" "}
          for more information.
          <br /> <br />
          <h3> Business Transfers</h3>
          If we or our assets are acquired, or in the unlikely event that we go
          out of business or enter bankruptcy, we would include data, including
          your personal information, among the assets transferred to any parties
          who acquire us. You acknowledge that such transfers may occur, and
          that any parties who acquire us may, to the extent permitted by
          applicable law, continue to use your personal information according to
          this policy, which they will be required to assume as it is the basis
          for any ownership or use rights we have over such information.
          <br /> <br />
          <h3> Limits of Our Policy</h3>
          Our app may link to external sites that are not operated by us. Please
          be aware that we have no control over the content and policies of
          those sites, and cannot accept responsibility or liability for their
          respective privacy practices.
          <br /> <br />
          <h3> Changes to This Policy</h3>
          Our privacy policy covers the use of cookies between your device and
          our servers. A cookie is a small piece of data that an app may store
          on your device, typically containing a unique identifier that allows
          the app servers to recognise your device when you use the app;
          information about your account, session and/or device; additional data
          that serves the purpose of the cookie; and any self-maintenance
          information about the cookie itself.
          <br /> <br />
          <h3> Use of Cookies</h3>
          At our discretion, we may change our privacy policy to reflect updates
          to our business processes, current acceptable practices, or
          legislative or regulatory changes. If we decide to change this privacy
          policy, we will post the changes here and on our website.
          <br /> <br />
          If required by law, we will get your permission or give you the
          opportunity to opt in to or opt out of, as applicable, any new uses of
          your personal information.
          <br /> <br />
          <h3>
            {" "}
            Additional Disclosures for General Data Protection Regulation (GDPR)
            Compliance (EU)
          </h3>
          <h3> Data Controller / Data Processor</h3>
          The GDPR distinguishes between organisations that process personal
          information for their own purposes (known as “data controllers”) and
          organizations that process personal information on behalf of other
          organizations (known as “data processors”). We, Northern1
          international insurance broker OÜ, are a data controller with respect
          to the personal information you provide to us.
          <br /> <br />
          <h3>Legal Bases for Processing Your Personal Information</h3>
          We will only collect and use your personal information when we have a
          legal right to do so. In which case, we will collect and use your
          personal information lawfully, fairly and in a transparent manner. If
          we seek your consent to process your personal information, and you are
          under 16 years of age, we will seek your parent or legal guardian’s
          consent to process your personal information for that specific
          purpose.
          <br /> <br />
          Our lawful bases depend on the services you use and how you use them.
          This means we only collect and use your information on the following
          grounds:
          <br /> <br />
          <h5>Consent From You</h5>
          Where you give us consent to collect and use your personal information
          for a specific purpose. You may withdraw your consent at any time
          using the facilities we provide; however this will not affect any use
          of your information that has already taken place. When you contact us,
          you may consent to your name and email address being used so we can
          respond to your enquiry. While you may request that we delete your
          contact details at any time, we cannot recall any email we have
          already sent. If you have any further enquiries about how to withdraw
          your consent, please feel free to enquire using the details provided
          in the Contact Us section of this privacy policy.
          <br /> <br />
          <h5>Performance of a Contract or Transaction</h5>
          Where you have entered into a contract or transaction with us, or in
          order to take preparatory steps prior to our entering into a contract
          or transaction with you. For example, we need technical information
          about your device in order to provide the essential features of our
          app.
          <br /> <br />
          <h5>Our Legitimate Interests</h5>
          Where we assess it is necessary for our legitimate interests, such as
          for us to provide, operate, improve and communicate our services. For
          example, we collect technical information about your device in order
          to improve and personalise your experience of our app. We consider our
          legitimate interests to include research and development,
          understanding our audience, marketing and promoting our services,
          measures taken to operate our services efficiently, marketing
          analysis, and measures taken to protect our legal rights and
          interests.
          <br /> <br />
          <h5> Compliance with Law</h5>
          In some cases, we may have a legal obligation to use or keep your
          personal information. Such cases may include (but are not limited to)
          court orders, criminal investigations, government requests, and
          regulatory obligations. If you have any further enquiries about how we
          retain personal information in order to comply with the law, please
          feel free to enquire using the details provided in the Contact Us
          section of this policy.
          <br /> <br />
          <h5>
            International Transfers Outside of the European Economic Area (EEA)
          </h5>
          We will ensure that any transfer of personal information from
          countries in the European Economic Area (EEA) to countries outside the
          EEA will be protected by appropriate safeguards, for example by using
          standard data protection clauses approved by the European Commission,
          or the use of binding corporate rules or other legally accepted means.
          <br /> <br />
          <h3> Your Rights and Controlling Your Personal Information</h3>
          <span style={{ fontWeight: "bold" }}> Restrict: </span>
          You have the right to request that we restrict the processing of your
          personal information if (i) you are concerned about the accuracy of
          your personal information; (ii) you believe your personal information
          has been unlawfully processed; (iii) you need us to maintain the
          personal information solely for the purpose of a legal claim; or (iv)
          we are in the process of considering your objection in relation to
          processing on the basis of legitimate interests.
          <br /> <br />
          <span style={{ fontWeight: "bold" }}> Objecting to processing:</span>
          You have the right to object to processing of your personal
          information that is based on our legitimate interests or public
          interest. If this is done, we must provide compelling legitimate
          grounds for the processing which overrides your interests, rights, and
          freedoms, in order to proceed with the processing of your personal
          information.
          <br /> <br />
          <span style={{ fontWeight: "bold" }}> Data portability: </span>
          You may have the right to request a copy of the personal information
          we hold about you. Where possible, we will provide this information in
          CSV format or other easily readable machine format. You may also have
          the right to request that we transfer this personal information to a
          third party.
          <br /> <br />
          <span style={{ fontWeight: "bold" }}>Deletion: </span>
          You may have a right to request that we delete the personal
          information we hold about you at any time, and we will take reasonable
          steps to delete your personal information from our current records. If
          you ask us to delete your personal information, we will let you know
          how the deletion affects your use of our app, website or products and
          services. There may be exceptions to this right for specific legal
          reasons which, if applicable, we will set out for you in response to
          your request. If you terminate or delete your account, we will delete
          your personal information within 5 working days of the deletion of
          your account. Please be aware that search engines and similar third
          parties may still retain copies of your personal information that has
          been made public at least once, like certain profile information and
          public comments, even after you have deleted the information from our
          services or deactivated your account.
          <br /> <br />
          <h3> Contact Us</h3>
          For any questions or concerns regarding your privacy, you may contact
          us using the following details:
          <br />
          Cavitas dental insurance <br />
          kontakt@cavitas.pl
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

export default PPT;
