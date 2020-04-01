import axios from "axios";
import { GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGIN_ERROR } from "./types";

function loadLoginRequest() {
  return {
    type: GET_LOGIN_REQUEST
  };
}

function loadLoginSuccess(results) {
  return {
    type: GET_LOGIN_SUCCESS,
    data: results,
    message: results.message
  };
}

function loadLoginError(error) {
  return {
    type: GET_LOGIN_ERROR,
    data: null,
    message: error
  };
}

export function login(user) {
  return async function(dispatch) {
    dispatch(loadLoginRequest);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );
      console.log("login response", response.data);
      const { data, message } = response.data;
      if (response.data.status === "ok") {
        // check if the internal status is ok
        // then pass on the data
        dispatch(loadLoginSuccess(data));
      } else {
        // if internally there are errors
        // pass on the error, in a correct implementation
        // such errors should throw an HTTP 4xx or 5xx error
        // so that it directs straight to the catch block
        dispatch(loadLoginError(message));
      }
    } catch (error) {
      // any HTTP error is caught here
      // can extend this implementation to customize the error messages
      // ex: dispatch(loadTodoError("Sorry can't talk to our servers right now"));
      dispatch(loadLoginError(error));
    }
  };
}
