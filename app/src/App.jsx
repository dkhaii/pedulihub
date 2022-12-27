import React from "react";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import DashboardUser from "./components/Pages/DashboardUser";
import DashboardFundraiser from "./components/Pages/DashboardFundraiser";
import PostRaiseFund from "./components/Pages/PostRaiseFund";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/user-dashboard" element={<DashboardUser/>}/>
      <Route path="/fundraiser-dashboard" element={<DashboardFundraiser/>}/>
      <Route path="/fundraiser/post" element={<PostRaiseFund/>}/>
    </Routes>
  );
}

export default App;
