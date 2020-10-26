import React, { memo } from "react";

import NewsSection from "../components/news/NewsSection";
import NewsGrid from "../components/news/NewsGrid";
import Footer from "../components/shared/Footer";
import { UserSearch } from "../components/news/UserSearch";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const { searchNews } = useSelector((state) => state.news);
  const { newsArray } = searchNews;

  return (
    <>
      <NewsSection />
      {newsArray.length > 0 ? <UserSearch /> : <NewsGrid />}
    </>
  );
};

export default memo(HomeScreen);
