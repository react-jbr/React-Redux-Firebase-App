import React from "react";

const ProjectSummary = ({ project }) => {
  var secs = project.createdAt.seconds;
  let date = new Date(secs * 1000).toLocaleString();

  return (
    
    <div className="card z-depth-0 project-summary">
      Summary
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p className="grey-text">{date}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
