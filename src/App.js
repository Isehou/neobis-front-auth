import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import SignUpPage from "./pages/sign-up-page/SignUpPage";
import WelcomeHome from "./pages/sign-up-page/WelcomeHome";
import WelcomeBack from "./pages/login-page/WelcomeBack";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/welcome-home" element={<WelcomeHome />}></Route>
        <Route path="/welcome-back" element={<WelcomeBack />}></Route>
      </Routes>
    </div>
  );
}

export default App;
