import React, { useState } from "react";
import { useFormik } from "formik";
import { FaEye } from "react-icons/fa"; // eye-icon active
import { FaEyeSlash } from "react-icons/fa"; // eye-icon hidden

function LoginInputForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Введите адрес почты"
        />
      </div>
      <div>
        <input
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="Придумай логин"
        />
      </div>

      <div className="login__password-input">
        <input type="password" placeholder="Создай пароль" />
        <button
          className="pass-button"
          type="button"
          onClick={handleShowPassword}
        >
          {showPassword ? (
            <FaEyeSlash className="pass-button__icon" />
          ) : (
            <FaEye className="pass-button__icon" />
          )}
        </button>
      </div>
      <ul className="input-forbidden">
        <li>От 8 до 15 символов</li>
        <li>Строчные и прописные буквы</li>
        <li>Минимум 1 цифра</li>
        <li>Минимум 1 спецсимвол (!, ", #, $...)</li>
      </ul>
      <div className="login__password-input">
        <input
          id="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Повтори пароль"
        />
        <button
          className="pass-button"
          type="button"
          onClick={handleShowConfirmPassword}
        >
          {showConfirmPassword ? (
            <FaEyeSlash className="pass-button__icon" />
          ) : (
            <FaEye className="pass-button__icon" />
          )}
        </button>
      </div>
      <button
        className="login-after__btn"
        disabled={formik.isSubmitting}
        type="submit"
      >
        Далее
      </button>
    </form>
  );
}

export default LoginInputForm;
