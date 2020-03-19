import React from "react";
import { useTheme } from "@material-ui/core/styles";
import diamond from "../../img/diamond.png";

const WelcomeScreen = () => {
  const theme = useTheme();
  return (
    <div>
      <h1
        style={{
          color: theme.palette.secondary.main,
          textAlign: "center",
          fontSize: "60px"
        }}
      >
        GemBuddy
      </h1>
      <img src={diamond} alt="" style={{ maxWidth: "100%" }} />
    </div>
  );
};

export default WelcomeScreen;
