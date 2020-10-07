import React from "react";
import { makeStyles } from "@material-ui/core";
import signlingo from "../assets/images/signlingo.png";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import {AssignmentInd } from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";


import { portfolioItems } from "./portfolioItems";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // justifyContent: "center",
    // margin: "0 auto",
    // // alignContent: "center",
    // width: "100%",
    // // height: "100%"
  },
  containerBox: {
    // // display: "flex",
    // width: "100%",
    margin: "0 auto",
    // // display: "flex",
    // // justifyContent: "space-between",
    // // alignItems:"center"
  },
  card: {
    width: "350px",
    minWidth: "370px",
    maxWidth: "400px",
    display: "flex",
    alignItems: "center",
    margin: "10px",
  },
  text: {
    height: "30px",
  },
  textStack: {
    height: "30px",
    color: "black",
    margin: "1em 0 2em auto",
    textAlign: "left",
  },
  icons: {
    // color: "tan",
    fontSize: "2rem",
    margin: "5px",
    // margin: "0 1em",
    transition: "transform 50ms ease-out",
    "&:hover": {
      background: "transparent",
      transform: "scale(1.2)",
    },
  },
  linkStyle: {
    color: "black",

    // transition: "transform 50ms ease-out",
    "&:hover": {
      background: "transparent",
      // transform: "scale(1.2)",
    },
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box className={classes.containerBox} component="div">
      <Grid
        className={classes.root}
        container
        justify="center"
        alignItems="center"
      >
        {portfolioItems.map((item, index) => (
          <Grid className={classes.card} key={index} item xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="SignLingo"
                  height="140"
                  image={item.portfolioImage}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {item.portfolioTitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.textStack}
                  >
                    {item.portfolioStack}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.text}
                  >
                    {item.portfolioText}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  component={Link}
                  href={item.portfolioGithub}
                  target="_blank"
                  className={classes.linkStyle}
                >
                  <GitHubIcon className={classes.icons} />
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
