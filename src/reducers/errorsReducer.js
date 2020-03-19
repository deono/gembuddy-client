const initialState = {
  error: null
};

export default function errorReducer(state = initialState, action) {
  const { error } = action;
  /**
   * The error reducer checks for the existence of a 'non null' error field in the action's payload.
   * If it exists, it simply picks the action and captures the error message.
   * Explicit action types need not be defined.
   */
  if (error) {
    return {
      error
    };
  }

  return state;
}
