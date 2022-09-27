import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "./authActions";

function SignIn(props) {
  const [state, setState] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   // console.log(state.email);
    props.signInData(state)
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="">Email</label>
          <input
            type="email"
            id="email"
            placeholder=""
            onChange={handleChange}
          ></input>
        </div>
        <div className="input-field">
          <label htmlFor="">Password</label>
          <input
            type="password"
            id="password"
            placeholder=""
            onChange={handleChange}
          ></input>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInData: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(null,mapDispatchToProps)(SignIn);
