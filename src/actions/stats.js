import { fetchWithoutToken, addCategoryConsumed } from '../helpers/fetch';
import { types } from '../types/types';

export const statsCategoryLoaded = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithoutToken('categories');
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

export const statsCategoryConsumed = (category) => {
  return async (dispatch) => {
    try {
      const resp = await addCategoryConsumed(
        'categories/stat',
        { category: `${category}` },
        'POST'
      );
      if (resp.status === 200) {
        const body = await resp.json();
        const stats = body.Message;
        dispatch(categoryConsumed(stats));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const categoryConsumed = (stats) => ({
  type: types.statsCategoryConsumed,
  payload: stats,
});
