import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newStartCountryLoading } from "../../actions/news";
import CardNew from "./CardNew";

export const NewsPerCountry = () => {
  const dispatch = useDispatch();
  const { newsCountry } = useSelector((state) => state.news);
  const { country } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(newStartCountryLoading(country.toLowerCase()));
  }, [dispatch, country]);

  return (
    <div className="recomendation__container">
      <h2 className="recomendation__title">News from your country</h2>
      <section className="recomendation__container--grid">
        {newsCountry.map((news) => {
          return <CardNew key={news._id} {...news} />;
        })}
      </section>
    </div>
  );
};
