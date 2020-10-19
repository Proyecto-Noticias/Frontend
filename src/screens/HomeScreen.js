import React from 'react';
import MainNew from '../components/news/MainNew';
import CarouselNew from '../components/news/CarouselNew';
import CardNew from '../components/news/CardNew';



const HomeScreen = () => {
  return (
    <>
      <MainNew />
      <CarouselNew>        
      <CardNew />  
      </CarouselNew>
    </>
  );
};

export default HomeScreen;
