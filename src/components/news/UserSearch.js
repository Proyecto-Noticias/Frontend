import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../shared/Loading'
import CardNew from './CardNew'

export const UserSearch = () => {

  const {searchNews} = useSelector(state => state.news)
  const {searchValue} = useSelector(state => state.news)
  const {loading, newsArraySearched} = searchNews
  //const noNews = (newsArray.lenght === 0)
  console.log(newsArraySearched.length)
  console.log(searchValue.length)
  return (

      //(noNews) ? <h1>No se encontro nada</h1> :

    
      (loading) 
      
      ? <Loading /> 
      
      :
      <section id='news' className='news__container'>
      {newsArraySearched.map((newsSearch) => {
        return <CardNew key={newsSearch._id} {...newsSearch} />;
      })}
    </section>
    
  )
}
