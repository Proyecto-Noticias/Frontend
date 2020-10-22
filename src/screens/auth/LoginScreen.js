import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLogin(email, password));
  };

  return (
    <div className='auth__container'>
      <h2 className="auth__title">WELCOME TO</h2>
      <h2 className="auth__title-second">
        Always<span>News</span>

      </h2>

      <p className='auth__description'>Ingresa a tu cuenta o crea una</p>
      <form onSubmit={handleLogin}>
        <label htmlFor='email' className='auth__label'>
          <input
            required
            id='email'
            type='email'
            name='email'
            placeholder='Email'
            className='auth__input'
            value={email}
            onChange={handleLoginInputChange}
          />
        </label>
        <label htmlFor='password' className='auth__label'>
          <input
            required
            id='password'
            type='password'
            name='password'
            placeholder='Password'
            className='auth__input'
            value={password}
            onChange={handleLoginInputChange}
          />
        </label>

        <button className='auth__btn' type='submit'>
          Continue
        </button>
      </form>
      <p className='auth__privacity'>
        By continuing, you agree to EasyNews Terms of Service, Privacy policy.
      </p>
      <Link to='/register' className='auth__link focus-style'>
        Already a member? <b>Sign-Up</b>
      </Link>
    </div>
  );
};

// By continuing, you agree to EasyNews Terms of Service, Privacy policy.  Log in

export default LoginScreen;
