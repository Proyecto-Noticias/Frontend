import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <div>
      <div className='auth__container'>
      <h2 className='auth__title'>Sign Up</h2>
      <form>
        <label className='auth__label'>
          Name
          <input type='text' name='name' className='auth__input'/>
        </label>  
        <label className='auth__label'>
          E-mail
          <input type='text' name='email' className='auth__input'/>
        </label>  
        <label className='auth__label'>
          Country
          <input type='text' name='country ' className='auth__input'/>
        </label>  
        <label className='auth__label'>
          Password
          <input type='password' name='password' className='auth__input'/>
        </label>  
        <label className='auth__label'>
          Repeat Password
          <input type='password' name='password' className='auth__input'/>
        </label>  

        <button className='auth__btn' type='submit'>Continue</button>
      </form> 
      <Link to='/login' className='auth__link'>I have an account <b>Sign-In</b></Link>
    </div>
    </div>
  )
}
