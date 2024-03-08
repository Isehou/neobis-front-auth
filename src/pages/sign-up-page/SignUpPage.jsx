import React from "react";
import { useNavigate } from "react-router-dom";
import MainImg from "../../assets/lorby-img.png";
import { IoChevronBackCircle } from "react-icons/io5";
import SignUpInputForm from "../../components/form-inputs/sign-up-inputs/SignUpInputForm";

import "../pages-setting.css";
import "./sign-up-page.css";

function SignUpPage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="pages-wrapper">
      <div className="main-img__container">
        <img className="main-img" src={MainImg} alt="" />
      </div>

      <div className="right-part__container registration-page__container">
        <div className="registration-page__content">
          <div className="back-btn-container">
            <button onClick={goBack}>
              <IoChevronBackCircle className="back-btn__icon" />
              Назад
            </button>
          </div>
          <div>
            <h1 className="title">Создать аккаунт</h1>
            <h1 className="title">Lorby</h1>
          </div>
          <SignUpInputForm />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
