import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Rutas/Home";
import BlackFlag from "./Rutas/BlackFlag";
import Syndicate from "./Rutas/Syndicate";
import MetalGear from "./Rutas/MetalGear";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blackflag" component={BlackFlag} />
          <Route path="/syndicate" component={Syndicate} />
          <Route path="/metalgear" component={MetalGear} />
        </Switch>
      </BrowserRouter>
    );
  }
}
