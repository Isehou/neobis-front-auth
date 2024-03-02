import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/registration" element={<RegistrationPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
