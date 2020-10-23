import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { newStartCategoryLoading } from "../actions/news";
import CardNew from "../components/news/CardNew";
import NewsSection from "../components/news/NewsSection";

export const NewsPerCategory = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newStartCategoryLoading(category));
  }, [dispatch, category]);

  const { newsCategory } = useSelector((state) => state.news);

  return (
    <div>
      <NewsSection />
      <h1>News per {category}</h1>
      <section className="news__container">
        {newsCategory.map((news) => {
          return <CardNew key={news._id} {...news} />;
        })}
      </section>
    </div>
  );
};
