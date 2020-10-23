import { fetchSinToken, getNewById, getNewsByCategory } from "../helpers/fetch"
import { types } from "../types/types"


export const newsStartLoading = () => {
  return async (dispatch) => {

    try {

      const resp = await fetchSinToken( 'news' );
      const body = await resp.json();

      const news = body.news.docs
      dispatch( newLoaded(news) )

    } catch (error) {
      console.log(error)
    }
  }
}

const newLoaded = ( news ) => ({
  type: types.newsLoaded,
  payload: news
})

export const newStartDetailLoading = (_id) => {
  return async (dispatch) => {

    try {

      const resp = await getNewById( _id );
      
      dispatch( newDetailLoaded(resp.yourNew) )

    } catch (error) {
      console.log(error)
    }

  }
}

const newDetailLoaded = ( newSelected ) => ({
  type: types.newCDetailLoaded,
  payload: { 
    loading: false,
    ...newSelected } 
})

export const newStartCategoryLoading = (category) => {
  return async (dispatch) => {

    try {

      const resp = await getNewsByCategory(category);
      
      dispatch( newCategoryLoaded(resp.news) )

    } catch (error) {
      console.log(error)
    }

  }
}

const newCategoryLoaded = ( newsCategory ) => ({
  type: types.newCategoryLoaded,
  payload: [...newsCategory] 
})