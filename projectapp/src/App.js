import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import CreateProject from "./components/projects/CreateProject";
import ProjectDetails from "./components/projects/ProjectDetails";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} exact />
          <Route path='/project/:id' element={<ProjectDetails />} exact />
          <Route path='/signin' element={<SignIn />} exact />
          <Route path='/signup' element={<SignUp />} exact />
          <Route path='/create' element={<CreateProject />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
