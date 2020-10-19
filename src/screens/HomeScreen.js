import React from 'react';
import NaVBar from '../components/shared/Navbar';
import MainNew from '../components/news/MainNew';
import CarouselNew from '../components/news/CarouselNew';
import CardNew from '../components/news/CardNew';

const HomeScreen = () => {
  return (
    <>
      <NaVBar />
      <MainNew />
      <CarouselNew>
        <CardNew />
        <CardNew />
        <CardNew />
        <CardNew />
        <CardNew />
        <CardNew />
        <CardNew />
        <CardNew />
      </CarouselNew>
    </>
  );
};

export default HomeScreen;
