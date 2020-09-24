import React, { useEffect, useState } from "react";
import Home from "./Home";
import {
  Route,
  Switch,
  useHistory,
  useParams,
  withRouter,
  useLocation,
} from "react-router-dom";
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
  Button,
  MenuItem,
  Menu,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home as HomeIcon,
  Apps,
  ContactMail,
  Menu as MenuIcon,
} from "@material-ui/icons";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { menuItems } from "./menuItems";

import cedric from "../assets/images/cedric-winbush-wbg.jpg";
import { render } from "@testing-library/react";
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
    // flexGrow: 1,
    justifyContent: "Space-Between",
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
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "56px",
    padding: "0 24px",
  },
}));

const NavBar = () => {
  const params = useParams();
  let location = useLocation();
  console.log("params", params);
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [navTitle, setNavTitle] = useState("");

  useEffect(() => {
    let renderTitle = location.pathname;

    if (renderTitle === "/") {
      setNavTitle("HOME");
    } else {
      renderTitle = renderTitle.replace(/\//g, "");
      setNavTitle(renderTitle.toUpperCase());
    }
  }, [location]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  // const [state, setState] = useState({
  //   right: false
  // })
  // const [mobileOpen, setMobileOpen] = useState(false);

  // const toggleSlider = (slider, open ) => () => {
  //   setState({...state, [slider]: open});

  // };

  // const handleDrawerToggle = () => {
  //   setMobileOpen(() => !mobileOpen);
  // };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        position="fixed"
        className={classes.appBar}
        style={{ top: "0", background: "#222" }}
      >
        <Toolbar className={classes.topHeader}>
          <Typography variant="h6" noWrap>
            {navTitle}
          </Typography>
          {isMobile && (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem, key) => {
                  const { listText, listPath } = menuItem;
                  return (
                    <MenuItem
                      key={key}
                      onClick={() => handleMenuClick(listPath)}
                    >
                      {listText}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(NavBar);
