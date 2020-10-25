import React from "react";
import { useSelector } from "react-redux";
import CardNew from "./CardNew";
// import Loading from "../shared/Loading";

const NewsGrid = () => {
  const { news } = useSelector((state) => state.news);
  // const { loading } = news;

  return (
    <section className="news__container">
      {news.map((news) => {
        return <CardNew key={news._id} {...news} />;
      })}
    </section>
  );
};

export default NewsGrid;
