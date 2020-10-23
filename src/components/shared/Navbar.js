import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import SkipLink from "./SkipLink";

const paths = [
  {
    key: 1,
    path: "#main",
    name: "Saltar al contenido principal",
  },
];

const Navbar = () => {
  const { name } = useSelector((state) => state.auth);

  return (
    <>
      <SkipLink paths={paths} />
      <header>
        <div className="header__container l-flex-header">
          <ul className="header-title__container l-flex-header">
            <li>
              <Link to="/" className="home">
                Always<span>Update</span>
              </Link>
            </li>
            {/* <li>
              <p className="header__title-user">{name}</p>
            </li> */}
            <li className="login__container-navbar">
              <Link to="/login" className="header__title-right">
                <button className="header__title-right-button" type="submit">
                  Log in
                </button>
              </Link>
              <Link to="/register" className="header__title-right">
                Sing up
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
