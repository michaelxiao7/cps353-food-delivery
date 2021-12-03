import * as React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Cart from './Cart';
import { CartProvider } from "react-use-cart";

/* Unused for now, but will use later
I spent so long trying to figure out why I was getting errors for these dependencies
I got them out of the way, so now I'm gonna sleep haha. This is fun! */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* The main function */
function App() {
  return (
    <div className="Container">
      <div className="Screen">
        <h1 className="Title">Welcome to Quesadillos!</h1>
        <CartProvider>
          <Home />
          <Cart />
        </CartProvider>
      </div>
    </div>
  );
}

export default App;