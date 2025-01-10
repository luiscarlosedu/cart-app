import React from "react";
import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";

import CartProvider from "./src/contexts/CartContext";

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor="#fff" barStyle='dark-content' />
        <Routes />
      </CartProvider>
    </NavigationContainer>
  );
}