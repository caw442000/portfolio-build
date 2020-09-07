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

const Portfolio = () => {
  return (
    <Box component="div">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="SignLingo"
                height="140"
                image={signlingo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  SignLingo
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam debitis excepturi repellendus veniam quibusdam incidunt alias, nihil molestias repellat placeat quod eos est quo illo, dignissimos dolor eveniet sapiente consequuntur.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
