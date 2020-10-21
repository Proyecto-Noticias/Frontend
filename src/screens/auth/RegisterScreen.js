import React from 'react';
import { Link } from 'react-router-dom';

//Check password and repeat password are the same

export const RegisterScreen = () => {
  return (
    <div>
      <div className='auth__container'>
        <h2 className='auth__title'>Sign Up</h2>
        <p className='auth__description'>Crea una cuenta</p>
        <form onSubmit={() => console.log('Handle submit')}>
          <label className='auth__label'>
            Name
            <input
              required
              type='text'
              name='name'
              placeholder='Full name'
              className='auth__input'
            />
          </label>
          <label className='auth__label'>
            E-mail
            <input
              required
              type='email'
              name='email'
              placeholder='Email'
              className='auth__input'
            />
          </label>
          <label className='auth__label'>
            Select your country
            <select name='countries' className='auth__input' required>
              <option value=''>Select your country</option>
              <option value='Colombia'>Colombia</option>
              <option value='Argentina'>Argentina</option>
              <option value='México'>México</option>
              <option value='Venezuela'>Venezuela</option>
            </select>
          </label>
          <label className='auth__label'>
            Password
            <input
              required
              placeholder='Password'
              type='password'
              name='password'
              className='auth__input'
            />
          </label>
          <label className='auth__label'>
            Repeat Password
            <input
              required
              type='password'
              placeholder='Repeat your password'
              name='Confirm your password'
              className='auth__input'
            />
          </label>

          <button className='auth__btn' type='submit'>
            Sign Up
          </button>
        </form>
        <Link to='/login' className='auth__link focus-style'>
          I have an account <b>Sign-In</b>
        </Link>
      </div>
    </div>
  );
};
