import React, { memo } from "react";

import NewsSection from "../components/news/NewsSection";
import NewsGrid from "../components/news/NewsGrid";
import Footer from "../components/shared/Footer";

const HomeScreen = () => {
  return (
    <>
      <NewsSection />
      <NewsGrid />
      <Footer />
    </>
  );
};

export default memo(HomeScreen);
