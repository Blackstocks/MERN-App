import React, { useState,useEffect } from 'react';
import {SafeAreaView,StatusBar, TouchableWithoutFeedback,StyleSheet,View,} from 'react-native';
import Home from './screens/Home';
import Login from './screens/login';
import OTP from './screens/OTP'
import Register from './screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import LandingScreen from './screens/LandingScreen';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';


const requestLocationPermission = async () => {
  try {
    const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (result === RESULTS.GRANTED) {
      console.log('Location permission granted');
    } else {
      console.log('Location permission denied');
    }
  } catch (error) {
    console.error('Error requesting location permission:', error);
  }
};


const Stack = createNativeStackNavigator();
const App = () => {
  const [location,setLocation]= useState(null);
  useEffect(() => {
    requestLocationPermission();

    // Get current location
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
      },
      (error) => {
        console.error('Error getting location:', error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    console.warn(location)
  },[]);

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar  backgroundColor="#0000b3" barStyle='dark-content' />
      <View style={styles.parent}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='LandingScreen' 
          screenOptions={{
            headerShown:false
          }}
          >
            <Stack.Screen name='LandingScreen' component={LandingScreen} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Verify' component={OTP} />
            <Stack.Screen name='Home' component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent:{
    flex:1,
    position:'absolute',
    width:'100%',
    height:'100%'
  },
  
})


export default App;
