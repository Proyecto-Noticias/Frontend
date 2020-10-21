import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
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
      <h2 className='auth__title'>Login</h2>

      <p className='auth__description'>Ingresa a tu cuenta o crea una</p>
      <form onSubmit={handleLogin}>
        <label htmlFor='email' className='auth__label'>
          E-mail
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
          Password
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

      <Link to='/register' className='auth__link focus-style'>
        I do not have an account <b>Sign-Up</b>
      </Link>
    </div>
  );
};
