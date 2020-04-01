import React from "react";
import { connect } from "react-redux";
import { setNav } from "../../actions/navActions";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    backgroundColor: "#9fa8da"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function TopMenuBar({ setNav }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: theme.palette.primary.main }}>
          <Typography
            onClick={() => setNav("welcome")}
            variant="h6"
            className={classes.title}
          >
            GemBuddy
          </Typography>
          <IconButton
            onClick={() => {
              setNav("register");
            }}
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default connect(null, { setNav })(TopMenuBar);
