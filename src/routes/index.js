import React from "react";
import { Switch, Route } from "react-router-dom";
//when wanting to make a route private, use routes/Route.js and watch https://medium.com/javascript-in-plain-english/routing-and-navigation-in-react-cffc26e8a389
import Home from "../screens/Home";
import Provincia from "../screens/Provincia";

export default function Routes() {
  return (
    <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/provincia" component={Provincia}></Route>

      <Route component={Home}></Route>
    </Switch>
  );
}
