import React from "react";
import "./style.css";
import { DotSeparatedList } from "../../../../shared";

type Props = {
  name: string;
  description: string;
  imgSrc: string;
  job: string;
  skills: string[];
};

const ProjectCard: React.FC<Props> = ({
  name,
  description,
  imgSrc,
  job,
  skills,
}) => {
  return (
    <div className="project-card">
      <figure className="w-[50rem]">
        <div className="w-full h-96 flex items-center justify-center border border-black rounded-3xl overflow-hidden">
          <img
            src={imgSrc}
            alt={name}
            className="w-[110%] object-cover object-center"
          />
        </div>
        <figcaption className="grid grid-cols-2 mt-12">
          <h3 className="text-h3 capitalize">{name}</h3>
          <DotSeparatedList
            items={skills}
            className="text-2xl capitalize"
            keyGenerator={(skill) => name + job + skill}
          />
          <h4 className="self-end text-h4 text-[#8C8B8B] capitalize">{name}</h4>
          <p className="self-end text-content-sm tracking-[0.0625rem] text-[#525252]">
            {description}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default ProjectCard;
