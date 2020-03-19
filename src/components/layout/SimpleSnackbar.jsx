import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { setMessage, hideMessage } from "../../actions/messageActions";

import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

const SimpleSnackbar = ({ messages, setMessage, hideMessage }) => {
  const classes = useStyles();

  const handleClick = () => {
    setMessage("Hello!");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    hideMessage();
  };

  return (
    <div>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={messages.isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{messages.message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps, { setMessage, hideMessage })(
  SimpleSnackbar
);
