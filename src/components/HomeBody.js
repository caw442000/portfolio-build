import React from "react";
import {
  Typography,
  Avatar,
  Grid,
  Box,
  Link,
  IconButton,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cedric from "../assets/images/cedric-winbush-wbg.jpg";
import Typed from "react-typed";
// import { loadCSS } from 'fg-loadcss';
// import classNames from "classnames";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import Icon from "@material-ui/core/Icon";

// CSS Styles

const useStyles = makeStyles((theme) => ({
  // root: {
  //   '& > .fa': {
  //     margin: theme.spacing(2),
  //   },
  // },
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
  hr: {
    borderTop: "5px dotted white",
    width: "50%",
    margin: "auto",
  },
  typedContainer: {
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    width: "100%",
    padding: "4rem 2rem",
    textAlign: "center",
    margin: "0 auto",
    zIndex: 1,
    maxWidth: "800px",
   
    minWidth: "300px",
    overflow: 'hidden'
    // height: "700px",
  },
  iconcontainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    // alignContent: "center",
    // alignSelf: "center",
    // alignItems: "center"
  },
  icons: {
    color: "tan",
    fontSize: "3rem",
    margin: "0 1em",
    transition: "transform 50ms ease-out",
    "&:hover": {
      background: 'transparent',
      transform: "scale(1.2)",
    }
  },
  buttonstyle: {
    background: 'transparent',
    // transition: "transform 50ms ease-out",
    "&:hover": {
      background: 'transparent',
      // transform: "scale(1.2)",
    }
  }
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
      <Typography className={classes.iconcontainer} variant="div">
        <Button component={Link} href="https://www.linkedin.com/in/cedricwinbush/" target="_blank" className={classes.buttonstyle}>
          <LinkedInIcon className={classes.icons} />
        </Button>
        <Button component={Link} href="https://github.com/caw442000" target="_blank" className={classes.buttonstyle}>
          <GitHubIcon className={classes.icons} />
        </Button>
      </Typography>
      <Typography className={classes.subtitle} variant="h6">
        HTML/CSS | SASS | LESS | Material-UI | JavaScript | React | Redux |
        ContextApi | NodeJS | Express | Postgres| MongoDB
      </Typography>
    </Box>
  );
};

export default HomeBody;
