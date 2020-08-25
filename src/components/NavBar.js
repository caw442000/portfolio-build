import React, { useState } from "react";
import MobileRightMenuSlider from "@material-ui/core/drawer"
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

import cedric from "../assets/images/cedric-winbush-wbg.jpg";
//CSS Styles

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
    // paddingTop:"2rem"
  },
  avatar: {
    display: "block",
    margin: "2rem auto",
    // paddingBottom: '2rem',
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

const NavBar = () => {
  const [state, setState] = useState({
    right: false
  })
  const [mobileOpen, setMobileOpen] = useState(false);


  const toggleSlider = (slider, open ) => () => {
    setState({...state, [slider]: open});

  };

  const handleDrawerToggle = () => {
    setMobileOpen(() => !mobileOpen);
  };
  const classes = useStyles();
  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={cedric} alt="Cedric Winbush Jr" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem key={key} button>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={lsItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="absolute" style={{ background: "#222" }}>
          <Toolbar>
            {/* <IconButton onClick={toggleSlider("right", true)}> */}
            <IconButton onClick={handleDrawerToggle}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            {/* <MobileRightMenuSlider anchor="right" open= {state.right} onClose = {toggleSlider("right", false)} >
                {sideList("right")}
            </MobileRightMenuSlider> */}
            <MobileRightMenuSlider anchor="right" open= {mobileOpen} onClose = {handleDrawerToggle} >
                {sideList()}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
