import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../shared/Loading'
import CardNew from './CardNew'

export const UserSearch = () => {

  const {searchNews} = useSelector(state => state.news)
  const {loading, newsArray} = searchNews

  return (
    
      (loading) 
      
      ? <Loading /> 
      
      :
      <section id='news' className='news__container'>
      {newsArray.map((news) => {
        return <CardNew key={news._id} {...news} />;
      })}
    </section>
    
  )
}
