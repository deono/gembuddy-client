import { SET_NAV } from "./types";

export function setNav(view) {
  return {
    type: SET_NAV,
    payload: view
  };
}
