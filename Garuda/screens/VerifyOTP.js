import React, { Component, useState } from 'react'
import { Image, Text, View, StyleSheet, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native'
import Snackbar from 'react-native-snackbar';

const VerifyOTP = (props) => {
    const [otp,setOtp] = useState('');
    const {roleId} = props.route.params;
    
    const handleVerification = () =>{
        if(otp==='123456'){
            if(roleId===1)
                props.navigation.navigate('HomeScreen');
            if(roleId===2)
                props.navigation.navigate('VendorPersonalDetails');
        }
        else{
            Snackbar.show({text: 'Enter correct OTP',duration: Snackbar.LENGTH_SHORT,backgroundColor:'#809fff'});
        }

    }
    return (
        <View style={styles.parent}>
                <View style={styles.droneView}>
                    <Image style={styles.drone} source={require("../images/drone.png")} />
                    <Text style={styles.welcomeText}>Welcome Back!</Text>
                </View>
                <View style={styles.input}>
                    <Text style={styles.OTPText}>Enter the OTP send to </Text>
                    <Text style={styles.OTPText}>+91 11010301</Text>
                    <TextInput style={styles.otpBox} placeholder='OTP'value={otp} onChangeText={(text)=>setOtp(text)}/>

                </View>
                <View style={styles.verifyButton}>
                    <TouchableOpacity  style={styles.button} onPress={handleVerification}>
                        <Text style={styles.buttonText}>Verify OTP</Text>
                    </TouchableOpacity>
                </View>
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
    
    droneView:{
        flex:1,
        justifyContent: 'center',
        alignItems: "center",
    },
    drone:{
        height: 100,
        width: 100,
    },
    welcomeText: {
        padding: 10,
        fontSize: 40,
        color:'black',
    },
    input: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    OTPText:{
        fontSize:20,
        color:'black',
    },
    otpBox:{
        fontSize:20,
        borderWidth:2,
        borderRadius:10,
        width:200,
        textAlign:'center',
        margin:20,
    },
    
    verifyButton: {
        flex:1,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#809fff',
        padding:10,
        width:200,
        borderRadius:10,
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign:'center',
      },
});

export default VerifyOTP;


