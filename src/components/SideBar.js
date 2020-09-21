import React, { useState } from "react";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import Resume from "./Resume";
import Portfolio from "./Portfolio";

import MobileRightMenuSlider from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import {
  Container,
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
  Drawer,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home as HomeIcon,
  Apps,
  ContactMail,
} from "@material-ui/icons";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import { makeStyles } from "@material-ui/core/styles";

import cedric from "../assets/images/cedric-winbush-wbg.jpg";
//CSS Styles

const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   menuSliderContainer: {
//     width: 250,
//     background: "#511",
//     height: "100%",
//     // paddingTop:"2rem"
//   },
//   avatar: {
//     display: "block",
//     margin: "2rem auto",
//     // paddingBottom: '2rem',
//     width: theme.spacing(20),
//     height: theme.spacing(20),
//   },
//   listItem: {
//     color: "tan",
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#511",
  },
  drawerContainer: {
    overflow: "auto",
    margin: "4rem 0",
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
  listText: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <HomeIcon />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  },
];

const SideBar = () => {
  const classes = useStyles();
  // const sideList = () => (
    
  //   <Drawer
  //     className={classes.drawer}
  //     variant="permanent"
  //     classes={{
  //       paper: classes.drawerPaper,
  //     }}
  //   >
  //     <Toolbar />
  //     <div className={classes.drawerContainer}>
  //       <Avatar
  //         className={classes.avatar}
  //         src={cedric}
  //         alt="Cedric Winbush Jr"
  //       />
  //       <Divider />
  //       <List>
  //         {menuItems.map((lsItem, key) => (
  //           <ListItem key={key} button component={Link} to={lsItem.listPath}>
  //             <ListItemIcon className={classes.listItem}>
  //               {lsItem.listIcon}
  //             </ListItemIcon>
  //             <ListItemText primary={lsItem.listText} />
  //           </ListItem>
  //         ))}
  //       </List>
  //       <Divider />
  //       <List>
  //         {["All mail", "Trash", "Spam"].map((text, index) => (
  //           <ListItem button key={text}>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         ))}
  //       </List>
  //     </div>
  //   </Drawer>
  // );

  return (
    <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <Toolbar />
    <div className={classes.drawerContainer}>
      <Avatar
        className={classes.avatar}
        src={cedric}
        alt="Cedric Winbush Jr"
      />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem key={key} button component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.listItem} primary={lsItem.listText} />
          </ListItem>
        ))}
      </List>

    </div>
  </Drawer>
  );
};

export default SideBar;
