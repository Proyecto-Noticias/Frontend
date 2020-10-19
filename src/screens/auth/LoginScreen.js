import React from 'react';
import { Link } from 'react-router-dom';

//Accesibility, handle empty password

export const LoginScreen = () => {
  return (
    <div className='auth__container'>
      <h2 className='auth__title'>Login</h2>
      <p className='auth__description'>Ingresa a tu cuenta o crea una</p>
      <form onSubmit={() => console.log('Function handle submit')}>
        <label htmlFor='email' className='auth__label'>
          E-mail
          <input
            id='email'
            type='email'
            name='email'
            placeholder='Email'
            className='auth__input'
          />
        </label>
        <label htmlFor='password' className='auth__label'>
          Password
          <input
            id='password'
            type='password'
            name='password'
            placeholder='Password'
            className='auth__input'
          />
        </label>

        <button className='auth__btn' type='submit'>
          Continue
        </button>
      </form>

      <Link to='/register' className='auth__link'>
        I do not have an account <b>Sign-Up</b>
      </Link>
    </div>
  );
};
