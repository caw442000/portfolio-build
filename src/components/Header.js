import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cedric from "../assets/images/cedric-winbush-wbg.jpg";
import Typed from "react-typed";

// CSS Styles

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    margin: theme.spacing(1),
    // opacity: 0.75,
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  typedContainer: {
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    width: "100vw",
    paddingTop: "5rem",
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

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Web Design", "Web Development", "MERN Stack", "PERN Stack"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
      <Typography className={classes.subtitle}variant="h6">
      HTML/CSS | Material-UI | JavaScript | React | Redux | ContextApi | NodeJS | Express | MongoDB | Postgres
      </Typography>
      
    </Box>
  );
};

export default Header;
