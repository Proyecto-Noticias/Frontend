import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';


export const LoginScreen = () => {

  const dispatch = useDispatch()

  const [formLoginValues, handleLoginInputChange] = useForm({
    email: '',
    password: ''
  });

  const { email, password } = formLoginValues;



  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLogin(email,password))
    
  }

  return (
    <div className='auth__container'>
      <h2 className='auth__title'>Login</h2>
      <form onSubmit={handleLogin}>
        <label className='auth__label'>
          E-mail
          <input
            type='text'
            name='email'
            className='auth__input'
            value={email}
            onChange={handleLoginInputChange}
          />
        </label>
        <label className='auth__label'>
          Password
          <input
            type='password'
            name='password'
            className='auth__input'
            value={password}
            onChange={handleLoginInputChange}
          />
        </label>

        <button className='auth__btn' type='submit'>Continue</button>
      </form>

      <Link to='/register' className='auth__link'>I do not have an account <b>Sign-Up</b></Link>
    </div>
  )
}
