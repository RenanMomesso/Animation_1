import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated'
import ProductContainer from "./src/screens/Products/ProductContainer";
import Food from "./src/screens/FoodAnimation/Food";
import FoodList from "./src/screens/FoodAnimation/FoodList";
import { NavigationContainer } from '@react-navigation/native'
import FoodNavigationContainer from "./src/screens/FoodAnimation/FoodNavigation";

export default function App() {
  const animation = useSharedValue(0)
  return (
    <NavigationContainer>
      <FoodNavigationContainer />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
