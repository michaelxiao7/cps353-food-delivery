import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './MenuPage/Card.js';
import Cart from './MenuPage/Cart.js';
import Userform from './CheckoutPage/Userform.js';
import ThankYou from './ThankYouPage/ThankYou.js';
import { CartProvider } from "react-use-cart";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* There's probably a better place to store this style sheet than here
Styles wouldn't work in the App.css though, so I had to make a sheet here*/
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '8vh',
  },
  button: {
    fontSize: 24,
    color: 'white',
  }
});

/* The blue "Checkout Items" button
It's declared as a function in App.js because the Navigation stack is in App.js
This uses useNavigation, which is a navigation hook
There might be a better way to do this. I'm not experienced enough to know though */
export function CheckoutButton() {
  const navigation = useNavigation();
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
        <View style={{
          width: '12em',
          height: '5em',
          backgroundColor: '#1cb0d4',
          alignItems: 'center', 
          justifyContent: 'center',
          borderRadius: 15
        }}
        >
          <Text style={styles.button}>Checkout Items</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

/* The blue "Return to Menu" button */
export function MenuButton() {
  const navigation = useNavigation();
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
        <View style={{
          width: '12em',
          height: '5em',
          backgroundColor: '#1cb0d4',
          alignItems: 'center', 
          justifyContent: 'center',
          borderRadius: 15
        }}
        >
          <Text style={styles.button}>Return to Menu</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

/* The pink "Complete Order" button */
export function OrderButton() {
  const navigation = useNavigation();
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("ThankYou")}>
        <View style={{
          width: '12em',
          height: '5em',
          backgroundColor: '#ffb6c1',
          alignItems: 'center', 
          justifyContent: 'center',
          borderRadius: 15
        }}
        >
          <Text style={styles.button}>Complete Order</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

/* This is the screen the app should always start at
Contains the Cards and Cart (upper and lower half of screen, respectively) */
function MenuScreen() {
  return (
    <div className="Container Screen">
      <h1 className="Title">Welcome to Quesadillos!</h1>
      <CartProvider>
        <Card />
        <Cart />
      </CartProvider>
    </div>
  );
}

/* This is the "second" screen. Accessible via "Checkout Items" button */
function CheckoutScreen() {
  return (
    <div className="Container Screen">
      <Userform />
    </div>
    );
}

/* This is the "third" screen. Contains the BibleAPI */
function ThankYouScreen() {
  return (
    <div className="Container Screen">
      <ThankYou />
    </div>
  );
}

/* I'm using Stack Navigation
This basically just means instead of navigating by changing page URL,
I'm layering new pages on top of old ones */
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="ThankYou" component={ThankYouScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;