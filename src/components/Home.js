import React from "react";
import HomeBody from "./HomeBody";
import ParticleComponent from "./ParticleComponent";
import { drawerWidth } from './NavBar';

const Home = () => {
  return (
    <div className= "home"
>
      <ParticleComponent />

      <HomeBody />
    </div>
  );
};

export default Home;
