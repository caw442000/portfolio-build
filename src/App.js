import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import {  useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (

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
      {!isMobile && <SideBar /> }

          <div className="main__app__body">
            <Switch>
              {/* <Route path="/resume">
                <Resume />
              </Route> */}
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
  );
}

export default App;
