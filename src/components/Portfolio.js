import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
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
    width: "1200px"
    // // display: "flex",
    // // justifyContent: "space-between",
    // // alignItems:"center"
  },
  card: {
    width: "350px",
    minWidth: "350px",
    maxWidth: "400px",
    display: "flex",
    alignItems: "center",
    margin: "10px",
  },
  text: {
    height: "30px",
    color: "black",
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
  },
  linkStyle: {
    color: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"space-between",
    transition: "transform 50ms ease-out",
    textDecoration: "none",
    "&:hover": {
      background: "transparent",
      transform: "scale(1.2)",
      textDecoration: "none",
    },
  },
  iconHolder: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1em",
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
              <CardActionArea
                // component={Link}
                // href={item.portfolioLiveLink}
                // target="_blank"
        
              >
                <CardMedia
                  component="img"
                  alt={item?.portfolioImageAlt || item?.portfolioTitle}
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
              <CardActions className={classes.iconHolder}>
                <Link
                  component={Link}
                  href={item.portfolioGithub}
                  target="_blank"
                  className={classes.linkStyle}
                >
                  <GitHubIcon className={classes.icons} />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.text}
                  >
                    Github
                  </Typography>
                </Link>
                <Link
                  component={Link}
                  href={item.portfolioLiveLink}
                  target="_blank"
                  className={classes.linkStyle}
                >
                  <LinkIcon className={classes.icons} />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.text}
                  >
                    Live Site
                  </Typography>
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
