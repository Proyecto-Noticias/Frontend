import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { newsReducer } from "./newsReducer";
import { uiReducer } from "./uiReducer";
import { statsReducer } from "./statsReducer";


export const rootReducer = combineReducers({
  ui: uiReducer,
  news: newsReducer,
  auth: authReducer,
  stats: statsReducer,
})