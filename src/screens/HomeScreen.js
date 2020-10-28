import React, { memo } from 'react';

import NewsSection from '../components/news/NewsSection';
import NewsGrid from '../components/news/NewsGrid';
import { UserSearch } from '../components/news/UserSearch';
import {  useSelector } from 'react-redux';
import { NewsPerCountry } from '../components/news/NewsPerCountry';


const HomeScreen = () => {
  const { searchNews } = useSelector((state) => state.news)
  const { checking } = useSelector((state) => state.auth)
  const { newsArraySearched } = searchNews
  
  
  return (
    <>
      <NewsSection />
      {newsArraySearched.length > 0 ? <UserSearch /> : <NewsGrid />}
      
      {
        (!checking) && <NewsPerCountry />
      }
    </>
  );
};

export default memo(HomeScreen);
