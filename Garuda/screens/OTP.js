import React, { Component, useState } from 'react'
import { Image, Text, View, StyleSheet, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native'

const Login = (props) => {
    const [email,setEmail] = useState("Email")
    const handleVerification = () =>{
        props.navigation.navigate('Home');
    }
    return (
        <View style={styles.parent}>
            <ImageBackground source={require("../images/bg.png")} style={styles.imageBackground} >
                <View style={styles.droneView}>
                    <Image style={styles.drone} source={require("../images/drone.png")} />
                    <Text style={styles.welcomeText}>Welcome Back!</Text>
                </View>
                <View style={styles.input}>
                    <Text style={styles.OTPText}>Enter the OTP send to </Text>
                    <Text style={styles.OTPText}>+91 11010301</Text>
                    <TextInput style={styles.otpBox}placeholder='OTP'/>

                </View>
                <View style={styles.verifyButton}>
                    <TouchableOpacity  style={styles.button} onPress={handleVerification}>
                        <Text style={styles.buttonText}>Verify OTP</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        position:'absolute',
        height:'100%',
        width:'100%'
    },
    imageBackground: {
        width: '100%', // Take full width of the parent
        height: '100%', // Take full height of the parent
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccffff',
      },
    droneView:{
        flex:1,
        margin: 50,
        justifyContent: 'flex-end',
        alignItems: "center",
    },
    drone:{
        height: 100,
        width: 100,
    },
    welcomeText: {
        padding: 10,
        fontSize: 40,
    },
    input: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    OTPText:{
        fontSize:24,
        color:'black',
    },
    otpBox:{
        fontSize:30,
        borderWidth:3,
        borderRadius:10,
        width:150,
        textAlign:'center',
        margin:20,
    },
    
    verifyButton: {
        flex:1,
        alignItems: 'center',
    },
    button: {
        marginTop:20,
        margin:20,
        backgroundColor: '#3498db',
        borderRadius: 1,
        alignItems: 'center',
        padding:10,
        width:300,
        borderRadius:20,
        backgroundColor:"#31304D",
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 30,
      },
});

export default Login;


