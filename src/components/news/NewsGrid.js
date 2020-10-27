import React from "react";
import { useSelector } from "react-redux";
import CardNew from "./CardNew";
import Loading from "../shared/Loading";

const NewsGrid = () => {
  const { news } = useSelector((state) => state.news);
  const { loading, newsArray } = news;

  return loading ? (
    <Loading />
  ) : (
    //Class en containers
    <section id="news" className="news__container">
      {newsArray.map((news) => {
        return <CardNew key={news._id} {...news} />;
      })}
    </section>
  );
};

export default NewsGrid;
