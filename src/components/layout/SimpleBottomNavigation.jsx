import React from "react";
import { connect } from "react-redux";
import { setNav } from "../../actions/navActions";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";

const useStyles = makeStyles({
  root: {
    width: "100vw"
  }
});

function SimpleBottomNavigation({ setNav }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Users"
        icon={<PeopleIcon onClick={() => setNav("users")} />}
      />
      <BottomNavigationAction
        label="Tasks"
        icon={<AssignmentTurnedInIcon onClick={() => setNav("tasks")} />}
      />
      <BottomNavigationAction
        label="Rewards"
        icon={<CardGiftcardIcon onClick={() => setNav("rewards")} />}
      />
    </BottomNavigation>
  );
}

export default connect(null, { setNav })(SimpleBottomNavigation);
