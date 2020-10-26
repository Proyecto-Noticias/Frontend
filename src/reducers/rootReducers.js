import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { newsReducer } from './newsReducer';
import { uiReducer } from './uiReducer';
import { statsReducer } from './statsReducer';
import { adminReducer } from './adminReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  news: newsReducer,
  auth: authReducer,
  stats: statsReducer,
  admin: adminReducer,
});
