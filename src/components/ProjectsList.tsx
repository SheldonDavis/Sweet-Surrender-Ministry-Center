//components
import Project from './Project';
import birthdayBlessingBox from '../assets/BirthdayBlessingBox.jpg';
import HopeBox from '../assets/HOPE_Box.jpg';
import MannaMonday from '../assets/MannaMonday.jpg';
import SecondChance from '../assets/SecondChance.jpg';

function ProjectsList() {
  const currentProjects = [
    {
      id: `1`,
      title: `Birthday Blessing Box`,
      image: birthdayBlessingBox,
      description: [`A birthday party pack for elementary school aged children who may not otherwise receive a celebration for their special day.`],
      readMore: [
        `Boxes include a cake mix, round pan, can of soda for cake mixture with recipe card, icing, candles, birthday card, crown, stickers, a bow, party favors, fun socks, age-appropriate STEM activity, and other small gifts.`,
      ],
      wishlist: [
        {
          btnTxt: `Birthday Blessing Box wishlist`,
          url: `https://a.co/5Ltw1jp`,
        },
      ],
    },
    {
      id: `2`,
      title: `H.O.P.E. Box`,
      image: HopeBox,
      description: [
        `Boxes are available whether out of an emergency crisis or needs-based for: food staples, basic hygiene supplies, household cleaning products, necessary travel gas cards, or other circumstantial necessities.`,
      ],
      readMore: [],
      wishlist: [
        {
          btnTxt: `HOPE Box Gift Cards wishlist`,
          url: `https://a.co/e1Qig3c`,
        },
        {
          btnTxt: `HOPE Box Hygiene wishlist`,
          url: `https://a.co/2iS4mBY`,
        },
        {
          btnTxt: `HOPE Box Food wishlist`,
          url: `https://a.co/8S7iWFv`,
        },
        {
          btnTxt: `HOPE Box Household wishlist`,
          url: `https://a.co/9GY9fIq`,
        },
      ],
    },
  ];
  const futureProjects = [
    {
      id: `3`,
      title: `Manna Monday`,
      image: MannaMonday,
      description: [`A free meal of sustenance offered whether by need of physical hunger, social hunger, or spiritual hunger.`],
      readMore: [],
      wishlist: [
        {
          btnTxt: `Manna Monday wishlist`,
          url: `https://a.co/gVtqG2N`,
        },
      ],
    },
    {
      id: `4`,
      title: `Second Chance`,
      image: SecondChance,
      description: [
        `A mentorship program for those who have struggled on their own to overcome barriers and who present a true desire to change life patterns toward becoming productive members of their community.`,
      ],
      readMore: [
        `Mentors meet with the individual first to establish a goals plan followed by a yearlong schedule of progressive accountability meetings with Biblical application. Upon successful completion, individuals will have learned certain life skills and/or trades to have reached or be well established on their way to attain their original goals plan.`,
      ],
      wishlist: [
        {
          btnTxt: `Second Chance wishlist`,
          url: `https://a.co/fCqzmus`,
        },
      ],
    },
  ];
  return (
    <>
      <section id={`ProjectList`}>
        <h1>Projects</h1>

        <div className={`separator`}>
          <span></span>
        </div>

        <h2>Current Projects</h2>
        {currentProjects.map((project, i) => {
          return (
            <Project
              key={i}
              id={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              readMore={project.readMore}
              wishlist={project?.wishlist}
              orientation={(i + 1) % 2 != 0}
            />
          );
        })}

        <div className={`separator`}>
          <span></span>
        </div>

        <h2>Future Projects</h2>
        {futureProjects.map((project, i) => {
          return (
            <Project
              key={i}
              id={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              readMore={project.readMore}
              wishlist={project?.wishlist}
              orientation={(i + 1) % 2 != 0}
            />
          );
        })}
      </section>
      <section id={`ExpandingOpportunities`} className={`coloredBG light`}>
        <h2>Expanding Opportunities</h2>
        <p>
          Some of the envisioned growth for the future location of SSMC are: Loads of Love laundry assistance, Community Garden space, Transitional
          Housing in connection with the Second Chance program, and meeting space available to outside human service programs such as AA, Celebrate
          Recovery, Stephen Ministries, Grief Share, or other programs of the like.
        </p>
      </section>
    </>
  );
}
export default ProjectsList;
