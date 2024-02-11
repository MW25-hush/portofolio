import React from "react";
import ProjectCard from "../molecules/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-20 text-[40px] font-semibold text-transparent">
        My Projects
      </h1>
      <div className="flex h-full w-full flex-col gap-10 px-10 md:flex-row">
        <ProjectCard
          src="/images/morasilat/morasilatCover.png"
          title="Morasilat"
          description="Official application for digital transmission of documents throughout
          the Kabul University."
        />
        <ProjectCard
          src="/images/electronic/electronic.png"
          title="Electronic.AF"
          description="Online store for electronic suppliances in Afghanistan"
        />
        <ProjectCard
          src="/images/movieDB/MovieDB.png"
          title="Movie Time Website"
          description="Explore Movies & Tv Shows"
        />
      </div>
    </div>
  );
};

export default Projects;
