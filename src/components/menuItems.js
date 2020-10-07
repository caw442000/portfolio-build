import React from "react";

import {
  Home as HomeIcon,
  Apps,
  ContactMail,
} from "@material-ui/icons";


export const menuItems = [
  {
    listIcon: <HomeIcon />,
    listText: "Home",
    listPath: "/",
    
  },
  // {
  //   listIcon: <AssignmentInd />,
  //   listText: "Resume",
  //   listPath: "/resume",
    
  // },
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

