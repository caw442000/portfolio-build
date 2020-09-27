import React from "react";

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

export const menuItems = [
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
    listText: "Contact",
    listPath: "/contact",
  
  },
];

