import { Section } from "./MainLayout";
import Slider from "./Slider";

const items = [
  {
    title: "intup",
    description: "Intup is a speed game developed on 2021",
    imgUrl: "/test-tw/intup.png",
    url: "https://intup.vercel.app/",
  },
  {
    title: "intup2",
    description: "Intup is a speed game developed on 2021",
    imgUrl: "/test-tw/intup.png",
    url: "https://intup.vercel.app/",
  },
  {
    title: "intup3",
    description: "Intup is a speed game developed on 2021",
    imgUrl: "/test-tw/intup.png",
    url: "https://intup.vercel.app/",
  },
  {
    title: "intup4",
    description: "Intup is a speed game developed on 2021",
    imgUrl: "/test-tw/intup.png",
    url: "https://intup.vercel.app/",
  },
  {
    title: "intup5",
    description: "Intup is a speed game developed on 2021",
    imgUrl: "/test-tw/intup.png",
    url: "https://intup.vercel.app/",
  },
  {
    title: "intup6",
    description: "Intup is a speed game developed on 2021",
    imgUrl: "/test-tw/intup.png",
    url: "https://intup.vercel.app/",
  },
];
const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-slate-400">
      <Section title="Projects">
        <Slider items={items}></Slider>
      </Section>
    </div>
  );
};

export default Projects;
