import React from "react";
import MainImg from "../../assets/lorby-img.png";
import LoginInputForm from "../../components/form-inputs/login-inputs/LoginInputForm";

import "../pages-setting.css";
import "./login-page.css";

function LoginPage() {
  return (
    <div className="pages-wrapper">
      <div className="main-img__container">
        <img className="main-img" src={MainImg} alt="" />
      </div>

      <div className="right-part__container">
        <div className="login-page__content">
          <h1 className="title">Вэлком бэк!</h1>
          <LoginInputForm></LoginInputForm>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
