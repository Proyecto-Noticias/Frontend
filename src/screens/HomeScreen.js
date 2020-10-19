import React from 'react';
import MainNew from '../components/news/MainNew';
import CarouselNew from '../components/news/CarouselNew';
import CardNew from '../components/news/CardNew';
import { newsData } from '../mock';


const HomeScreen = () => {
  return (
    <>
      <MainNew />
      <CarouselNew>  

      <div>



				{
					newsData.map( function(news){

						return ( <CardNew key={news.id}{...news} /> )
					}
        )}

      </div>


      
      </CarouselNew>
    </>
  );
};

export default HomeScreen;
