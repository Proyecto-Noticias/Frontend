
import { types } from "../types/types";

const initialState = {
  categories: [],
}

export const statsReducer = ( state = initialState, action ) => {

  switch (action.type) {
    case types.newStatsCategoryLoaded:
      return{
        ...state,
        categories: [ ...action.payload ]
      }
    default:
      return state;
  }
}
