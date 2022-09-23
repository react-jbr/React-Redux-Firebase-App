import React from "react";
import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      List
      {projects &&
        projects.map((project,index) => {
         return(
          // <Link to={'/project/'+project.id} key={index}>
          <Link to={'/project/'+project.id} state={{id:project.id}} key={index}>
          <ProjectSummary project={project} key={project.id}  />
          </Link>
         )
        })}
    </div>
  );
};

export default ProjectList;
