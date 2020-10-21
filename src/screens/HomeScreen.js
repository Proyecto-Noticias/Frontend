import React from 'react';

import CarouselNew from '../components/news/CarouselNew';
import NewsSection from '../components/news/NewsSection';
import NewsGrid from '../components/news/NewsGrid';

const HomeScreen = () => {
  return (
    <>
      <CarouselNew />
      <NewsSection />
      <NewsGrid />
    </>
  );
};

export default HomeScreen;
