import React from 'react';

const Navbar = () => {
  return (
    <header>
      <div className='header__container l-flex-header'>
        <div className='header-title__container l-flex'>
          <h1>
            Easy<span>News</span>
          </h1>
          <p>User Name</p>
        </div>
        <div className='login__container'>
          <p>Login</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
