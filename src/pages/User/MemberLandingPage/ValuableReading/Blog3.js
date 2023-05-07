import React from "react";
import { useLocation } from "react-router-dom";
import Page from "../../../../components/Page/Page";

const Blog3 = () => {
  const location = useLocation();
  let splittedLoc = location.pathname.split("/");
  let id = splittedLoc[splittedLoc.length - 1];
  console.log(id);
  return (
    <Page>
      <section className="valuableReadingView">
        <header>
          <h1>
            Why is it a good investment to offer dental insurance to employees?
          </h1>
          <p>by Cavitas |  May 20, 2023</p>
        </header>
        <div
          className="valuableReadingView__container"
          style={{ textAlign: "justify" }}
        >
          <p>
            <br />
            Dental insurance is a type of insurance that helps employees pay for
            dental care, such as regular check-ups, cleanings, fillings, and
            other procedures. Here are some reasons why employers should
            consider providing dental insurance to their employees as part of
            their benefits package.
            <br /> <br />
            <h3>1. Improves Employee Health and Well-being</h3>
            Dental problems can lead to serious health issues if left untreated.
            For example, gum disease has been linked to heart disease, stroke,
            and other health problems. By providing dental insurance, employers
            can help their employees maintain good oral health, which can
            improve their overall health and well-being.
            <br /> <br />
            <h3>2. Increases Employee Satisfaction and Retention</h3>
            Providing dental insurance can also increase employee satisfaction
            and retention. When employees have access to dental insurance, they
            are more likely to visit the dentist regularly, which can help
            prevent dental problems from becoming more serious and expensive to
            treat. Additionally, employees who have dental insurance are less
            likely to leave their jobs in search of better benefits.
            <br /> <br />
            <h3>3. Attracts Top Talent </h3>
            Offering dental insurance as part of a benefits package can also
            help attract top talent. In today's competitive job market,
            employees are looking for more than just a good salary. They want
            comprehensive benefits packages that include things like health and
            dental insurance. By providing dental insurance, employers can
            differentiate themselves from other companies and attract top
            talent.
            <br /> <br />
            <h3>4. Cost-effective for Employers</h3>
            Employers may be hesitant to offer dental insurance because they
            assume it will be too expensive. However, dental insurance can be
            cost-effective for employers in the long run. Regular dental care
            can help prevent more serious and costly dental problems down the
            road. Additionally, dental insurance premiums are tax-deductible for
            employers, which can help offset the cost.
            <br /> <br />
            <h3>5. Boosts Employee Morale</h3>Providing dental insurance can
            also boost employee morale. When employees feel valued and supported
            by their employer, they are more likely to be satisfied with their
            job and perform better. Additionally, dental insurance can help
            employees feel more financially secure, which can reduce stress and
            anxiety.
            <br /> <br />
            In conclusion, providing dental insurance as part of a benefits
            package can have many benefits for employers and employees alike. It
            can improve employee health and well-being, increase employee
            satisfaction and retention, attract top talent, be cost-effective
            for employers, and boost employee morale. If you're an employer,
            consider adding dental insurance to your benefits package to help
            support your employees' overall health and well-being.
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
