import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import SignUpPage from "./pages/sign-up-page/SignUpPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
