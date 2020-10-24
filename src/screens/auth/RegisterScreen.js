import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startRegister } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const {
    firstName,
    lastName,
    email,
    country,
    password,
    confirmPassword,
  } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(startRegister(firstName, lastName, email, country, password));
  };

  return (
    <div>
      <div className="auth__container">
        <h2 className="auth__title">WELCOME TO</h2>
        <h2 className="auth__title-second">
          Always<span>News</span>
        </h2>
        <p className="auth__description">Create an account</p>
        <form onSubmit={handleRegister}>
          <label className="auth__label" title="Escribe tu nombre o nombres">
            &nbsp;First Name
            <input
              required
              type="text"
              name="firstName"
              placeholder="First name"
              className="auth__input"
              value={firstName}
              onChange={handleRegisterInputChange}
            />
          </label>
          <label className="auth__label" title="Escribe tus apellidos">
            &nbsp;Last Name
            <input
              required
              type="text"
              name="lastName"
              placeholder="Last name"
              className="auth__input"
              value={lastName}
              onChange={handleRegisterInputChange}
            />
          </label>
          <label
            className="auth__label"
            title="Escribe el correo con el que deseas registrarte">
            &nbsp;Email
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="auth__input"
              value={email}
              onChange={handleRegisterInputChange}
            />
          </label>
          <label
            className="auth__label"
            title="País del que deseas recibir más noticias">
            &nbsp;Country
            <select
              value={country}
              name="country"
              onChange={handleRegisterInputChange}
              className="auth__input"
              required>
              <option value="" disabled>
                Select your country
              </option>
              <option value="Colombia">Colombia</option>
              <option value="Argentina">Argentina</option>
              <option value="México">México</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </label>
          <label className="auth__label" title="Escribe una contraseña segura">
            &nbsp;Password
            <input
              required
              placeholder="Password"
              type="password"
              name="password"
              className="auth__input"
              value={password}
              onChange={handleRegisterInputChange}
            />
          </label>
          <label
            className="auth__label"
            title="Repite la contraseña que escribiste arriba">
            &nbsp;Confirm your password
            <input
              required
              type="password"
              placeholder="Repeat your password"
              name="confirmPassword"
              className="auth__input"
              value={confirmPassword}
              onChange={handleRegisterInputChange}
            />
          </label>

          <button aria-label="Registrarme" className="auth__btn" type="submit">
            Sign Up
          </button>
        </form>
        <Link to="/login" className="auth__link">
          I have an account <b>Sign-In</b>
        </Link>
      </div>
    </div>
  );
};

export default RegisterScreen;
