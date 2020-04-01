import {
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_ERROR
} from "../actions/types";

const initialState = {
  loading: false,
  token: null
};

export default function authReducer(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_LOGIN_REQUEST:
      return { ...state, loading: true };
    case GET_LOGIN_SUCCESS:
      return { ...state, loading: false, token: data };
    default:
      return state;
  }
}
