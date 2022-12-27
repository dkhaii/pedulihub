import React from "react";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
