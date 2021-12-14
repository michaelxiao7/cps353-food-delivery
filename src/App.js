import * as React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Userform from './Userform';
import { CartProvider } from "react-use-cart";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

function MenuScreen({ navigation }) {
  return (
    <div className="Container Screen">
      <h1 className="Title">Welcome to Quesadillos!</h1>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </div>
  );
}

function CheckoutScreen({ navigation }) {
  return (
    <div className="Container Screen">
      <Userform />
    </div>
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;