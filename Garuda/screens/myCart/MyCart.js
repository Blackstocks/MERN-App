import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CurrentServices from "./CurrentServices";
import PastServices from "./PastServices";
const Tab = createMaterialTopTabNavigator();


const MyCart = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: { backgroundColor: '#809fff' },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'white',
            tabBarIndicatorStyle: { backgroundColor: 'black' },
          }}
        >
            <Tab.Screen name="Current Order" component={CurrentServices} />
            <Tab.Screen name="Past Order" component={PastServices} />
        </Tab.Navigator>
    )
}

export default MyCart;