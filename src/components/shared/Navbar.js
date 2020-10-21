import React from 'react';

import { Link } from 'react-router-dom';
import SkipLink from './SkipLink';

const paths = [
  {
    key: 1,
    path: '#main',
    name: 'Saltar al contenido principal',
  },
];

const Navbar = () => {
  return (
    <>
      <SkipLink paths={paths} />
      <header>
        <div className='header__container l-flex-header'>
          <ul className='header-title__container l-flex-header'>
            <li>
              <Link to='/' className='home focus-style'>
                Easy<span>News</span>
              </Link>
            </li>
            <li>
              <p className='header__title-user'>User name</p>
            </li>
            <li className='login__container'>
              <Link to='login' className='focus-style'>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
