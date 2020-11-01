import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startRegister } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import { usePassword } from "../../hooks/usePassword";

const RegisterScreen = () => {
  const [showPassword, handleShowPassword] = usePassword(false);
  let authWithAnimation = useRef(null);
  useEffect(() => {
    TweenMax.to(authWithAnimation, 1, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);

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

    dispatch(
      startRegister(
        firstName,
        lastName,
        email,
        country,
        password,
        confirmPassword
      )
    );
  };

  return (
    <div>
      <div
        ref={(el) => {
          authWithAnimation = el;
        }}
        className="auth__container">
        <h2 className="auth__title">WELCOME TO</h2>
        <h2 className="auth__title--second">
          Always<span>News</span>
        </h2>
        <p className="auth__description">Create an account</p>
        <form onSubmit={handleRegister}>
          <label className="auth__label" title="Enter your name">
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
          <label className="auth__label" title="Enter your last name">
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
            title="Write the email you want to register with">
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
            title="Country you wish to receive more news from">
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
          <label
            htmlFor="password"
            className="auth__label"
            title="Write down a secure password">
            &nbsp;Password
            <button
              className="auth___password--button"
              onClick={handleShowPassword}>
              {`Show Password, ${showPassword ? "Active" : "Disabled"}`}
            </button>
            <input
              id="password"
              required
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              className="auth__input"
              value={password}
              onChange={handleRegisterInputChange}
            />
            <div className="auth__infopassword">
              Least one uppercase letter, one lowercase letter and one number
            </div>
          </label>
          <label className="auth__label" title="Repeat your password">
            &nbsp;Confirm your password
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Repeat your password"
              name="confirmPassword"
              className="auth__input"
              value={confirmPassword}
              onChange={handleRegisterInputChange}
            />
          </label>

          <button aria-label="Register me" className="auth__btn" type="submit">
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
