import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project,index) => {
         return(
          <ProjectSummary project={project} key={index} />
         )
        })}
    </div>
  );
};

export default ProjectList;
