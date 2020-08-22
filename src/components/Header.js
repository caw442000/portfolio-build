import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import cedric from "../assets/images/cedric.png";
import Typed from "react-typed";

const Header = () => {
  return (
    <Box>
      <Avatar src={cedric} alt="Cedric Winbush" />
      <Typography variant="h4">
        <Typed strings={["Cedric Winbush Jr"]} typeSpeed={40} />
      </Typography>

      <br />
      <Typography variant="h5">
        <Typed
          strings={["Web Design", "Web Development", "PERN Stack"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
