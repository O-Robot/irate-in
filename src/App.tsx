import React from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
