import { combineReducers } from "redux";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import messagesReducer from "./messagesReducer";
import navReducer from "./navReducer";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  messages: messagesReducer,
  nav: navReducer
});
