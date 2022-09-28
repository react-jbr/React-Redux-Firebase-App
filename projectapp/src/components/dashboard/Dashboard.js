import React, { useEffect } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux' ;
import { useNavigate } from "react-router-dom";
const Dashboard = (props) => {
  //const projects = useSelector((state) => state.project);
  let navigate = useNavigate();
const {projects,auth}=props;
useEffect(() => {
  // if(!auth.uid) return navigate('/signin')
}, [])

if(!auth.uid) return navigate('/signin')
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
   
  return {
    // projects:state.project.projects,
    projects:state.firestore.ordered.projects,   
    auth: state.firebase.auth,
  }
}
//export default connect(mapStateToProps)(Dashboard);

export default compose(connect(mapStateToProps),firestoreConnect([{collection:'projects'}]))(Dashboard);
