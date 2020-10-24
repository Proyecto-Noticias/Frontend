import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"


const newsStatsCategoryLoading = () => {
  return async (dispatch) => {

    try {

      const resp = await fetchSinToken( 'categories' );
      const body = await resp.json();

      const stats = body.categories
      dispatch( statsLoaded(stats) )

    } catch (error) {
      console.log(error)
    }
  }
}

const statsLoaded = ( stats ) => ({
  type: types.newStatsCategoryLoaded,
  payload: stats
})

export default newsStatsCategoryLoading;