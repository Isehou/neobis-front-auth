import React from "react";
import { useNavigate } from "react-router-dom";
import MainImg from "../../assets/lorby-img.png";
import { IoChevronBackCircle } from "react-icons/io5";
import RegistrationInputForm from "../../components/form-inputs/registration-inputs/RegistrationInputForm";

import "../pages-setting.css";
import "./registration-page.css";

function RegistrationPage() {
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
              <IoChevronBackCircle />
              Назад
            </button>
          </div>
          <div>
            <h1 className="title">Создать аккаунт</h1>
            <h1 className="title">Lorby</h1>
          </div>
          <RegistrationInputForm />
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
