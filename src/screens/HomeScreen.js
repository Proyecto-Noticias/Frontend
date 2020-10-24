import React, { memo } from "react";

import NewsSection from "../components/news/NewsSection";
import NewsGrid from "../components/news/NewsGrid";

const HomeScreen = () => {
  return (
    <>
      <NewsSection />
      <NewsGrid />
    </>
  );
};

export default memo(HomeScreen);
