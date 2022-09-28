import { connect, useSelector } from "react-redux";

import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
// import { useEffect } from "react";
// import { isLoaded } from "react-redux-firebase";


const ProjectDetails = (props) => {
  const auth1 = useSelector((state) => state.firebase.auth);
  let navigate = useNavigate();
  if (auth1.uid) console.log("1222222222222222222222", auth1);
  // useEffect(() => {
  //   if(!auth.uid) return navigate('/signin')
  // }, [])

  console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", props);
  console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeee", props.auth);
  // const project = projects ? props.projects[id] : null;

  const { id } = useParams();

  const { auth } = props;

  const project = props.projects ? props.projects[id] : null;

  // useEffect(() => {}, []);
  //   if (!isLoaded(auth)) {
  // console.log("///////////////",isLoaded(auth));
  //   }
  // if (auth.isLoaded) {
  //   return  navigate('/signin')
  //   //return (<SignIn />);
  // }
  if (auth1.uid) {
    if (!auth.uid) {
      return navigate("/signin");
    } else if (project) {
      var secs = project.createdAt.seconds;
      let date = new Date(secs * 1000).toLocaleString();
      //  if(!auth.uid) return navigate('./signin')
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
  } else {
    // return <SignIn />;
    //  return <>...................logout</>;
    return navigate("/signin")
  }
};

const withLocation = (Component) => (props) => {
  const location = useLocation();
  console.log(
    "location...............................................................",
    location
  );
  return <Component {...props} location={location} />;
};

const mapStateToProps = (state, ownProps) => {
  // <Link to={'/project/'+project.id} state={{id:project.id}} key={index}>    //projectList.js    App.js <Route path='/project/:id'
  console.log("ssssssssssssssssss", state);
  console.log("ooooooooooooooooo", ownProps);

  if (ownProps.location.state) {
    const projects = state.firestore.data.projects;

    return {
      projects: projects,
      auth: state.firebase.auth,

      //projects:state.firestore.ordered.projects
    };
  }
  // } else {
  //   return { project: null,
  //     auth: state.firebase.auth,};
  // }
};

export default withLocation(
  compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "projects" }])
  )(ProjectDetails)
);
