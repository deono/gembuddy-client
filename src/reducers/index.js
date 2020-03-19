import { combineReducers } from "redux";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import messagesReducer from "./messagesReducer";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  messages: messagesReducer
});
