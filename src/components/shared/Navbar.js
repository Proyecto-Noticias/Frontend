import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className='header__container l-flex-header'>
        <ul className='header-title__container l-flex-header'>
          <li>
            <Link to='/' className='home'>
              Easy<span>News</span>
            </Link>
          </li>
          <li>
            <p className='header__title-user'>User name</p>
          </li>
          <li className='login__container'>
            <Link to='login'>
              <p>Login</p>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
