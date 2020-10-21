import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    password: '',
  });

  const { firstName, lastName, email, country, password } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(startRegister(firstName, lastName, email, country, password));
  };

  return (
    <div>
      <div className='auth__container'>
        <h2 className='auth__title'>Sign Up</h2>
        <p className='auth__description'>Crea una cuenta</p>
        <form onSubmit={handleRegister}>
          <label className='auth__label'>
            First name
            <input
              required
              type='text'
              name='name'
              placeholder='First name'
              className='auth__input'
              value={firstName}
              onChange={handleRegisterInputChange}
            />
          </label>
          <label className='auth__label'>
            Last name
            <input
              required
              type='text'
              name='lastName'
              placeholder='Last name'
              className='auth__input'
              value={lastName}
              onChange={handleRegisterInputChange}
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
              value={email}
              onChange={handleRegisterInputChange}
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
              value={password}
              onChange={handleRegisterInputChange}
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
              value={password}
              onChange={handleRegisterInputChange}
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
