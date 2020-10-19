import React from 'react';

const Navbar = () => {
  return (
    <header>
      <div className='header-container'>
        <ul>
          <li>
            <a className='header-container--link' href='#temporal'>
              Easy News
            </a>
          </li>
          <li>
            <a href='#temporal'>User Name</a>
          </li>
          <li>
            <a href='#temporal'>Login</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
