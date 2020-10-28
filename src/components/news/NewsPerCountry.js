import React from "react";
import { useSelector } from "react-redux";
import CardNew from "./CardNew";

export const NewsPerCountry = () => {

  const {newsCountry} = useSelector(state => state.news)
  

  return (
    <div className="recomendation__container">
      <h2>News of your country</h2>
      {
        newsCountry.map((news) => {
          return <CardNew key={news._id} {...news} />;
        })
      }
    </div>
  );
};
