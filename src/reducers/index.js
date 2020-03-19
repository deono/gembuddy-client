import { combineReducers } from "redux";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import errorsReducer from "./errorsReducer";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  errors: errorsReducer
});
