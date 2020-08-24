import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cedric from "../assets/images/cedric.png";
import Typed from "react-typed";

// CSS Styles

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    margin: "0 auto",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={cedric} alt="Cedric Winbush" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Cedric Winbush Jr"]} typeSpeed={40} />
      </Typography>

      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Web Design", "Web Development", "PERN Stack"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
