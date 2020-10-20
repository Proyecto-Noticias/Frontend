import { newsData } from "../mock"



export const getNewsById = ( newId ) => {
  
  return newsData.find( news => news.id === newId)
}

