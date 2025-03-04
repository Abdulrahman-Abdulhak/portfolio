import ProjectCard from "./ProjectCard";
import project from "../../../../assets/test/project.png";
import project2 from "../../../../assets/test/project3.png";
import project3 from "../../../../assets/test/project4.png";
import project4 from "../../../../assets/test/project5.png";
import project5 from "../../../../assets/test/project2.png";

const dummyProjects = [
  {
    name: "Noon Application",
    description:
      "A smart birding app for species ID, map exploration, and an educational pocket guide.",
    imgSrc: project,
    job: "Rebuilding App",
    skills: ["React", "Next"],
  },
  {
    name: "string",
    description: "string",
    imgSrc: project2,
    job: "string",
    skills: ["React", "Next"],
  },
  {
    name: "string",
    description: "string",
    imgSrc: project3,
    job: "string",
    skills: ["React", "Next"],
  },
  {
    name: "string",
    description: "string",
    imgSrc: project4,
    job: "string",
    skills: ["React", "Next"],
  },
  {
    name: "string",
    description: "string",
    imgSrc: project5,
    job: "string",
    skills: ["React", "Next"],
  },
];

function MainProjects() {
  return (
    <main className="py-20 px-14 flex flex-col items-center gap-20">
      {dummyProjects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </main>
  );
}

export default MainProjects;
