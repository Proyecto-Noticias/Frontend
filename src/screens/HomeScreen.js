import React, { memo, useEffect } from 'react';

import NewsSection from '../components/news/NewsSection';
import NewsGrid from '../components/news/NewsGrid';
import { UserSearch } from '../components/news/UserSearch';
import { useDispatch, useSelector } from 'react-redux';
import { NewsPerCountry } from '../components/news/NewsPerCountry';
import { newStartCountryLoading } from '../actions/news';

const HomeScreen = () => {
  const dispatch = useDispatch()
  const { searchNews } = useSelector((state) => state.news)
  const { newsArraySearched } = searchNews
  const { country} = useSelector(state => state.auth)
  const countryToLowerCase = country.toLowerCase()

  useEffect(() => {
    dispatch ( newStartCountryLoading(countryToLowerCase) )
  }, [dispatch, countryToLowerCase])
  
  return (
    <>
      <NewsSection />
      {newsArraySearched.length > 0 ? <UserSearch /> : <NewsGrid />}
      <NewsPerCountry />
    </>
  );
};

export default memo(HomeScreen);
