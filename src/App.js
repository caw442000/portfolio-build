import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="app">
        <NavBar />
      

        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        </div>
    </>
  );
}

export default App;
