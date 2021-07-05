import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./authActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(registerRequest());

  axios
    .post("/users/signup", credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(registerSuccess(response.data));
    })
    .catch((error) => dispatch(registerError(error)));
};

const logIn = (credentials) => (dispatch) => {
  dispatch(loginRequest());

  axios
    .post("/users/login", credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(loginSuccess(response.data));
    })
    .catch((error) => dispatch(loginError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  axios
    .get("/users/current")
    .then(({ data }) => dispatch(getCurrentUserSuccess(data)))
    .catch((error) => getCurrentUserError(error));
};

const logOut = () => (dispatch) => {
  dispatch(logoutRequest());

  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(logoutSuccess());
    })
    .catch((error) => dispatch(logoutError(error)));
};

export { register, logOut, logIn, getCurrentUser };
