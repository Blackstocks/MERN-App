import React, { useState, useLayoutEffect } from 'react';
import { SafeAreaView, StatusBar, ImageBackground, TouchableWithoutFeedback, StyleSheet, View, Image, Dimensions } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const avatarData = [
  { id: 1, role: 'FARMER', image: require("../images/farmer.png") },
  { id: 2, role: 'VENDOR', image: require("../images/vendor.png") },
  { id: 3, role: 'PILOT', image: require("../images/pilot.png") },
];

const { height } = Dimensions.get('window');

const LandingScreen = (props) => {
  const [isHovered, setIsHovered] = useState("");

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handlePressIn = (id) => {
    setIsHovered(id);
  };

  const handlePressOut = (id) => {
    setIsHovered("");
  };

  const handlePress = (roleId) => {
    if (roleId === 1)
      props.navigation.navigate('Login', { roleId });
    else
      props.navigation.navigate('VendorLogin', { roleId });
  }

  return (
    <LinearGradient colors={['white', 'white']} style={styles.parent}>
      <ImageBackground source={{ uri: 'https://res.cloudinary.com/surajsehgal/image/upload/v1704562670/garuda/j8myv7rf16uhpaixtfbw.png' }} style={styles.backgroundImage}>
        <View style={styles.imageView}>
          <Image style={styles.image} source={{uri:'https://res.cloudinary.com/surajsehgal/image/upload/v1704563610/garuda/ppjjbhxdrryqirsurtyn.png'}}/>
        </View>
        <View style={styles.option} >
          <Text style={styles.h1}>Select Option</Text>
          <View style={styles.flexView}>
            {avatarData?.map((avatar) => (<TouchableWithoutFeedback key={avatar.id} onPressIn={() => handlePressIn(avatar.id)} onPressOut={() => handlePressOut(avatar.id)} onPress={() => handlePress(avatar.id)}>
              <View style={[styles.avtarView]} >
                <Text style={styles.text}>{avatar.role}</Text>
                <Avatar.Image style={{ backgroundColor: 'white' }} size={isHovered === avatar.id ? 35 : 30} source={avatar.image} />
              </View>
            </TouchableWithoutFeedback>))}
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  imageView:{
    top:70,
    alignSelf:'center'
  },
  image:{
    height:70,
    width:230,
  },
  option: {
    bottom: 0,
    position: 'absolute',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  avtarView: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'black',
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    elevation: 10,
    ios: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
  },

  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600'
  },
  h1: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  flexView:{
    gap:15,
    
  },

})


export default LandingScreen;
