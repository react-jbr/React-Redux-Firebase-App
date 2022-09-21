import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'

// const initialState ={
//     email:'',password:''
//   }
  
function CreateProject(props) {

    const [state, setState] = useState({  title:'',content:''})
    
const handleChange= (e) => {
setState({...state,[e.target.id]: e.target.value})

}

    
const handleSubmit= (e) => {
    e.preventDefault()
    props.createProject(state)
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

const mapDispatchToProps = (dispatch) =>{
    return {
        createProject:(project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)