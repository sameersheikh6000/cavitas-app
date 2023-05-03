import React from "react";
import { useLocation } from "react-router-dom";
import Page from "../../../../components/Page/Page";

const Blog1 = () => {
  const location = useLocation();
  let splittedLoc = location.pathname.split("/");
  let id = splittedLoc[splittedLoc.length - 1];
  console.log(id);
  return (
    <Page>
      <section className="valuableReadingView">
        <header>
          <h1>Importance of dental insurance</h1>
          <p>by Cavitas | April 3, 2023</p>
        </header>
        <div
          className="valuableReadingView__container"
          style={{ textAlign: "justify" }}
        >
          <p>
            <br />
            Maintaining good dental health is an important aspect of overall
            health and well-being. However, dental care can be expensive, and
            many people may avoid seeking care due to cost concerns. That's
            where dental insurance comes in. Dental insurance is a type of
            insurance that provides coverage for dental treatments and services,
            helping to reduce the out-of-pocket cost for individuals and
            families. In this blog post, we'll explore the importance of dental
            insurance and how it can benefit individuals and families.
            <br />
            <br />
            <h3> 1. Preventive care</h3>
            Dental insurance often covers preventive care, such as regular
            check-ups, cleanings, and X-rays. These services are essential for
            maintaining good dental health and detecting problems early, before
            they become more serious and costly to treat. By covering these
            preventive services, dental insurance encourages individuals to seek
            regular dental care and maintain good dental health.
            <br /> <br />
            <h3> 2. Lower out-of-pocket costs</h3>
            Dental treatments and services can be expensive, and without
            insurance, individuals may be reluctant to seek care due to cost
            concerns. Dental insurance can help reduce the out-of-pocket cost
            for individuals and families, making dental care more affordable and
            accessible. By providing coverage for dental treatments and
            services, dental insurance can help individuals and families save
            money on their dental care expenses.
            <br /> <br />
            <h3> 3. Comprehensive coverage </h3>
            Dental insurance provides coverage for a wide range of dental
            treatments and services, including fillings, crowns, root canals,
            and orthodontics. This comprehensive coverage ensures that
            individuals and families have access to the care they need,
            regardless of their dental health needs or financial situation. With
            dental insurance, individuals can receive the care they need to
            maintain good dental health and address dental problems as they
            arise.
            <br /> <br />
            <h3> 4. Peace of mind </h3>
            Dental problems can be stressful and disruptive, and without
            insurance, individuals may worry about the cost of dental care and
            how they will afford it. Dental insurance provides peace of mind,
            knowing that individuals and families have coverage for dental
            treatments and services when they need them. This peace of mind can
            reduce stress and anxiety, helping individuals and families maintain
            good mental health and well-being.
            <br /> <br />
            <h3> 5. Improved overall health </h3>
            Good dental health is essential for overall health and well-being.
            Poor dental health has been linked to a variety of health problems,
            including heart disease, diabetes, respiratory infections, and
            dementia. By providing coverage for dental treatments and services,
            dental insurance can help individuals maintain good dental health
            and reduce the risk of associated health problems.
            <br /> <br />
            In conclusion, dental insurance is an important investment in
            overall health and well-being. By providing coverage for preventive
            care, lowering out-of-pocket costs, offering comprehensive coverage,
            providing peace of mind, and improving overall health, dental
            insurance can benefit individuals and families in a variety of ways.
            If you're considering dental insurance, it's important to research
            your options and choose a plan that meets your needs and budget.
            With dental insurance, you can maintain good dental health and enjoy
            the many benefits of a healthy smile.
          </p>
        </div>
      </section>
    </Page>
  );
};

export default Blog1;

// Extra code add due to some time we need to add this!
// <section className='valuableReadingView'>
// <header>
//   <h1>Sed do eiusmod tempor elit magna aliqua.</h1>
//   <p>by cavitas | Dec 5, 2022 | All topics, For Brokers, For Employers, For Members</p>
// </header>
// <div className='valuableReadingView__container'>
//   <div className='valuableReadingView__container__imageBox'>
//     {id == 1 ?
//       <img src={require("../../../../assets/ValuableReading-image.png")} alt='' />
//       :
//       <></>
//     }
//     {id == 2 ?
//       <img src={require("../../../../assets/ValuableReading-image-1.png")} alt='' />
//       :
//       <></>
//     }
//     {id == 3 ?
//       <img src={require("../../../../assets/ValuableReading-image-2.png")} alt='' />
//       :
//       <></>
//     }
//   </div>
//   <p>Lorem ipsum dolor sit amet, consectetur neadipiscing elit, sed do eiusmod tempor dirincididunt magna liqua.</p>
// </div>
// </section>
