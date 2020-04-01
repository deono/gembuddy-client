/**
 * response object
 * {
 *   "status": "ok" or "error",
 *   "data": [] or {},
 *   "message": string,
 *   "error": string
 *  }
 */

import axios from "axios";
import {
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_REGISTER_ERROR
} from "./types.js";

function loadRegisterRequest() {
  return {
    type: GET_REGISTER_REQUEST
  };
}

function loadRegisterSuccess(results) {
  return {
    type: GET_REGISTER_SUCCESS,
    data: results,
    message: results.message
  };
}

function loadRegisterError(error) {
  return {
    type: GET_REGISTER_ERROR,
    data: null,
    message: error
  };
}

export const registerUser = user => async dispatch => {
  dispatch(loadRegisterRequest());
  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/register",
      user
    );
    console.log("registerUser response", response.data);
    if (response.data.status === "ok") {
      // check if the internal status is ok
      // then pass on the data
      dispatch(loadRegisterSuccess(response.data.data));
    } else {
      // if internally there are errors
      // pass on the error, in a correct implementation
      // such errors should throw an HTTP 4xx or 5xx error
      // so that it directs straight to the catch block
      dispatch(loadRegisterError(response.data.message));
    }
  } catch (error) {
    // any HTTP error is caught here
    // can extend this implementation to customize the error messages
    // ex: dispatch(loadTodoError("Sorry can't talk to our servers right now"));
    dispatch(loadRegisterError(error));
  }
};
