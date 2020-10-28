import { types } from '../types/types';

const initialState = {
  categories: [],
  message: '',
};

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.statsCategoryLoaded:
      return {
        ...state,
        categories: [...action.payload],
      };
    case types.statsCategoryConsumed:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
