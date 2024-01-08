import React, { useState,useEffect } from 'react';
import {SafeAreaView,StatusBar,StyleSheet,View,} from 'react-native';
import Login from './screens/login/login';
import Register from './screens/register/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Profile from './screens/profile/Profile';
import VendorLogin from './screens/login/VendorLogin';
import VendorRegister from './screens/register/VendorRegister';
import VendorPersonalDetails from './screens/register/VendorPersonalDetails';
import HomeScreen from './screens/home/HomeScreen';
import VerifyOTP from './screens/VerifyOTP';
import VendorHomeScreen from './screens/home/VendorHomeScreen';
import VendorProfile from './screens/profile/VendorProfile';
import ForgetPassword from './screens/login/ForgetPassword';





const Stack = createNativeStackNavigator();
const App = () => {
  const [location,setLocation]= useState(null);


  // const requestLocationPermission = async () => {
  //   try {
  //     const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  //     if (result === RESULTS.GRANTED) {
  //       console.log('Location permission granted');
  //     } else {
  //       console.log('Location permission denied');
  //     }
  //   } catch (error) {
  //     console.log('Error requesting location permission:', error);
  //   }
  // };

  // const fetchLocation = async () => {
  //   try {
  //     requestLocationPermission();

  //     // Get current location
  //     Geolocation.getCurrentPosition(
  //       (position) => {
  //         setLocation(position.coords);
  //         console.log(location);
  //       },
  //       (error) => {
  //         console.error('Error getting location:', error);
  //       },
  //       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //     );
  //   } catch (error) {
  //     console.error('Error fetching location:', error);
  //   }
  // };

  // useEffect(() => {
    

  //   fetchLocation();
  // }, []);

  return (
    <GestureHandlerRootView style={{flex:1}}>
      <SafeAreaView style={{flex:1}}>
        <StatusBar translucent backgroundColor="transparent"  barStyle='dark-content' />
        <View style={styles.parent}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='LandingScreen' 
            screenOptions={({route})=>({
              headerStyle: {
                backgroundColor: 'white',
              },
              
            })} 
            >
              <Stack.Screen name='LandingScreen' component={LandingScreen} />
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='Register' component={Register} />
              <Stack.Screen name='VerifyOTP' component={VerifyOTP} />
              <Stack.Screen name='HomeScreen' component={HomeScreen}/>
              <Stack.Screen name='Profile'    component={Profile}/>
              <Stack.Screen name='VendorLogin' component={VendorLogin}/>
              <Stack.Screen name='ForgetPassword' component={ForgetPassword}/>
              <Stack.Screen name='VendorRegister' component={VendorRegister}/>
              <Stack.Screen name='VendorPersonalDetails' component={VendorPersonalDetails}/>
              <Stack.Screen name='VendorHomeScreen' component={VendorHomeScreen}/>
              <Stack.Screen name='VendorProfile' component={VendorProfile}/>
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
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
