import { connect } from "react-redux";

import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { useLocation } from "react-router-dom";

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    var secs = project.createdAt.seconds;
    let date = new Date(secs * 1000).toLocaleString();

    return (
      <div className="container section project-details">
        Details
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.id}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{date} </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Project..............................</p>
      </div>
    );
  }

  // const id1= props.match.params.id;
};

const withLocation = (Component) => (props) => {
  const location = useLocation();
  return <Component {...props} location={location} />;
};

const mapStateToProps = (state, ownProps) => {
  // <Link to={'/project/'+project.id} state={{id:project.id}} key={index}>    //projectList.js    App.js <Route path='/project/:id'
  const id = ownProps.location.state.id;
  const projects = state.firestore.data.projects;

  const project = projects ? projects[id] : null;

  return {
    project: project,
    //projects:state.firestore.ordered.projects
  };
};

export default withLocation(
  compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "projects" }])
  )(ProjectDetails)
);
