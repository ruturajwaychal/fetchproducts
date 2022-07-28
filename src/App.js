import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CartProvider } from "react-use-cart";

function App({ productItems, cartItems }) {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <Switch>
            <Route exact path="/">
              <Card />
            </Route>
            <Route path="/cart-items">
              <Cart />
            </Route>
          </Switch>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
