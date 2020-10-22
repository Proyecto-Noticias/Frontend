import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    password: '',
    confirmPassword: '',
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
      <div className='auth__container'>
        <h2 className='auth__title'>Sign Up</h2>
        <p className='auth__description'>Crea una cuenta</p>
        <form onSubmit={handleRegister}>
          <label className='auth__label'>
            <input
              required
              type='text'
              name='firstName'
              placeholder='First name'
              className='auth__input'
              value={firstName}
              onChange={handleRegisterInputChange}
            />
          </label>
          <label className='auth__label'>
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
            <select
              value={country}
              name='country'
              onChange={handleRegisterInputChange}
              className='auth__input'
              required
            >
              <option value='' disabled>
                Select your country
              </option>
              <option value='Colombia'>Colombia</option>
              <option value='Argentina'>Argentina</option>
              <option value='México'>México</option>
              <option value='Venezuela'>Venezuela</option>
            </select>
          </label>
          <label className='auth__label'>
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
            <input
              required
              type='password'
              placeholder='Repeat your password'
              name='confirmPassword'
              className='auth__input'
              value={confirmPassword}
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

export default RegisterScreen;
