import React from 'react'
import Particles from "react-particles-js";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanvas: {
    width: "100%",
      height: "100%",
  },
});

const ParticleComponent = () => {
  return (
    <div>
    <Particles
      height={window.outerHeight}
      params={{
        particles: {
          number: {
            value: 50
          },
          size: {
            value: 3
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            }
          }
        }
      }}
    />
      
    </div>
  )
}

export default ParticleComponent
