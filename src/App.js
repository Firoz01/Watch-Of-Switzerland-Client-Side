import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// react-boostrap-import
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Products from "./Pages/Home/Products/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          <Route  path="/products">
            <Products />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
