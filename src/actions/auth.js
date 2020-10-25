import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken("user/login", { email, password }, "POST");
    const body = await resp.json();
    if (resp.status === 200) {
      localStorage.setItem("token", body.token);

      dispatch(
        login({
          uid: body.data.id,
          name: body.data.name,
          isAdmin: body.data.isAdmin,
        })
      );
    } else {
      Swal.fire("Error", body.message, "error");
    }
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const logout = () => ({
  type: types.authLogout,
  payload: {
    checking: true,
    uid: null,
    name: null,
    isAdmin: null,
  },
});

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
        "Error",
        "Por favor verifique que la contraseña sea la misma",
        "error"
      );
    };
  } else {
    return async () => {
      const resp = await fetchSinToken(
        "user/signup",
        { firstName, lastName, email, country, password },
        "POST"
      );
      const body = await resp.json();
      if (resp.status === 200) {
        Swal.fire("EasyNews", body.message, "success");
      } else {
        Swal.fire("Error", body.message, "error");
      }
    };
  }
};
