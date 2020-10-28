import Swal from "sweetalert2";
import {
  fetchWithToken,
  fetchWithoutToken,
  getNewById,
  getNewsByCategory,
  getNewsBySearch,
  getNewsByCountry,
} from "../helpers/fetch";
import { types } from "../types/types";

export const newsStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithoutToken("news");
      const body = await resp.json();

      const news = body.news.docs;
      dispatch(newLoaded(news));
    } catch (error) {
      console.log(error);
    }
  };
};

const newLoaded = (news) => ({
  type: types.newsLoaded,
  payload: news,
});

export const newStartDetailLoading = (_id) => {
  return async (dispatch) => {
    try {
      const resp = await getNewById(_id);

      dispatch(newDetailLoaded(resp.yourNew));
    } catch (error) {
      console.log(error);
    }
  };
};

const newDetailLoaded = (newSelected) => ({
  type: types.newCDetailLoaded,
  payload: {
    loading: false,
    ...newSelected,
  },
});

export const newStartCategoryLoading = (category) => {
  return async (dispatch) => {
    try {
      const resp = await getNewsByCategory(category);
      dispatch(newCategoryLoaded(resp.news.docs));
    } catch (error) {
      console.log(error);
    }
  };
};

const newCategoryLoaded = (newsCategory) => ({
  type: types.newCategoryLoaded,
  payload: [...newsCategory],
});

export const newStartCountryLoading = (country) => {
  return async (dispatch) => {
    try {
      const resp = await getNewsByCountry(country);
      dispatch(newCountryLoaded(resp.docs));
    } catch (error) {
      console.log(error);
    }
  };
};

const newCountryLoaded = (newsCountry) => ({
  type: types.newCountryLoaded,
  payload: [...newsCountry],
});

export const eventStartDeleted = () => {
  return async (dispatch, getState) => {
    const { _id } = getState().news.newSelected;

    try {
      const resp = await fetchWithToken(`news/${_id}`, {}, "DELETE");
      const body = await resp.json();
      
      if (body) {        
        dispatch(eventDeleted());
        Swal.fire("AlwaysUpdate", 'New Deleted', "success");
      } else {
        Swal.fire("Error", body.message, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const eventDeleted = () => ({
  type: types.newDeleted,
});

export const searchNewsLoading = (valueSearch) => {
  return async (dispatch) => {
    try {
      const resp = await getNewsBySearch(valueSearch);
      const newsSearched = resp.docs;

      dispatch(searchNewsLoaded(newsSearched));
    } catch (error) {
      console.log(error);
    }
  };
};

const searchNewsLoaded = (newsSearched) => ({
  type: types.searchNewsLoaded,
  payload: newsSearched,
});

export const searchValue = (value) => ({
  type: types.searchValue,
  payload: value,
});
