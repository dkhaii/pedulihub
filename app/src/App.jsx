import React from "react";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import DashboardUser from "./components/Pages/DashboardUser";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/user-dashboard" element={<DashboardUser/>}/>
    </Routes>
  );
}

export default App;
