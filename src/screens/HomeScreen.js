import React from 'react';
import NaVBar from '../components/shared/Navbar';
import CarouselNew from '../components/news/CarouselNew';
import NewsSection from '../components/news/NewsSection';
import NewsGrid from '../components/news/NewsGrid';
import CardNew from '../components/news/CardNew';

const HomeScreen = () => {
  return (
    <>
      <NaVBar />
      <CarouselNew />
      <NewsSection />
      <NewsGrid>
        <CardNew />
        <CardNew />
        <CardNew />
        <CardNew />
        <CardNew />
      </NewsGrid>
    </>
  );
};

export default HomeScreen;
