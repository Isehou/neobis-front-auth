import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { validationSchema } from "../../../utils/validationSchema";
import { FaEye } from "react-icons/fa"; // eye-icon active
import { FaEyeSlash } from "react-icons/fa"; // eye-icon hidden

function LoginInputForm() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
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
      password: "",
    },
    validationSchema,
    onSubmit,
  });

  const isFormValid = () => {
    return (
      formik.values.email && !formik.errors.email && !formik.errors.password
    );
  };

  return (
    <div>
      <input
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="Введите туда-сюда логин"
      />
      {formik.errors.email ? (
        <div className="error-message">{formik.errors.email}</div>
      ) : null}
      <div className="login__password-input">
        <input
          name="password"
          id="password"
          type={showPassword ? "text" : "password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Создай пароль"
        />
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
        {formik.errors.password ? (
          <div className="error-message">{formik.errors.password}</div>
        ) : null}
      </div>
      <Link to="/welcome-back">
        <button
          className="login__enter-btn"
          disabled={!isFormValid() || formik.isSubmitting}
        >
          Войти
        </button>
      </Link>
      <Link to="/sign-up">
        <button className="no-account-btn">У меня нет аккаунта</button>
      </Link>
    </div>
  );
}

export default LoginInputForm;
