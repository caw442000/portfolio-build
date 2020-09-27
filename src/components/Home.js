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
        // padding: "0",
        // flex: '1'
      }}
    >
      <ParticleComponent />
      {/* <div
        style={{
          overflow: 'hidden'
        }}
      > */}
        {/* <NavBar /> */}
        <HomeBody />
      {/* </div> */}
    </div>
  );
};

export default Home;
