import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <Photos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
