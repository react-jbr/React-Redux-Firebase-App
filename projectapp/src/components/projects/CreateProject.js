import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { useNavigate } from "react-router-dom";
// const initialState ={
//     email:'',password:''
//   }

function CreateProject(props) {
  const [state, setState] = useState({ title: "", content: "" });
  const {auth} =props;
  let navigate = useNavigate();
  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitData(state);
  };
useEffect(() => {
        if(!auth.uid) return navigate('/signin')
}, [auth])
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create new project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder=""
            onChange={handleChange}
          ></input>
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            cols="30"
            rows="10"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitData: (projectState) => dispatch(createProject(projectState)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
