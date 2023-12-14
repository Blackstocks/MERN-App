import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Services from './Services';
import MyCart from './MyCart';
import Notification from './Notification';
import Profile from './Profile';

const Tab = createBottomTabNavigator();


const Home =({navigation}) =>  {

    return (
        <Tab.Navigator 
        screenOptions={{headerShown:false,}} 
        style={{ flex: 1, backgroundColor: 'white'}}
        tabBarOptions={{
          activeTintColor:'#0000b3',
          inactiveTintColor:'white',
          activeBackgroundColor:'white',
          inactiveBackgroundColor:'#0000b3',

        }}
         >
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="Services" component={Services} />
          <Tab.Screen name="My Cart" component={MyCart} />
          <Tab.Screen name="Notification" component={Notification} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
     
    )
}



export default Home;
