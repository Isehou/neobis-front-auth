import React from "react";
import MainImg from "../../assets/lorby-img.png";
import { Link } from "react-router-dom";
import "../pages-setting.css";

function WelcomeHome() {
  return (
    <div className="welcome-wrapper">
      <div className="title-text">
        <h1>Добро пожаловать!</h1>
      </div>
      <div className="main-img__container">
        <img className="main-img" src={MainImg} alt="" />
      </div>
      <Link to="/">
        <button className="welcome__exit-btn">Выйти</button>
      </Link>
    </div>
  );
}

export default WelcomeHome;
