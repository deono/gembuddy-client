import React from "react";
import { useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import SimpleSnackbar from "./components/layout/SimpleSnackbar";
import TopMenuBar from "./components/layout/TopMenuBar";
import WelcomeScreen from "./components/layout/WelcomeScreen";
import Register from "./components/auth/Register.jsx";
import "./App.css";

function App() {
  const theme = useTheme();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        style={{
          backgroundColor: theme.palette.primary.light,
          height: "100vh"
        }}
      >
        <TopMenuBar />
        {/* <WelcomeScreen /> */}
        <Register />
        <SimpleSnackbar />
      </Container>
    </React.Fragment>
  );
}

export default App;
