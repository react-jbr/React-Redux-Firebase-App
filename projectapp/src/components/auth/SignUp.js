import React, { useState } from 'react'
const initialState ={
    firstName :'',lastName:'',email:'',password:''
  }
  
function SignUp() {

    const [state, setState] = useState(initialState )
    
const handleChange= (e) => {
setState({...state,[e.target.id]: e.target.value})

}

    
const handleSubmit= (e) => {
    e.preventDefault()
    console.log(state);
    
 }

  return (
   <div className="container">
    <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
            <label htmlFor="">Email</label>
            <input type="email" id="email" placeholder="" onChange={handleChange}></input>
        </div>
        <div className="input-field">
            <label htmlFor="">Password</label>
            <input type="password" id="password" placeholder="" onChange={handleChange}></input>
        </div>
        <div className="input-field">
            <label htmlFor="">First Name</label>
            <input type="text" id="firstName" placeholder="" onChange={handleChange}></input>
        </div>
        <div className="input-field">
            <label htmlFor="">Last Name</label>
            <input type="text" id="lastName" placeholder="" onChange={handleChange}></input>
        </div>
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
    </form>
   </div>
  )
}

export default SignUp