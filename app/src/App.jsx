import React from "react";
import LandingPage from "./components/Pages/LandingPage";
import Login from "./components/Pages/Login";
import LoginFundraiser from "./components/Pages/LoginFundraiser";
import Register from "./components/Pages/Register";
import RegisterFundraiser from "./components/Pages/RegisterFundraiser";
import DashboardUser from "./components/Pages/DashboardUser";
import DashboardFundraiser from "./components/Pages/DashboardFundraiser";
import PostRaiseFund from "./components/Pages/PostRaiseFund";
import FundraiserDataRegister from "./components/Pages/FundraiserDataRegister";
import { Routes, Route } from "react-router-dom";
import DonationHistory from "./components/Pages/DonationHistory";
import News from "./components/Pages/News";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/berita" element={<News />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/fundraiser/login" element={<LoginFundraiser/>}/>
      <Route path="/fundraiser/register" element={<RegisterFundraiser/>}/>
      <Route path="/donasi/dashboard" element={<DashboardUser/>}/>
      <Route path="/fundraiser/dashboard" element={<DashboardFundraiser/>}/>
      <Route path="/fundraiser/post" element={<PostRaiseFund/>}/>
      <Route path="/fundraiser/register-data" element={<FundraiserDataRegister/>}/>
      <Route path="/fundraiser/history" element={<DonationHistory />} />
    </Routes>
  );
}

export default App;
