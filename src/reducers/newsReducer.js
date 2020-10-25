import { types } from "../types/types";

const initialState = {
  news: [],
  newSelected: {
    loading: true,
    body: null,
  },
  newsCategory: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.newOpenDetail:
      return {
        ...state,
        newDetailOpen: true,
      };

    case types.newCloseDetail:
      return {
        ...state,
        newDetailOpen: false,
      };

    case types.newsLoaded:
      return {
        ...state,
        news: [...action.payload],
      };

    case types.newCategoryLoaded:
      return {
        ...state,
        newsCategory: [...action.payload],
      };

    case types.newCDetailLoaded:
      return {
        ...state,
        newSelected: { ...action.payload },
      };

    case types.newDeleted:
      return {
        ...state,
        news: state.news.filter((e) => e._id !== state.newSelected._id),
        newSelected: {
          ...state,
        },
      };

    default:
      return state;
  }
};
