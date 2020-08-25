import React, { useState } from 'react'
import Particles from "react-particles-js";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanvas: {
    position: "absolute",
    opacity: "0.3",
    // width: "100%",
    //   height: "100%",
  },
});

const ParticleComponent = () => {
  const classes = useStyles();
  return (
    <div>
    <Particles
        canvasClassName= {classes.particlesCanvas}
        params={{
          particles: {
            move: {
              speed: 5,
            },
            number: {
              value: 45,
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
                speed: 3, 
                size_min: 0.1,
                sync: true
              }
            },
          
            opacity: {
              value: 1, 
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
      
    </div>
  )
}

export default ParticleComponent
