import { combineReducers } from "redux";
import { newsReducer } from "./newsReducer";
import { uiReducer } from "./uiReducer";


export const rootReducer = combineReducers({
  ui: uiReducer,
  news: newsReducer,
  auth: authReducer,
  
  
})