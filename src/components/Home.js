import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import ParticleComponent from "./ParticleComponent";


const Home = () => {
  return (
    <div
      // style={{
      //   width: "100%",
      //   height: "100%",
      //   margin: "0",
      //   padding: "0",
      // }}
    >
      <ParticleComponent />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {/* <NavBar /> */}
        <Header />
      </div>
    </div>
  );
};

export default Home;
