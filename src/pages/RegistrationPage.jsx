import React from "react";
import MainImg from "../assets/lorby-img.png";
import "./pages-setting.css";

function RegistrationPage() {
  return (
    <div>
      <div className="main-img__container">
        <img className="main-img" src={MainImg} alt="" />
      </div>
      <div className="right-part__container">
        <h1>Вэлком бэк!</h1>
        <input type="text" placeholder="Введите туда-сюда логин" />
        <div class="registration__password-input">
          <input type="registration__password" placeholder="Создай пароль" />
          <button type="button">👁️</button>
        </div>

        <button>Войти</button>
      </div>
    </div>
  );
}

export default RegistrationPage;
