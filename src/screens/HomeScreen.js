import React from 'react';

import CarouselNew from '../components/news/CarouselNew';
import NewsSection from '../components/news/NewsSection';
import NewsGrid from '../components/news/NewsGrid';
import CardNew from '../components/news/CardNew';
import { newsData } from '../mock';


const HomeScreen = () => {
  return (
    <>
      <CarouselNew />
      <NewsSection />
      <NewsGrid>
        {
					newsData.map( function(news){

						return ( <CardNew key={news.id}{...news} /> )
					}
        )}
      </NewsGrid>

    </>
  );
};

export default HomeScreen;
