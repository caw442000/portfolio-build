import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanvas: {
    position: "absolute",
  },
});
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Header />
      <Particles
        canvasClassName= {classes.particlesCanvas}
        params={{
          particles: {
            number: {
              value: 70,
              density: {
                enable: true, 
                value_area: 900,
              }
            },
            shape: {
              type: "circle", 
              stroke: {
                width: 1, 
                color: "tomato"
              }
            },
            size: {
              value: 8, 
              random: true,
              anim: {
                enable: true, 
                speed: 5, 
                size_min: 0.1,
                sync: true
              }
            },
            opacity: {
              value: 0.8, 
              random: true,
              anim: {
                enable: true, 
                speed: 1, 
                opacity_min: 0.1,
                sync: true,
              }

            }
          },
        }}
      />
    </>
  );
};

export default Home;
