import React from "react";
import { useSelector } from "react-redux";
import Loading from "../shared/Loading";
import CardNew from "./CardNew";

export const UserSearch = () => {
  
  const { searchNews, searchValue } = useSelector((state) => state.news);
  const { loading, newsArraySearched } = searchNews;
    
  return loading ? (
    <Loading />
  ) : (
    <div 
    >
      {
        searchValue 
        &&
        newsArraySearched.length === 0 
        ? <p className='searchSomething'>{`Sorry, there are not results with: "${searchValue}"`}</p>
        : <p className='searchSomething'>{`News with: "${searchValue}"`}</p>}
      
    <section id="news" className="news__container">
      {newsArraySearched.map((newsSearch) => {
        return <CardNew key={newsSearch._id} {...newsSearch} />;
      })}
    </section>
    </div>
  );
};
