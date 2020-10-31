import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserSession } from "../../actions/auth";
import { newsStartLoading } from "../../actions/news";
import Loading from "../shared/Loading";
import CardNew from "./CardNew";

const NewsGrid = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserSession());
    dispatch(newsStartLoading());
  }, [dispatch]);

  const { newsHome } = useSelector((state) => state.news);
  const { loading, newsArray } = newsHome;

  return loading ? (
    <Loading />
  ) : (
    <section id="news" className="news__container">
      {newsArray.map((newsHome) => {
        return <CardNew key={newsHome._id} {...newsHome} />;
      })}
    </section>
  );
};

export default NewsGrid;
