

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore=getFirestore();
    firestore.collection('projects').add({
        ...project,
        authorFirstName :'Jb',
        authorLastName :"M K",
        authorId:12345,
        createdAt:new Date()
    }).then(()=>{
        dispatch({ type: "CREATE_PROJECT", project: project });
    })
   .catch((err)=>{
    dispatch({ type: "CREATE_PROJECT_ERROR", err });
   })
  };
};
