import React from "react";
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

export default function SimpleBottomNavigation() {
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
      <BottomNavigationAction label="Users" icon={<PeopleIcon />} />
      <BottomNavigationAction label="Tasks" icon={<AssignmentTurnedInIcon />} />
      <BottomNavigationAction label="Rewards" icon={<CardGiftcardIcon />} />
    </BottomNavigation>
  );
}
