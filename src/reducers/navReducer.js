import { SET_NAV } from "../actions/types";

const initialState = {
  view: "welcome"
};

export default function navReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_NAV:
      return { ...state, view: payload };
    default:
      return state;
  }
}
