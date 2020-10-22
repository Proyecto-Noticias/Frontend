
import { types } from "../types/types";

const initialState = {
  news: [],
  newSelected: null
}

export const newsReducer = ( state = initialState, action ) => {

  switch (action.type) {
    case types.newOpenDetail:
      return{
        ...state,
        newDetailOpen: true
      }

    case types.newCloseDetail:
      return{
        ...state,
        newDetailOpen: false
      }

    case types.newsLoaded:
      return {
        ...state,
        news: [ ...action.payload ]
      }

    case types.newCDetailLoaded:
      return {
        ...state,
        newSelected: { ...action.payload }
      }
        
    default:
      return state;
  }
}
