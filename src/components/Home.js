import React from "react";
import NavBar from "./NavBar";
import HomeBody from "./HomeBody";
import ParticleComponent from "./ParticleComponent";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "0 auto",
      }}
    >
      <ParticleComponent />

      <HomeBody />
    </div>
  );
};

export default Home;
