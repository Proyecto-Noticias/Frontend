import Swal from 'sweetalert2';
import { fetchWithoutToken, updateIsAdmin, deleteUser } from '../helpers/fetch';
import { types } from '../types/types';

export const adminUsersLoaded = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithoutToken('user');
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

      if (resp.status === 200) {
        dispatch(adminUsersLoaded());
      } else {
        Swal.fire('Error', body.message, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const adminDeleteUser = (id) => {
  return async (dispatch) => {
    try {
      const resp = await deleteUser(
        `user/${id}`,
        'DELETE'
      );
      const body = await resp.json();

      if (resp.status === 200) {
        dispatch(adminUsersLoaded());
      } else {
        Swal.fire('Error', body.message, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };
};
