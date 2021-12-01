import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Cart from './Cart';
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div className="Screen">
      <h1 className="Title">Welcome to Quesadillos!</h1>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
