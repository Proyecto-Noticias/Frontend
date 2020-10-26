import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../shared/Loading'
import CardNew from './CardNew'

export const UserSearch = () => {

  const {searchNews} = useSelector(state => state.news)
  const {loading, newsArraySearched} = searchNews
  
  return (
      (loading) 
      
      ? 
      <Loading /> 
      
      :
      <section id='news' className='news__container'>
      {newsArraySearched.map((newsSearch) => {
        return <CardNew key={newsSearch._id} {...newsSearch} />;
      })}
    </section>
    
  )
}
