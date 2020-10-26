import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';

const statsCategoryLoaded = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchSinToken('categories');
      const body = await resp.json();

      const stats = body.categories;
      dispatch(statsLoaded(stats));
    } catch (error) {
      console.log(error);
    }
  };
};

const statsLoaded = (stats) => ({
  type: types.statsCategoryLoaded,
  payload: stats,
});

export default statsCategoryLoaded;
