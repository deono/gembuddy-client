import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Typography, Button } from "@material-ui/core";

import { registerUser } from "../../actions/usersActions.js";

const useStyles = makeStyles(theme => ({
  textField: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  paper: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2)
  },
  button: {
    marginTop: theme.spacing(1)
  }
}));

const Register = ({ registerUser }) => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  function handleSubmit() {
    console.log("submit clicked");
    registerUser({ firstName, lastName, email, password });
  }
  return (
    <Paper className={classes.paper} variant="elevation">
      <Typography align="center" color="primary" component="h1">
        Register
      </Typography>
      <form>
        <TextField
          className={classes.textField}
          variant="outlined"
          fullWidth
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={event => setFirstname(event.target.value)}
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          fullWidth
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          fullWidth
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <Button
          fullWidth
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};

export default connect(mapStateToProps, { registerUser })(Register);
