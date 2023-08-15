import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";

const CP = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);

  return (
    <section className="faqTab">
      <div className="landingPage__dentaltInsurance__container__details">
        {/* <h1 className='landingPage__smartInsurance__container__details__heading'> Privacy Policy </h1> */}
        <h1
          className="landingPage__smartInsurance__container__details__heading2"
          style={{ fontSize: "40px", fontWeight: 600 }}
        >
          COMPLAINTS PROCEDURE
        </h1>
      </div>
      <div
        style={{
          textAlign: "justify",
          width: "100%",
          fontSize: "16px",
          fontWeight: 400,
        }}
      >
        <p>
          <br />
          <h3 style={{ fontSize: "16px", fontWeight: 500 }}>Introduction</h3>
          {/* <Link style={{cursor:"pointer"}} to="https://cavitas.pl">https://cavitas.pl</Link>{" "} */}
          This Procedure for reviewing and settling complaints establishes the
          procedural mechanisms and terms for submitting and reviewing
          complaints submitted by Client or it’s Representative. In addition,
          this Procedure for reviewing and settling Complaints provides
          information about the possibility of recourse to the competent
          national authorities in case of disagreements.
          <br />
          <br />
          <h3 style={{ fontSize: "16px", fontWeight: 500 }}>1. Definitions</h3>
          1.1. Client – a policyholder, who has entered into an insurance
          contract through an Broker and who wants to file a complaint against
          the activities of the Broker him/herself or via his/her
          Representative.
          <br />
          1.2. Representative - a person who, on the basis of an authorization
          issued by the policyholder, submits a Complaint on behalf of the
          Client.
          <br />
          1.3. Broker - is Cavitas dental insurance OÜ (registry code 16501780),
          which is entered into the list of insurance brokers of the Estonian
          Financial Supervision and Resolution Authority (www.fi.ee) and who
          engages, for a remuneration and based on a brokerage contract, in
          insurance distribution.
          <br />
          1.4. Complaint – a written or in a format which can be reproduced in
          writing complaint submitted by the Client or his/her Representative
          with regarding to the activities of a Broker, the insurance product,
          insurance contract mediated by the Broker or the insured event.
          <br />
          1.5. Procedure – this procedure for reviewing and settling Complaints.
          <br />
          <br />
          <h3 style={{ fontSize: "16px", fontWeight: 500 }}>
            2. Submission and acceptance of complaints{" "}
          </h3>
          2.1. The Broker shall make the contact information available to the
          Client on the website{" "}
          <Link style={{ cursor: "pointer" }} to="https://cavitas.pl">
            https://cavitas.pl
          </Link>{" "}
          managed by the Broker, through which the Client can contact the Broker
          and communicate with the Broker for the purpose of resolving the
          Complaint.
          <br />
          2.2.The Client or his/her Representative may submit a Complaint in any
          form by sending Complaint to the Broker’s email address
          kontakt@cavitas.pl or submitting a form via the internet-based
          platform, which is available on the website{" "}
          <Link style={{ cursor: "pointer" }} to="https://cavitas.pl">
            https://cavitas.pl
          </Link>{" "}
          managed by the Broker.
          <br />
          2.3. The Complaint submitted in writing or in a format which can be
          reproduced in writing must contain at least following data:
          <div style={{ marginLeft: "10px" }}>
            <br /> 2.3.1. The Client’s or his/her Representative’s name and
            personal identification code; registry code in case of a legal
            person;
            <br /> 2.3.2. The Client’s or his/her Representative’s contact
            information, at least telephone number and email address;
            <br /> 2.3.3. A description of the facts on which the Complaint is
            based and a list of evidence (with the evidence), verifying the
            facts on which the Complaint is based;
            <br /> 2.3.4. A claim that has been clearly expressed by the Client
            or his/her Representative, i.e. a claim that requires the Insurance
            Brokers to carry out or abstain from any acts/transactions by which
            the Client his/her Representative considers the Complaint to be
            satisfied.
          </div>
          <br /> 2.4.In a situation where the Complaint is filed by a person who
          does not have a direct contractual relationship with the Broker (e.g.
          beneficiary or insured person), the Broker establishes his/her
          identity, by being entitled to request an identity document and
          consent for the processing of personal data.
          <br />
          2.5.In a situation where the Complaint is filed through a
          Representative, a document certifying the right of representation
          (authorisation document) should be submitted to the Broker.
          <br />
          2.6. The Broker shall immediately confirm to Client or his/her
          representative the receipt of the Complaint.
          <br />
          2.7. If the Complaint is rejected, the Broker shall immediately
          communicate the reasons for not accepting (i.e. rejecting) the
          Complaint.
          <br /> <br />
          <h3 style={{ fontSize: "16px", fontWeight: 500 }}>
            3. Terms for processing a complaint and requirements for the
            Broker’s reply{" "}
          </h3>
          3.1.The Broker shall settle the Complaint as soon as possible, no
          later than within 15 days of filing the Complaint. The term for
          processing the Compliant starts on the working day following the
          filing of the Complaint (regardless of whether the Insurance Broker
          has informed the Client or his/her Representative about the acceptance
          of the Complaint).
          <br />
          3.2. The Broker may extend the term for settling the Complaint as
          established in clause 3.1 of the Procedure. In such a case, the
          Insurance Broker shall inform the Client or his/her Representative in
          a format that can be reproduced in writing, stating the reasons for
          the extension of the procedure and the latest term for settling the
          Complaint.
          <br />
          3.3.After settling the Complaint, the Broker shall provide the Client
          or his/her Representative with a reply that includes at least the
          following:
          <div style={{ marginLeft: "10px" }}>
            <br /> 3.3.1. The name and contact details of the person who has
            filed the Complaint;
            <br />
            3.3.2. The date of receipt of the Complaint;
            <br />
            3.3.3. The acts carried out to settle the Complaint (inquires,
            etc.);
            <br />
            3.3.4. The motivation for approving (including partial approval) and
            rejecting the claim included in the Complaint.
          </div>
          <br /> 3.4. The reply to the Complaint is signed by the Broker and
          sent to the post box address or email address of the person who has
          filed the Complaint.
          <br /> 3.5. If the Broker does not consider the Complaint to be
          justified and refuses to satisfy the Complaint or agrees only to the
          partial satisfaction of the Complaint, the Broker is obliged to
          justify the complete or partial rejection of the Complaint of the
          Client or his/her Representative in writing or in a form that can be
          reproduced in writing.
          <br /> <br />
          <h3 style={{ fontSize: "16px", fontWeight: 500 }}>
            4. Out of court complaint procedure{" "}
          </h3>
          4.1. In a situation where the Broker rejects the Complaint or does not
          settle the Complaint in the manner requested by the Client or his/her
          Representative, the latter has the right contact the following
          authorities, depending on the nature of the Complaint and its claim:
          <br />
          <strong>
            Financial Ombudsman, Al. Jerozolimskie 87, 02-001 Warsaw
          </strong>
          <br />
          <strong>Phone:</strong> (0-22) 333 73 26, (0-22) 333 73 27, (0-22) 333
          73 28
          <br />
          <strong>Fax:</strong> (0-22) 333 73 29, E-mail: biuro@rf.gov.pl
          <br />
          <br />
          <h3 style={{ fontSize: "16px", fontWeight: 500 }}>
            5. Online resolution of the complaint{" "}
          </h3>
          5.1. Complaints and disputes relating to contractual obligations
          arising from contracts for the sale of goods, the provision of
          services or other performance of services online may be settled
          through the online dispute resolution platform in accordance with
          Regulation (EU) No 524/2013 of the European Parliament and of the
          Council.
          <br />
          5.2. The functions of the Internet-based Complaint and Dispute
          Resolution Contact Point are performed by the European Union Consumer
          Advice Center operating at the Consumer Protection and Technical
          Surveillance Authority (https://consumer.ee/).
          <br />
          <br />
          <h3 style={{ fontSize: "16px", fontWeight: 500 }}>
            6. Saving and analysing complaints{" "}
          </h3>
          6.1 The Broker shall ensure that Complaint materials are preserved in
          a written or reproducible form and in such a manner as to permit
          access to the Complaint resolution materials and compilation of
          Complaint statistics, if necessary.
          <br />
          6.2 The Complaint materials must be retained until the expiration of
          the period of validity of the claims arising from the contracts and
          relationships between the Client and the Broker, but for not less than
          three years.
          <br />
          6.3 Once a year, the Broker shall conduct an analysis of the
          Complaints submitted to the Broker during the preceding calendar year.
          <br />
          6.4 Based on the Complaints analysis, the Broker shall conduct a
          systemic risk assessment of the Broker's activities, identify key
          issues in the provision of Broker services, and assess legal risks,
          and arrange for any changes to problematic business processes as
          necessary.
          <br />
          <br />
          <i>This policy is effective as of 1 June 2022</i>
          <br />
          <h4> Last updated:</h4> 5 June 2023
        </p>
      </div>
    </section>
  );
};

export default CP;
