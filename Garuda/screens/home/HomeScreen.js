import React, { useLayoutEffect,useEffect } from 'react'
import { Text, View, BackHandler } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import MyCart from '../myCart/MyCart';
import Profile from '../profile/Profile';
import { useNavigation } from '@react-navigation/native';



const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    const handleBackButton = () => {
      // If on this screen, close the app
      if (navigation.isFocused()) {
        BackHandler.exitApp();
        return true; // Prevent default behavior (exit the app)
      }
      return false; // Allow default behavior (navigate back)
    };

    // Subscribe to the hardware back button event
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    // Unsubscribe when the component is unmounted
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [navigation]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#809fff',
        },

        tabBarItemStyle: { elevation: 3, marginBottom: 5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, },
        tabBarStyle: { height: 60, },
        // tabBarActiveTintColor:'white',
        // tabBarInactiveTintColor:'#809fff',
        // tabBarActiveBackgroundColor:'#809fff',
        tabBarInactiveBackgroundColor: 'white',

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = '🏠';
          } else if (route.name === 'Profile') {
            iconName = '👨🏽';
          }
          else if (route.name === 'My Cart') {
            iconName = '🛍️';
          }

          return <Text style={{ fontSize: 24 }}>{iconName}</Text>;
        },

      })}



      style={{ flex: 1, backgroundColor: 'white' }}

    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name='My Cart' component={MyCart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>

  )
}



export default HomeScreen;
