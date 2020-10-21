import { fetchSinToken } from "../helpers/fetch"
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