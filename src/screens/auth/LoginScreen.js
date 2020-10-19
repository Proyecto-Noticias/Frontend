import React from 'react'
import { Link } from 'react-router-dom'



export const LoginScreen = () => {
  return (
    <div className='auth__container'>
      <h2 className='auth__title'>Login</h2>
      <form>
        <label className='auth__label'>
          E-mail
          <input type='text' name='email' className='auth__input'/>
        </label>  
        <label className='auth__label'>
          Password
          <input type='password' name='password' className='auth__input'/>
        </label>  

        <button className='auth__btn' type='submit'>Continue</button>
      </form> 

      <Link to='/register' className='auth__link'>I do not have an account <b>Sign-Up</b></Link>
    </div>
  )
}
