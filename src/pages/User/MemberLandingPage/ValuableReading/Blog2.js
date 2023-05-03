import React from "react";
import { useLocation } from "react-router-dom";
import Page from "../../../../components/Page/Page";

const Blog2 = () => {
  const location = useLocation();
  let splittedLoc = location.pathname.split("/");
  let id = splittedLoc[splittedLoc.length - 1];
  console.log(id);
  return (
    <Page>
      <section className="valuableReadingView">
        <header>
          <h1>Good teeth care matters!</h1>
          <p>by Cavitas | April 3, 2023</p>
        </header>
        <div
          className="valuableReadingView__container"
          style={{ textAlign: "justify" }}
        >
          <p>
            <br />
            Taking care of your teeth is essential for maintaining good oral
            hygiene and overall health. Neglecting dental health can lead to a
            variety of problems, ranging from bad breath and tooth decay to gum
            disease and tooth loss. In this blog post, we'll discuss why it's
            important to take care of your teeth and how you can do it.
            <br /> <br />
            <h3>1. Prevention of dental problems:</h3>
            The primary benefit of taking care of your teeth is that it can
            prevent dental problems. Brushing and flossing regularly can help
            remove plaque, a sticky film of bacteria that forms on the teeth and
            causes tooth decay and gum disease. Additionally, regular dental
            check-ups can help identify any potential dental problems before
            they become severe. This can save you from the pain, expense, and
            time required to treat dental problems.
            <br /> <br />
            <h3> 2. Better overall health:</h3>
            Taking care of your teeth is not just good for your oral health but
            also for your overall health. Poor dental health has been linked to
            several health problems, including heart disease, stroke, diabetes,
            and respiratory disease. Research suggests that the bacteria that
            cause gum disease can enter the bloodstream and contribute to these
            health issues. Therefore, taking care of your teeth can reduce your
            risk of developing these conditions.
            <br /> <br />
            <h3>3. Improved self-esteem: </h3>
            Having healthy teeth can improve your self-esteem and confidence.
            When you have good dental health, you're more likely to smile and
            engage with others. On the other hand, poor dental health can lead
            to embarrassment, social isolation, and even depression.
            <br /> <br />
            <h3>4. Save money in the long run:</h3>
            Preventing dental problems can save you money in the long run. When
            you take care of your teeth, you can avoid expensive dental
            procedures, such as root canals, crowns, and dental implants.
            Additionally, regular dental check-ups can help detect dental issues
            before they become severe and require more costly treatments.
            <br /> <br />
            <h2> So, how can you take care of your teeth? </h2>
            <h3>1. Brush twice a day:</h3>
            Brushing your teeth twice a day is crucial for maintaining good
            dental health. Use a fluoride toothpaste and a soft-bristled
            toothbrush to brush your teeth gently in circular motions for two
            minutes each time.
            <br /> <br />
            <h3>2. Floss daily:</h3>
            Flossing is just as important as brushing for removing plaque and
            food particles from between your teeth. Use a piece of floss to
            clean between each tooth, being careful not to snap the floss
            against your gums.
            <br /> <br />
            <h3>3. Use mouthwash:</h3>
            Mouthwash can help kill bacteria and freshen your breath. Choose a
            mouthwash that contains fluoride to strengthen your teeth and
            prevent cavities.
            <br /> <br />
            <h3>4. Eat a healthy diet:</h3>
            Eating a healthy diet can help prevent tooth decay and gum disease.
            Limit sugary and acidic foods and drinks and choose foods that are
            rich in vitamins and minerals, such as fruits, vegetables, and dairy
            products.
            <br /> <br />
            <h3>5. Visit your dentist regularly:</h3>
            Regular dental check-ups are essential for maintaining good oral
            health. Your dentist can detect dental problems early and provide
            treatment before they become more severe.
            <br /> <br />
            In conclusion, taking care of your teeth is crucial for maintaining
            good oral hygiene, overall health, and self-esteem. By following a
            simple oral hygiene routine and visiting your dentist regularly, you
            can prevent dental problems, save money in the long run, and enjoy a
            healthier, happier life.
          </p>
        </div>
      </section>
    </Page>
  );
};

export default Blog2;

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
