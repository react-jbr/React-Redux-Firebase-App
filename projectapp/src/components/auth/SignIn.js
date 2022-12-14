import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";
function SignIn(props) {
  const [state, setState] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleChange = (e) => {
    setState((state)=>({ ...state, [e.target.id]: e.target.value }));
  };

  useEffect(()=>{
    const handleChange = (e) => {
        setState((state)=>({ ...state, [e.target.id]: e.target.value }));
      };
    
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(state.email);
    props.signInData(state);
  };
  const { authError,auth } = props;
  console.log("lllllllllllll",auth);
  useEffect(() => {
    if(auth.uid) return navigate('/')
  }, [])
  if(auth.uid) return navigate('/')
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
          <div className="red-text center">
            {authError ? <p> {authError} </p> : null}
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInData: (creds) => dispatch(signIn(creds)),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
