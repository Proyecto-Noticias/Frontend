import React, { useRef, useEffect, useState } from "react";
import { TweenMax, Power3 } from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { searchNewsLoading, searchValue } from "../../actions/news";

const NewsSection = () => {
  const existParams = useParams();

  let contWithAnimation = useRef(null);
  useEffect(() => {
    TweenMax.to(contWithAnimation, 1, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);

  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  const isActive = useParams();

  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    dispatch(searchNewsLoading(searchText));
    dispatch(searchValue(searchText));
  }, [dispatch, searchText]);

  return (
    <section
      ref={(el) => {
        contWithAnimation = el;
      }}
      id="categories"
      className="newsection__container">
      <h1 className="newsection__title--user">
        <Link to="/">¡Hello {name}!</Link>
      </h1>
      <label className="newsection__label">
        {!existParams.category && (
          <input
            id="search"
            title="Search news"
            type="text"
            name="searchText"
            value={searchText}
            placeholder="e.g: Trump, Apple, Xbox"
            className="newsection__input"
            onChange={handleInputChange}
          />
        )}
      </label>

      <div>
        <div className="sections__container--items ">
          <nav>
            <ul className="sections__list">
              <li>
                <Link
                  title="Noticias de politica"
                  className="sections__list--item"
                  to={
                    isActive.category === "politics"
                      ? "#"
                      : "/category/politics"
                  }>
                  Politic
                </Link>
              </li>
              <li>
                <Link
                  title="Noticias de deportes"
                  className="sections__list--item"
                  to={
                    isActive.category === "sports" ? "#" : "/category/sports"
                  }>
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  title="Noticias de self care"
                  className="sections__list--item"
                  to={
                    isActive.category === "health-lifestyle"
                      ? "#"
                      : "/category/health-lifestyle"
                  }>
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link
                  title="Noticias de economía"
                  className="sections__list--item"
                  to={
                    isActive.category === "economy" ? "#" : "/category/economy"
                  }>
                  Economy
                </Link>
              </li>
              <li>
                <Link
                  title="Noticias de entretenimiento"
                  className="sections__list--item"
                  to={
                    isActive.category === "entertainment"
                      ? "#"
                      : "/category/entertainment"
                  }>
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  title="Noticias de entretenimiento"
                  className="sections__list--item"
                  to={
                    isActive.category === "culture" ? "#" : "/category/culture"
                  }>
                  Culture
                </Link>
              </li>
              <li>
                <Link
                  title="Noticias de entretenimiento"
                  className="sections__list--item"
                  to={
                    isActive.category === "technology"
                      ? "#"
                      : "/category/technology"
                  }>
                  Tech
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
