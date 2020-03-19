import { HIDE_MESSAGE } from "../actions/types";

const initialState = {
  message: null,
  isOpen: false
};

export default function messagesReducer(state = initialState, action) {
  const { message } = action;
  /**
   * The error reducer checks for the existence of a 'non null' error field in the action's payload.
   * If it exists, it simply picks the action and captures the error message.
   * Explicit action types need not be defined.
   */
  if (message) {
    return {
      message,
      isOpen: true
    };
  } else if (action.type === HIDE_MESSAGE) {
    return {
      message: null,
      isOpen: false
    };
  }

  return state;
}
