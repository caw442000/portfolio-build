import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cedric from "../assets/images/cedric-winbush-wbg.jpg";
import Typed from "react-typed";
// import { loadCSS } from 'fg-loadcss';
// import classNames from "classnames";
import LinkedInIcon  from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



import Icon from '@material-ui/core/Icon';




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
  },
  hr: {
    borderTop: "5px dotted white", 
    width: "50%",
    margin: "auto",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    paddingTop: "5rem",
    textAlign: "center",
    margin: "0 auto",
    zIndex: 1,
    maxWidth: "600px",
    minWidth: "300px", 
    height: "700px",
  },
}));

const Header = () => {
  const classes = useStyles();

  // React.useEffect(() => {
  //   const node = loadCSS(
  //     'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
  //     document.querySelector('#font-awesome-css'),
  //   );

  //   return () => {
  //     node.parentNode.removeChild(node);
  //   };
  // }, []);

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={cedric} alt="Cedric Winbush" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Cedric Winbush Jr"]} typeSpeed={40} />
      </Typography>
      <Typography className={classes.title} variant="h5">
        <Typed strings={["Full Stack Web Developer"]} typeSpeed={40} />
      </Typography>

      
        {/* <hr className= {classes.hr} /> */}

        

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Web Design", "Web Development", "MERN Stack", "PERN Stack"]}
          typeSpeed={50}
          backSpeed={70}
          smartBackspace
          backDelay={1000}
          loop
        />

        {/* <Icon className={classNames(classes.icon, "fa fa-linkedin-square")} /> */}
      </Typography>
      <Typography>
        <LinkedInIcon /><GitHubIcon/>
      </Typography>
      <Typography className={classes.subtitle}variant="h6">
      HTML/CSS | SASS | LESS | Material-UI | JavaScript | React | Redux | ContextApi | NodeJS | Express | Postgres| MongoDB 
      </Typography>

      
      
    </Box>
  );
};

export default Header;
