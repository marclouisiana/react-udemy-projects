import { AUTH_START, AUTH_FAIL, AUTH_SUCCESS } from "./actions";

export const authStart = () => {
  return {
    type: AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: AUTH_SUCCESS,
    authData: authData
  };
};

export const authFail = error => {
  return {
    type: AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
  };
};
