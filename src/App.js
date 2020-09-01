import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
