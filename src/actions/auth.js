import Swal from "sweetalert2";
import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      "user/login",
      { email, password },
      "POST"
    );
    const body = await resp.json();
    if (resp.status === 200) {
      localStorage.setItem("userData", JSON.stringify(body.data))
      dispatch(
        login({
          uid: body.data.id,
          name: body.data.name,
          country: body.data.country,
          isAdmin: body.data.isAdmin,
        })
      );
    } else {
      Swal.fire("Error", body.message, "error");
    }
  };
};

export const loadUserSession = () => {
  return async (dispatch) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData?.token) {
      return;
    }
    dispatch(
      login({
        uid: userData.id,
        name: userData.name,
        country: userData.country,
        isAdmin: userData.isAdmin,
      })
    );
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const logout = () => {
  localStorage.clear();
  return ({
    type: types.authLogout,
    payload: {
      checking: true,
      uid: null,
      name: null,
      country: '',
      isAdmin: null,
    },
  })
}


export const startRegister = (
  firstName,
  lastName,
  email,
  country,
  password,
  confirmPassword
) => {
  if (password !== confirmPassword) {
    return async () => {
      Swal.fire(
        "AlwaysUpdate",
        "Please verify that the password is the same",
        "error"
      );
    };
  } else {
    return async () => {
      const resp = await fetchWithoutToken(
        "user/signup",
        { firstName, lastName, email, country, password },
        "POST"
      );
      const body = await resp.json();
      if (resp.status === 201) {
        Swal.fire("AlwaysUpdate", body.message, "success");
      } else {
        Swal.fire("Error", body.message, "error");
      }
    };
  }
};
