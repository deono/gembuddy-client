import React from "react";
import { connect } from "react-redux";
import { setNav } from "../../actions/navActions";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";

const ProfileContainer = ({ view }) => {
  function renderView(view) {
    // check if the user is logged in
    // if so, set the view to profile

    switch (view) {
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      case "profile":
        return <Profile />;
      default:
        return <Register />;
    }
  }
  return <div>{renderView(view)}</div>;
};

function mapStateToProps(state) {
  return {
    view: state.nav.view
  };
}

export default connect(mapStateToProps, { setNav })(ProfileContainer);
