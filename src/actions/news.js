import Swal from "sweetalert2";
import {
  fetchConToken,
  fetchSinToken,
  getNewById,
  getNewsByCategory,
  getNewsBySearch,
} from "../helpers/fetch";
import { types } from "../types/types";

export const newsStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchSinToken("news");
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

export const eventStartDeleted = () => {
  return async (dispatch, getState) => {
    const { _id } = getState().news.newSelected;

    try {
      const resp = await fetchConToken(`news/${_id}`, {}, "DELETE");
      const body = await resp.json();

      if (body.ok) {
        dispatch(eventDeleted());
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
      const news = resp.docs;

      dispatch(searchNewsLoaded(news));
    } catch (error) {
      console.log(error);
    }
  };
};

const searchNewsLoaded = (news) => ({
  type: types.searchNewsLoaded,
  payload: news,
});
