import React from "react";
import MainImg from "../../assets/lorby-img.png";
import { IoChevronBackCircle } from "react-icons/io5";
import { FaEye } from "react-icons/fa"; // eye-icon active
import { FaEyeSlash } from "react-icons/fa"; // eye-icon hidden
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
          <div>
            <input type="text" placeholder="Введите адрес почты" />
          </div>
          <div>
            <input type="text" placeholder="Придумай логин" />
          </div>
          <div class="login__password-input">
            <input type="password" placeholder="Создай пароль" />
            <button className="pass-button" type="button">
              <FaEye className="pass-button__icon" />
            </button>
          </div>
          <ul className="input-forbidden">
            <li>От 8 до 15 символов</li>
            <li>Строчные и прописные буквы</li>
            <li>Минимум 1 цифра</li>
            <li>Минимум 1 спецсимвол (!, ", #, $...)</li>
          </ul>
          <div class="login__password-input">
            <input type="password" placeholder="Повтори пароль" />
            <button className="pass-button" type="button">
              <FaEye className="pass-button__icon" />
            </button>
          </div>

          <button className="login-after__btn">Далее</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
