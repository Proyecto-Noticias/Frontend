import { types } from "../types/types";

const initialState = {
  newsHome: {
    loading: true,
    newsArray:[]
  },
  newSelected: {
    loading: true,
    body: null,
  },
  newsCategory: [],
  newsCountry: [],
  
  searchNews: {
    loading: true,
    newsArraySearched: []
  },

  searchValue: null,
  
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
        newsHome: {
          loading: false,
          newsArray: [...action.payload]
        }
      };

    case types.newCategoryLoaded:
      return {
        ...state,
        newsCategory: [...action.payload],
      };

    case types.newCountryLoaded:
      return {
        ...state,
        newsCountry: [...action.payload],
      };

    case types.newCDetailLoaded:
      return {
        ...state,
        newSelected: { ...action.payload },
      };

    case types.newDeleted:
      return {
        ...state,   
        newSelected: {
          ...state,
        },
      };

    case types.searchNewsLoaded:
      return {
        ...state,
        searchNews: {      
          loading: false,
          newsArraySearched: [...action.payload]
        }
      };

      case types.searchValue:
        return {
          ...state,
          searchValue: action.payload,
        };


    default:
      return state;
  }
};
