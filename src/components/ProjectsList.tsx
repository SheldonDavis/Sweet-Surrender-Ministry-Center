//components
import Project from './Project';
import birthdayBlessingBox from '../assets/BirthdayBlessingBox.jpg';
import HopeBox from '../assets/HOPE_Box.jpg';
import MannaMonday from '../assets/MannaMonday.jpg';
import SecondChance from '../assets/SecondChance.jpg';

function ProjectsList() {
  const projectData = [
    {
      title: `Birthday Blessing Box`,
      image: birthdayBlessingBox,
      description: [
        `A birthday party in a cakebox is given to elementary school aged children who may not otherwise receive a celebration for their special day. Boxes include a cake mix, round pan, can of soda for cake mixture with recipe card, icing, candles, birthday card, crown, stickers, a bow, party favors, fun socks, age-appropriate STEM activity, and other small gifts. Boxes are distributed through the local school districts.`,
      ],
    },
    {
      title: `H.O.P.E. Box`,
      image: HopeBox,
      description: [
        `Boxes are available to individuals and families whether out of an emergency crisis or needs-based for: food staples, basic hygiene supplies, household cleaning products, necessary travel gas cards, or other circumstantial necessities.`,
      ],
    },
    {
      title: `Manna Monday`,
      image: MannaMonday,
      description: [
        `Beginning with one Monday per month, we offer a free lunch of sustenance to anyone whether by need of physical hunger, social hunger, or spiritual hunger. Packaged meal distribution takes place at a public community site or civic organization location until a permanent location is secured with a dine-in community space.`,
      ],
    },
    {
      title: `Second Chance`,
      image: SecondChance,
      description: [
        `A mentorship style program for individuals who have struggled on their own to overcome barriers and who present a true desire to change life patterns toward becoming productive members of their community. Mentors meet with the individual first to establish a goals plan followed by a yearlong schedule of progressive accountability meetings with Biblical application. Upon successful completion, individuals will have learned certain life skills and/or trades to have reached or be well established on their way to attain their original goals plan. `,
      ],
    },
  ];
  return (
    <section id={`ProjectList`}>
      <h1>Projects</h1>
      {projectData.map((project, i) => {
        return (
          <Project
            key={i}
            title={project.title}
            image={project.image}
            description={project.description}
            orientation={(i + 1) % 2 != 0}
          />
        );
      })}
      {/* <Project title={`testing`} image={`file path`} description={[`this`,`is`,`it`]} orientation={true} /> */}
    </section>
  );
}
export default ProjectsList;
