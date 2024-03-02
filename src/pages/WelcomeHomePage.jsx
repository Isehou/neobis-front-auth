import React from "react";
import MainImg from "../assets/lorby-img.png";

function WelcomeHomePage() {
  return (
    <div>
      <div>
        <h1>С возвращением!</h1>
        <img className="main-img" src={MainImg} alt="" />
        <button>Выйти</button>
      </div>
    </div>
  );
}

export default WelcomeHomePage;
