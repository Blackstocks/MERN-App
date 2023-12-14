import React, { useState } from 'react';
import {SafeAreaView,StatusBar, TouchableWithoutFeedback,StyleSheet,View,} from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';


const LandingScreen = (props) => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handlePressIn1 = () => {
    setIsHovered1(true);
  };

  const handlePressOut1 = () => {
    setIsHovered1(false);
  };
  const handlePressIn2 = () => {
    setIsHovered2(true);
  };

  const handlePressOut2 = () => {
    setIsHovered2(false);
  };
  const handlePressIn3 = () => {
    setIsHovered3(true);
  };

  const handlePressOut3 = () => {
    setIsHovered3(false);
  };

  const handlePress= ()=>{
    props.navigation.navigate('Login');
  }

  return (
      <LinearGradient colors={['grey', '#3b5998', 'grey']} style={{flex:1}}>
        <View style={styles.parent} >
          <TouchableWithoutFeedback onPressIn={handlePressIn1} onPressOut={handlePressOut1} onPress={handlePress}>
            <View style={[styles.avtarView, isHovered1&&styles.hoveredContainer ]} >
              <Avatar.Image size={isHovered1?80:90} source={require("../images/farmer.png")} />
              <Text style={{fontSize:24}}>Farmer</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPressIn={handlePressIn2} onPressOut={handlePressOut2}>
            <View style={[styles.avtarView, isHovered2&&styles.hoveredContainer ]} >
              <Avatar.Image size={isHovered2?80:90} source={require("../images/vendor.png")} />
              <Text style={{fontSize:24}}>Vendor</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPressIn={handlePressIn3} onPressOut={handlePressOut3}>
            <View style={[styles.avtarView, isHovered3&&styles.hoveredContainer ]} >
              <Avatar.Image size={isHovered3?80:90} source={require("../images/pilot.png")} />
              <Text style={{fontSize:24}}>Pilot</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  parent:{
    flex:1,
    flexDirection:'row',
    gap:30,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    width:'100%',
    height:'100%'
  },
  avtarView:{
    justifyContent:'center',
    alignItems:'center',
  },
  hoveredContainer: {
    backgroundColor: '#1d2b49', 
  },
})


export default LandingScreen;
