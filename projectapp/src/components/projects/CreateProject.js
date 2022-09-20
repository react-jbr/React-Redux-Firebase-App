import React, { useState } from 'react'
// const initialState ={
//     email:'',password:''
//   }
  
function CreateProject() {

    const [state, setState] = useState({  title:'',content:''})
    
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
        <h5 className="grey-text text-darken-3">Create new project</h5>
        <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" placeholder="" onChange={handleChange}></input>
        </div>
        <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" cols="30" rows="10" className="materialize-textarea"  onChange={handleChange}></textarea>
        </div>
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
    </form>
   </div>
  )
}

export default CreateProject