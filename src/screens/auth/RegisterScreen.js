import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    name: 'Juan',
    lastname: 'Rios',
    country: 'Colombia',
    email: 'mrdaniel19996@gmail.com',
    password: 'Ab123456'
  });

  const { name, lastname, country, email, password } = formRegisterValues;



  const handleRegister = (e) => {
    e.preventDefault();

    console.log(name, lastname, country, email, password)

    //dispatch(startLogin(email,password))
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
            name='name'
            className='auth__input'
            value={name}
            onChange={handleRegisterInputChange}  
          />
        </label>  
        <label className='auth__label'>
          Lastname
          <input
            type='text'
            name='lastname'
            className='auth__input'
            value={lastname}
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
