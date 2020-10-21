import { types } from "../types/types";

const initialState = {
  news: []
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
      
  
    default:
      return state;
  }

}