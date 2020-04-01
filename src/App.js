import React from "react";
import { connect } from "react-redux";
// import { useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import SimpleSnackbar from "./components/layout/SimpleSnackbar";
import TopMenuBar from "./components/layout/TopMenuBar";
import SimpleBottomNavigation from "./components/layout/SimpleBottomNavigation";
import WelcomeScreen from "./components/layout/WelcomeScreen";
import Users from "./components/users/Users";
import Tasks from "./components/tasks/Tasks";
import Rewards from "./components/rewards/Rewards";
import ProfileContainer from "./components/profile/ProfileContainer";
import "./App.css";

function App({ view }) {
  // const theme = useTheme();

  // render the appropriate component as set in the redux store
  function renderView(view) {
    switch (view) {
      case "welcome":
        return <WelcomeScreen />;
      case "login":
      case "register":
      case "profile-container":
        return <ProfileContainer />;
      case "users":
        return <Users />;
      case "tasks":
        return <Tasks />;
      case "rewards":
        return <Rewards />;
      default:
        return <WelcomeScreen />;
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <TopMenuBar />
        {renderView(view)}
        <SimpleSnackbar />
      </Container>
      <SimpleBottomNavigation />
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    view: state.nav.view
  };
};

export default connect(mapStateToProps, {})(App);
