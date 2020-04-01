import React, { useState } from "react";
import { connect } from "react-redux";
import { setNav } from "../../actions/navActions";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Typography, Button } from "@material-ui/core";

// import { registerUser } from "../../actions/usersActions.js";

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

const Login = ({ setNav }) => {
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
    // registerUser({
    //   firstName: firstName.value,
    //   lastName: lastName.value,
    //   email: email.value,
    //   password: password.value
    // });

    //TODO: clear the form
  }
  return (
    <Paper className={classes.paper} variant="elevation">
      <Typography align="center" color="primary" variant="h4" component="h4">
        Login
      </Typography>

      <form>
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
          Don't have an account?
        </Typography>
        <Typography className={classes.link} onClick={() => setNav("register")}>
          Register instead.
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

export default connect(mapStateToProps, { setNav })(Login);
