import { types } from "../types/types";

const initialState = {
  newDetailOpen: false
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
      
  
    default:
      return state;
  }

}