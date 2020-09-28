import React from "react";
import { Typography, Link, Button } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  iconcontainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  icons: {
    color: "tan",
    fontSize: "3rem",
    margin: "0 1em",
    transition: "transform 50ms ease-out",
    "&:hover": {
      background: "transparent",
      transform: "scale(1.2)",
    },
  },
  buttonstyle: {
    background: "transparent",
    // transition: "transform 50ms ease-out",
    "&:hover": {
      background: "transparent",
      // transform: "scale(1.2)",
    },
  },
}));

const SocialButtons = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.iconcontainer}>
      <Button
        component={Link}
        href="https://www.linkedin.com/in/cedricwinbush/"
        target="_blank"
        className={classes.buttonstyle}
      >
        <LinkedInIcon className={classes.icons} />
      </Button>
      <Button
        component={Link}
        href="https://github.com/caw442000"
        target="_blank"
        className={classes.buttonstyle}
      >
        <GitHubIcon className={classes.icons} />
      </Button>
    </Typography>
  );
};

export default SocialButtons;
