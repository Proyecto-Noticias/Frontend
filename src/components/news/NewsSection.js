import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SkipLink from "../shared/SkipLink";

const paths = [
  {
    key: 1,
    path: "#main",
    name: "Saltar al contenido principal",
  },
];

const NewsSection = () => {
  const { name } = useSelector((state) => state.auth);

  return (
    <div>
      <SkipLink paths={paths} />
      <section id="categories" className="newsection__container">
        <div className="newsection__container-text">
          <h1 className="newsection__title-user">¡Hola {name}!</h1>
          <label className="newsection__label">
            <input
              required
              type="text"
              name="search"
              placeholder="Search"
              className="newsection__input"
            />
          </label>
        </div>
        <div>
          {/* <h1 className="sections__container--title">
            Read<span>By</span>
          </h1> */}
          <div className="sections__container--items ">
            <nav>
              <ul className="sections__list">
                <li>
                  <Link
                    title="Noticias de politica"
                    className="sections__list--item"
                    to="category/politics">
                    Politic
                  </Link>
                </li>
                <li>
                  <Link
                    title="Noticias de deportes"
                    className="sections__list--item"
                    to="category/sports">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link
                    title="Noticias de self care"
                    className="sections__list--item"
                    to="category/health-lifestyle">
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link
                    title="Noticias de economía"
                    className="sections__list--item"
                    to="category/economy">
                    Economy
                  </Link>
                </li>
                <li>
                  <Link
                    title="Noticias de entretenimiento"
                    className="sections__list--item"
                    to="category/entertaiment">
                    Entertaiment
                  </Link>
                </li>
                <li>
                  <Link
                    title="Noticias de entretenimiento"
                    className="sections__list--item"
                    to="category/culture">
                    Culture
                  </Link>
                </li>
                <li>
                  <Link
                    title="Noticias de entretenimiento"
                    className="sections__list--item"
                    to="category/technology">
                    Tech
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsSection;
