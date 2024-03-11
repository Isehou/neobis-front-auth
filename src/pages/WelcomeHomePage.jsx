import React from "react";
import MainImg from "../assets/lorby-img.png";

function WelcomeHomePage() {
  return (
    <div>
      <div>
        <h1>С возвращением!</h1>
        <div className="main-img__container">
          <img className="main-img" src={MainImg} alt="" />
        </div>
        <button>Выйти</button>
      </div>
    </div>
  );
}

export default WelcomeHomePage;
