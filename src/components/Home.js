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
      //   flex: '1'
      // }}
    >
      <ParticleComponent />
      {/* <div
        style={{
          overflow: 'hidden'
        }}
      > */}
        {/* <NavBar /> */}
        <Header />
      {/* </div> */}
    </div>
  );
};

export default Home;
