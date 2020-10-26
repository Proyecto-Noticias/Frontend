import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';

const adminUsersLoaded = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchSinToken('user');
      const body = await resp.json();

      const users = body.users;
      dispatch(usersLoaded(users));
    } catch (error) {
      console.log(error);
    }
  };
};

const usersLoaded = (stats) => ({
  type: types.adminUserLoaded,
  payload: stats,
});

export default adminUsersLoaded;
