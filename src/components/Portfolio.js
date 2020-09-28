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
} from "@material-ui/core";

import { portfolioItems } from "./portfolioItems";

const Portfolio = () => {
  return (
    <Box component="div">
      <Grid container justify="center" alignItems="center">
        {portfolioItems.map((item, index) => (
          <Grid item xs={12} sm={8} md={6}>
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
                    {item.PortfolioTitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.PortfolioText}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Github
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
