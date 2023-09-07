import { Section } from "./MainLayout";
import Slider from "./Slider";

const items = [
  {
    title: "Intup",
    description: "Intup is a speed game developed in 2021",
    imgUrl: "/test-tw/intup.png",
    technologies: ["react", "next", "js"],
    url: "https://intup.vercel.app/",
  },
  {
    title: "Personal portfolio",
    description: "This is a personal portfolio experiment.",
    technologies: ["react", "next", "js"],
    imgUrl: "/test-tw/personalportfolio.png",
    url: "https://personal-portfolio-panos.vercel.app/",
  },
  {
    title: "intup3",
    description: "Intup is a speed game developed on 2021",
    imgUrl: "/test-tw/intup.png",
    technologies: [""],
    url: "https://intup.vercel.app/",
  },
  {
    title: "intup4",
    description: "Intup is a speed game developed on 2021",
    imgUrl: "/test-tw/intup.png",
    technologies: [""],
    url: "https://intup.vercel.app/",
  },
  {
    title: "intup5",
    description: "Intup is a speed game developed on 2021",
    imgUrl: "/test-tw/intup.png",
    technologies: [""],
    url: "https://intup.vercel.app/",
  },
  {
    title: "intup6",
    description: "Intup is a speed game developed on 2021",
    imgUrl: "/test-tw/intup.png",
    technologies: [""],
    url: "https://intup.vercel.app/",
  },
];

const renderItems = () => {
  return items.map((i) => (
    <div
      key={i.title}
      className="max-w-fit px-4 py-2 rounded text-center min-w-[200px] md:min-w-[20%] flex flex-col gap-4 group/project"
    >
      <img
        src={i.imgUrl}
        className="m-auto rounded max-w-[200px] max-h-[200px]"
        draggable="false"
      />
      <h3 className="text-xl">{i.title}</h3>
      <div className="text-base group-hover/project:opacity-100 duration-300 opacity-80">
        {i.description}
      </div>
      <div className="flex justify-center">
        {i.technologies.map((t: string) => {
          return (
            <div className="relative group/tech" key={t}>
              <img
                key={t}
                src={`/test-tw/${t}.svg`}
                className="w-[24px] h-[24px]"
              />
              <div className="pointer-events-none absolute bg-slate-200 px-1 rounded -bottom-7 -left-2 w-max min-w-[40px] opacity-0 text-sm transition-opacity group-hover/tech:opacity-100">
                {t}
              </div>
            </div>
          );
        })}
      </div>
      <a
        href={i.url}
        target="_blank"
        className="text-black w-fit mx-auto py-1 px-3 font-medium my-2 flex items-center gap-1 hover:underline opacity-80 hover:opacity-100 duration-300"
      >
        <img src="/test-tw/link.svg" className="w-[18px]" />
        View
      </a>
    </div>
  ));
};
const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-slate-400">
      <Section title="Projects">
        <Slider> {renderItems()}</Slider>
      </Section>
    </div>
  );
};

export default Projects;
