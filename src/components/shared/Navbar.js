import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LogoutBtn } from "../LogoutBtn";
import SkipLink from "./SkipLink";

const paths = [
  {
    key: 1,
    path: "#main",
    name: "Skip to main content",
  },
];

const homePaths = [
  {
    key: 1,
    path: "#main",
    name: "Skip to main content",
  },
  {
    key: 2,
    path: "#search",
    name: "Skip to search news",
  },
  {
    key: 3,
    path: "#news",
    name: "Skip to news",
  },
];

const Navbar = () => {
  const { checking } = useSelector((state) => state.auth);
  const [currentPath, setCurrentPath] = useState("");
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      setCurrentPath(location.pathname);
    });
  });

  return (
    <>
      <SkipLink paths={currentPath !== "/" ? paths : homePaths} />
      <header>
        <div className="header__container l-flex-header">
          <ul className="header-title__container l-flex-header">
            <li>
              <Link to="/" className="home">
                Always<span>Update</span>
              </Link>
            </li>
            <li className="login__container-navbar">
              <Link to="/login" className="header__title-right">
                {checking ? (
                  <button className="header__title-right-button" type="submit">
                    Log in
                  </button>
                ) : (
                  <LogoutBtn />
                )}
              </Link>
              <Link to="/register" className="header__title-right">
                {checking ? <div>Sing up</div> : null}
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
