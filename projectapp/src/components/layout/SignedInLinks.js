import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {

  return (
    <ul className="right">
        <li> <NavLink to='/create'>New Project </NavLink> </li>
        <li> <a onClick={props.signOutdata} >Log Out</a></li>
        <li> <NavLink to='/' className='btn btn-floating pink lighten-1'>Jbr </NavLink> </li>
    </ul>
  )
}


const mapDispatchToProps =(dispatch) =>{
  return {
    signOutdata: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)