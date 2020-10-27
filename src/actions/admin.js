import Swal from 'sweetalert2';
import { fetchSinToken, updateIsAdmin } from '../helpers/fetch';
import { types } from '../types/types';

export const adminUsersLoaded = () => {
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

export const adminUserChanged = (id, role) => {
  return async (dispatch) => {
    try {
      const resp = await updateIsAdmin(
        'user/makeAdmin',
        { id: `${id}`, role: role },
        'POST'
      );
      const body = await resp.json();
      console.log(`status: ${resp.status}`);

      if (resp.status === 200) {
        dispatch(adminUsersLoaded());
        // Swal.fire('', body.message, 'success');
      } else {
        Swal.fire('Error', body.message, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };
};
