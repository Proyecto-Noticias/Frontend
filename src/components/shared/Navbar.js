import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogoutBtn } from '../LogoutBtn';
import SkipLink from './SkipLink';

const paths = [
  {
    key: 1,
    path: '#main',
    name: 'Saltar al contenido principal',
  },
];

const Navbar = () => {
  const { checking, isAdmin } = useSelector((state) => state.auth);

  return (
    <>
      <SkipLink paths={paths} />
      <header>
        <div className='header__container l-flex-header'>
          <ul className='header-title__container l-flex-header'>
            <li>
              <Link to='/' className='home'>
                Always<span>Update</span>
              </Link>
            </li>
            {isAdmin && (
              <li className='header__statistics'>
                <Link to='/stats'>Go Admin</Link>
              </li>
            )}
            <li className='login__container-navbar'>
              <Link to='/login' className='header__title-right'>
                {checking ? (
                  <button className='header__title-right-button' type='submit'>
                    Log in
                  </button>
                ) : (
                  <LogoutBtn />
                )}
              </Link>
              <Link to='/register' className='header__title-right'>
                {checking ? <div>Sing up</div> : <div></div>}
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
