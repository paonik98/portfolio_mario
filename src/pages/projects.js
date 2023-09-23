import React from "react";
import Navbar from "../components/Navbar";
import ProjectsBoard from "../components/ProjectsBoard";
import Project1 from "../components/Project1";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";

const Projects = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className=" bg-fixed bg-gradient-to-t from-[#7bdff2] to-[#f2b5d4]">
        <div className="flex flex-col">
          <Navbar />
          <ProjectsBoard />
          <Project1 />
          <Project2 />
          <Project3 />
        </div>
      </div>
    </div>
  );
};

export default Projects;
