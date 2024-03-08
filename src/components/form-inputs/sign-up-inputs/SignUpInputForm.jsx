import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { getPasswordEntry } from "../../../hooks/getPasswordEntry";
import { validationSchema } from "../../../hooks/getYupSchema";
import { FaEye } from "react-icons/fa"; // eye-icon active
import { FaEyeSlash } from "react-icons/fa"; // eye-icon hidden

function SignUpInputForm() {
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
    validationSchema,
    onSubmit,
  });

  const isFormValid = () => {
    return (
      formik.values.email &&
      !formik.errors.email &&
      !formik.errors.username &&
      !formik.errors.password &&
      !formik.errors.confirmPassword &&
      formik.values.password === formik.values.confirmPassword
    );
  };

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

      <div className="registration__password-input">
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
      </div>

      <ul className="input-forbidden">
        {getPasswordEntry(formik).map((elem) => (
          <li key={elem.key} style={{ color: elem.style }}>
            {elem.text}
          </li>
        ))}
      </ul>

      <div className="registration__password-input">
        <input
          name="confirmPassword"
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
        className="registration-after__btn"
        disabled={!isFormValid() || formik.isSubmitting}
        type="submit"
      >
        Далее
      </button>
    </form>
  );
}

export default SignUpInputForm;
