import React from "react";
import {
  Typography,
  Avatar,
  Grid,
  Box,
  Link,
  IconButton,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cedric from "../assets/images/cedric-winbush-wbg.jpg";
import Typed from "react-typed";
// import { loadCSS } from 'fg-loadcss';
// import classNames from "classnames";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import Icon from "@material-ui/core/Icon";
import SocialButtons from "./SocialButtons";

// CSS Styles

const useStyles = makeStyles((theme) => ({

  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(2),
    // opacity: 0.75,
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginTop: "2rem",
    marginBottom: "2rem",
    textAlign: "center",

  },
  skillsContainer: {
    color: "tan",
    marginTop: "2rem",
    marginBottom: "2rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    // width: "100d%",
  },
  skillsTitle: {
    color: "tan",
    margin: "1rem",
   
    // textAlign: "center",
    // display: "flex",
    

  },
  skillsText: {
    color: "tan",
    margin: "1rem",
    textAlign: "center",
    
    flex: '1',

  },
  hr: {
    borderTop: "5px dotted white",
    width: "50%",
    margin: "auto",
  },
  typedContainer: {
    // position: "fixed",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    width: "100%",
    // padding: "4rem 2rem",
    textAlign: "center",
    margin: "80px auto 0 auto",
    zIndex: 1,
    maxWidth: "600px",

    minWidth: "300px",
    overflow: "hidden",
    // height: "700px",
  },

}));

const HomeBody = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={cedric} alt="Cedric Winbush" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        Cedric Winbush Jr
        {/* <Typed strings={["Cedric Winbush Jr"]} typeSpeed={40} /> */}
      </Typography>
      <Typography className={classes.title} variant="h5">
        Full Stack Web Developer
        {/* <Typed strings={["Full Stack Web Developer"]} typeSpeed={40} /> */}
      </Typography>

      {/* <hr className= {classes.hr} /> */}

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Web Design",
            "Web Development",
            "MERN Stack",
            "PERN Stack",
          ]}
          typeSpeed={50}
          backSpeed={70}
          smartBackspace
          backDelay={1000}
          loop
        />

        {/* <Icon className={classNames(classes.icon, "fa fa-linkedin-square")} /> */}
      </Typography>
      <SocialButtons />

      <Typography className={classes.skillsContainer} variant="h6">
        <p className={classes.skillsTitle}>Frontend:</p>
        <p className={classes.skillsText}>
          HTML/CSS | SASS | LESS | Material-UI | JavaScript | React | Redux |
          ContextApi
        </p>
      </Typography>
      <Typography className={classes.skillsContainer} variant="h6">
        <p className={classes.skillsTitle}>Backend:</p>
        <p className={classes.skillsText}>NodeJS | Express | Postgres| MongoDB</p>
      </Typography>
    </Box>
  );
};

export default HomeBody;
