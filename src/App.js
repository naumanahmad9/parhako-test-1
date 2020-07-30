import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";

function App() {
  return (
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
  );
}

export default App;
