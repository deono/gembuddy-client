import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

import App from "./App";

import store from "./config/store";
import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#666ad1",
      main: "#303f9f",
      dark: "#001970",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ffffff",
      main: "#cfd8dc",
      dark: "#9ea7aa",
      contrastText: "#000"
    },
    background: {
      default: "#666ad1"
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
