import { SET_MESSAGE, HIDE_MESSAGE } from "./types";

export function setMessage(message) {
  return {
    type: SET_MESSAGE,
    message: message
  };
}

export function hideMessage() {
  return {
    type: HIDE_MESSAGE
  };
}
