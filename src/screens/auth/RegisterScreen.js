import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

  const dispatch = useDispatch()

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    password: ''
  });

  const { firstName, lastName, email, country,  password } = formRegisterValues;



  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(startRegister(firstName, lastName, email, country, password))
    
  }

  return (
    <div>
      <div className='auth__container'>
      <h2 className='auth__title'>Sign Up</h2>
      <form onSubmit={handleRegister}>
        <label className='auth__label'>
          Name
          <input
            type='text'
            name='firstName'
            className='auth__input'
            value={firstName}
            onChange={handleRegisterInputChange}  
          />
        </label>  
        <label className='auth__label'>
          Lastname
          <input
            type='text'
            name='lastName'
            className='auth__input'
            value={lastName}
            onChange={handleRegisterInputChange}  
          />
        </label>  
        <label className='auth__label'>
          E-mail
          <input
            type='text'
            name='email'
            className='auth__input'
            value={email}
            onChange={handleRegisterInputChange}
          />
        </label>  
        <label className='auth__label'>
          Country
          <input
            type='text'
            name='country'
            className='auth__input'
            value={country}
            onChange={handleRegisterInputChange}
          
          />
        </label>  
        <label className='auth__label'>
          Password
          <input
            type='password'
            name='password1'
            className='auth__input'
            value={password}
            onChange={handleRegisterInputChange}            
          />
        </label>
        <button className='auth__btn' type='submit'>Continue</button>
      </form> 
      <Link to='/login' className='auth__link'>I have an account <b>Sign-In</b></Link>
    </div>
    </div>
  )
}
