import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLogin(email, password));
  };

  return (
    <div className="auth__container">
      <h2 className="auth__title">WELCOME TO</h2>
      <h2 className="auth__title-second">
        Always<span>News</span>
      </h2>

      <p className="auth__description">Login to your account or create an</p>
      <form onSubmit={handleLogin}>
        <label className="auth__label" title="Enter your email">
          Email
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="auth__input"
            value={email}
            onChange={handleLoginInputChange}
          />
        </label>
        <label
          htmlFor="password"
          className="auth__label"
          title="Enter your password">
          Password
          <input
            required
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className="auth__input"
            value={password}
            onChange={handleLoginInputChange}
          />
        </label>

        <button aria-label="Login" className="auth__btn" type="submit">
          Login
        </button>
      </form>
      <p className="auth__privacity">
        By continuing, you agree to AlwaysNews Terms of Service, Privacy policy.
      </p>
      <Link to="/register" className="auth__link">
        Already a member? <b>Sign-Up</b>
      </Link>
    </div>
  );
};

export default LoginScreen;
