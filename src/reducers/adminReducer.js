import { types } from '../types/types';

const initialState = {
  users: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.adminUserLoaded:
      return {
        ...state,
        users: [...action.payload],
      };
    case types.adminUserChanged:
      return {
        ...state,
        users: [...action.payload],
      };
    case types.adminUserDeleted:
      return {
        ...state,
        users: [...action.payload],
      };
    default:
      return state;
  }
};
