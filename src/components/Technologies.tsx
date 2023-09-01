import { Section } from "./MainLayout";

const technologies = [
  {
    name: "Javascript",
    icon: "js",
  },
  {
    name: "React",
    icon: "react",
  },
  {
    name: "HTML5",
    icon: "html",
  },
  {
    name: "Typescript",
    icon: "ts",
  },
  {
    name: "Nextjs",
    icon: "next",
  },
  {
    name: "CSS3",
    icon: "css",
  },
];

const renderTechnologies = () =>
  technologies.map((t) => {
    return (
      <div
        key={t.name}
        className="rounded p-2 bg-orange-200 min-w-[30%] flex items-center"
      >
        <div className="flex flex-row items-center gap-2 cursor-default">
          <img src={`/test-tw/${t.icon}.svg`}></img>
          <h3 className="text-lg">{t.name}</h3>
        </div>
      </div>
    );
  });

const Technologies = () => {
  return (
    <Section title="Tech Stack">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 auto-rows-fr">
        {renderTechnologies()}
      </div>
    </Section>
  );
};

export default Technologies;
