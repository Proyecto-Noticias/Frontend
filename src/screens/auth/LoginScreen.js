import React from 'react'

export const LoginScreen = () => {
  return (
    <div className='login__container'>
      <h2 className='login__title'>Login</h2>
      <form>
        <label className='login__label'>
          E-mail
          <input type='text' name='email' className='login__input'/>
        </label>  
        <label className='login__label'>
          Password
          <input type='password' name='password' className='login__input'/>
        </label>  

        <button className='login__btn' type='submit'>Continue</button>
      </form> 
    </div>
  )
}
