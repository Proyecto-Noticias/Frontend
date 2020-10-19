import React from 'react';

import {
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className='header-container l-flex-row'>
        <Link to='/'>
          <h1>
            Easy<span>News</span>
          </h1>
        </Link>
        <p>User Name</p>
        <Link to='/login'>
          <p>Login</p>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
