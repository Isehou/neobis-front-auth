import React from "react";
import MainImg from "../../assets/lorby-img.png";
import { IoChevronBackCircle } from "react-icons/io5";
import LoginInputForm from "../../components/form-inputs/login-input/LoginInputForm";

import "../pages-setting.css";
import "./login-page.css";

function LoginPage() {
  return (
    <div className="pages-wrapper">
      <div className="main-img__container">
        <img className="main-img" src={MainImg} alt="" />
      </div>

      <div className="right-part__container login-page__container">
        <div className="login-page__content">
          <div className="back-btn-container">
            <IoChevronBackCircle />
            <button>Назад</button>
          </div>
          <div>
            <h1 className="title">Создать аккаунт</h1>
            <h1 className="title">Lorby</h1>
          </div>
          <LoginInputForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
