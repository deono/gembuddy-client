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
    padding: theme.spacing(2),
    backgroundColor: "secondary",
    marginBottom: "100px"
  },
  button: {
    marginTop: theme.spacing(1)
  },
  link: {
    color: "#001970",
    textDecoration: "underline"
  }
}));

const Register = ({ registerUser, setNav }) => {
  const [firstName, setFirstname] = useState({
    value: "",
    error: false,
    helperText: ""
  });
  const [lastName, setLastName] = useState({
    value: "",
    error: false,
    helperText: ""
  });
  const [email, setEmail] = useState({
    value: "",
    error: false,
    helperText: ""
  });
  const [password, setPassword] = useState({
    value: "",
    error: false,
    helperText: ""
  });
  const classes = useStyles();

  function handleSubmit() {
    // TODO: form validation
    console.log("submit clicked");
    registerUser({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value
    });

    // clear the form
  }
  return (
    <Paper className={classes.paper} variant="elevation">
      <Typography align="center" color="primary" variant="h4" component="h4">
        Register
      </Typography>

      <form>
        <TextField
          error={firstName.error}
          helperText={firstName.helperText}
          value={firstName.value}
          className={classes.textField}
          color="primary"
          variant="outlined"
          fullWidth
          required
          label="First Name"
          type="text"
          name="firstName"
          onChange={event => setFirstname({ value: event.target.value })}
        />
        <TextField
          error={lastName.error}
          helperText={lastName.helperText}
          value={lastName.value}
          className={classes.textField}
          variant="outlined"
          fullWidth
          required
          label="Last Name"
          type="text"
          name="lastName"
          onChange={event => setLastName({ value: event.target.value })}
        />
        <TextField
          error={email.error}
          helperText={email.helperText}
          value={email.value}
          className={classes.textField}
          variant="outlined"
          fullWidth
          required
          label="Email"
          type="email"
          name="email"
          onChange={event => setEmail({ value: event.target.value })}
        />
        <TextField
          error={password.error}
          helperText={password.helperText}
          value={password.value}
          className={classes.textField}
          variant="outlined"
          fullWidth
          required
          label="Password"
          type="password"
          name="password"
          onChange={event => setPassword({ value: event.target.value })}
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
        <Typography className={classes.textField}>
          Do you have an account?
        </Typography>
        <Typography className={classes.link} onClick={() => setNav("login")}>
          Login instead.
        </Typography>
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
