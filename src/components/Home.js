import React from "react";
import HomeBody from "./HomeBody";
import ParticleComponent from "./ParticleComponent";
import { drawerWidth } from './NavBar';

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        // height: "100%",
        // display: "flex", 
        // margin: "0 auto",
        // justifyContent: "center",
        // alignItems: "center",
        // overflowY: "scroll",
      }}
    >
      <ParticleComponent />

      <HomeBody />
    </div>
  );
};

export default Home;
