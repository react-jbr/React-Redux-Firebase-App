import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import ProjectDetails from "./components/projects/ProjectDetails";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} exact />
          <Route path='/project/:id' element={<ProjectDetails />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
