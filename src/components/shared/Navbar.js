import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { LogoutBtn } from '../LogoutBtn';
import SkipLink from './SkipLink';

const paths = [
  {
    key: 1,
    path: '#main',
    name: 'Skip to main content',
  },
];

const homePaths = [
  {
    key: 1,
    path: '#main',
    name: 'Skip to main content',
  },
  {
    key: 2,
    path: '#search',
    name: 'Skip to search news',
  },
  {
    key: 3,
    path: '#news',
    name: 'Skip to news',
  },
];

const Navbar = () => {
  const { checking } = useSelector((state) => state.auth);
  const [currentPath, setCurrentPath] = useState('');
  const history = useHistory();
  const actualLocation = useLocation();
  useEffect(() => {
    return history.listen((location) => {
      setCurrentPath(location.pathname);
    });
  });

  return (
    <>
      <SkipLink paths={currentPath !== '/' ? paths : homePaths} />
      <header>
        <div className='header__container l-flex-header'>
          <ul className='header-title__container l-flex-header'>
            <li>
              <Link to='/' className='home'>
                Always<span>Update</span>
              </Link>
            </li>
            <span className='login__container-navbar'>
              <li className='header--item'>
                {actualLocation.pathname === '/login' ? (
                  <div className='header__title-left'>
                    {checking ? (
                      <Link className='header__title-left'>Log in</Link>
                    ) : (
                      <LogoutBtn />
                    )}
                  </div>
                ) : checking ? (
                  <div className='header__title-left'>
                    <Link to='/login' className='header__title-left'>
                      Login
                    </Link>
                  </div>
                ) : (
                  <LogoutBtn />
                )}
              </li>

              <li>
                <div className='header__title-rigth'>
                  <Link className='header__title-right' to='/register'>
                    {checking ? 'Sing up' : null}
                  </Link>
                </div>
              </li>
            </span>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
