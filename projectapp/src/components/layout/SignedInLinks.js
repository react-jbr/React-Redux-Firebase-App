import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
console.log("signedInprops",props.state.firebase.auth.email);

  return (
    <ul className="right">
        <li> <NavLink to='/create'>New Project </NavLink> </li>
        <li> <a onClick={props.signOutdata} >Log Out</a></li>
        <li> <NavLink to='/' className='btn btn-floating pink lighten-1'> {props.state.firebase.auth.email}</NavLink> </li>
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps =(dispatch) =>{
  return {
    signOutdata: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks)