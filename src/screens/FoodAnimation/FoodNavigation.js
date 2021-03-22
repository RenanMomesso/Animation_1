import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import FoodDetails from './FoodDetails'
import Food from './Food';
import FoodList from './FoodList';

const FoodNavigation = createStackNavigator();

const FoodNavigationContainer = () => {
    return (
        <FoodNavigation.Navigator initialRouteName="Food" screenOptions={{ headerShown: false }}>

            <FoodNavigation.Screen name="Food" component={FoodList} />
            <FoodNavigation.Screen name="foodDetails" component={FoodDetails} />
        </FoodNavigation.Navigator>
    )
};

export default FoodNavigationContainer