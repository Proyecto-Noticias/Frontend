import React from "react";
import { useSelector } from "react-redux";
import CardNew from "./CardNew";

export const NewsPerCountry = () => {

  const {newsCountry} = useSelector(state => state.news)
  

  return (
    <div className="recomendation__container">
      <h2 className="recomendation__title">News from your country</h2>
      <section className="recomendation__container--grid">
      {
        newsCountry.map((news) => {
          return <CardNew key={news._id} {...news} />;
        })
      }
      </section>
    </div>
  );
};
