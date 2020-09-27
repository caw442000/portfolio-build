import React, { useState } from "react";
import Home from "./Home";
import { useHistory } from "react-router-dom";
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
  Drawer as MUIDrawer,
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
import { menuItems } from "./menuItems";

import cedric from "../assets/images/cedric-winbush-wbg.jpg";
//CSS Styles

const drawerWidth = 240;

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
  avatarText: {
    color: "tan",
    textAlign: "center",
  },
}));

const SideBar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <MUIDrawer
      className={classes.drawer}
      anchor="left"
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
        <Typography className={classes.avatarText} variant="h5">
          Cedric Winbush Jr
        </Typography>
        <p className={classes.avatarText} >
        cawinbushjr@gmail.com
        </p>

        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem
              button
              key={key}
              button
              onClick={() => history.push(lsItem.listPath)}
            >
              <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={lsItem.listText}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </MUIDrawer>
  );
};

export default SideBar;
