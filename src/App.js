import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="app">
        <NavBar />

        {/* <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio">
          <Portfolio />
        </Route> */}
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        <div className="main__app">
          <SideBar />
          <div className="main__app__body">
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
