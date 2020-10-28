import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
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
  const { checking, isAdmin } = useSelector((state) => state.auth);
  const [currentPath, setCurrentPath] = useState("");

  const history = useHistory();
  const actualLocation = useLocation();
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
          <ul className="header__container--title l-flex-header">
            <li>
              <Link to="/" className="header__title">
                Always<span>Update</span>
              </Link>
            </li>
            <div className="header__right">
              {isAdmin && (
                <li className="header__statistics">
                  <Link to="/Ry8HifHDo2kKgv7he+bfn3ApR17iwLqOV96MvNbRtlU">
                    <button
                      className="header__title--right-button"
                      type="submit">
                      Go Admin
                    </button>
                  </Link>
                </li>
              )}
              <li className="login__container--navbar">
                {actualLocation.pathname === "/login" ? (
                  <a href="#authlogin" className="header__title--right">
                    {checking ? (
                      <button
                        className="header__title--right-button"
                        type="submit">
                        Log in
                      </button>
                    ) : (
                      <LogoutBtn />
                    )}
                  </a>
                ) : (
                  <Link to="/login" className="header__title--right">
                    {checking ? (
                      <button
                        className="header__title--right-button"
                        type="submit">
                        Log in
                      </button>
                    ) : (
                      <LogoutBtn />
                    )}
                  </Link>
                )}
                {checking ? (
                  <li>
                    <div className="header__title--rigth">
                      <Link className="header__title--right" to="/register">
                        Sign up
                      </Link>
                    </div>
                  </li>
                ) : null}
              </li>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
