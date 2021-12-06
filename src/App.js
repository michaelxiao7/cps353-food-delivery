import * as React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Cart from './components/Cart';
import { CartProvider } from "react-use-cart";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function CheckOutButton() {
  const navigation = useNavigation();
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
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

function HomeScreen({ navigation }) {
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

function DetailsScreen({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <View style={{
          backgroundColor: 'cornflowerblue',
          alignItems: 'center', 
          justifyContent: 'center',
          borderRadius: 15
        }}>
        <Text style={{ color: 'white' }}>Go to Home</Text>
      </View>
    </TouchableOpacity>
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;