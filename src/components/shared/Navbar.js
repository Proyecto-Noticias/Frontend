import React from 'react';
import { useSelector } from 'react-redux';

import {
  Link
} from "react-router-dom";

const Navbar = () => {

const {name} = useSelector(state => state.auth)

  return (
    <header>
      <div className='header__container l-flex-header'>
        <div className='header-title__container l-flex-header'>
          
          <Link to='/'>
            <h1>
              Easy<span>News</span>
            </h1>
          </Link>
          
          <p className='header__title-user'>{name }</p>
          
        </div>
        <div className='login__container'>
          <Link to='/login'>
            <p>Login</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
