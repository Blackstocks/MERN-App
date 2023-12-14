import React, { Component, useState } from 'react'
import { Image, Text, View, StyleSheet, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const Login = (props) => {
    const [countryCode, setCountryCode] = useState('+1');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp,setotp] = useState('');

    const handleLogin = () =>{
        props.navigation.navigate('Home')
        console.warn(otp)
    }



    return (
        <View style={styles.parent}>
            <ImageBackground source={require("../images/bg.png")} style={styles.imageBackground}>
                <View style={styles.logoContainer}>
                    <Image style={{ height: 100, width: 100 }} source={require("../images/drone.png")} />
                    <Text style={{ fontSize: 30, color: 'black' }}>Welcome Back!</Text>
                </View>
                <View style={styles.inputContainer} >
                    <View style={styles.container}>
                        {/* Country code selection menu */}
                        <Picker
                            selectedValue={countryCode}
                            style={styles.countryCodePicker}
                            onValueChange={(itemValue) => setCountryCode(itemValue)}
                        >
                            <Picker.Item label="+1US" value="+1" />
                            <Picker.Item label="+44UK" value="+44" />
                            <Picker.Item label="+91IN" value="+91" />
                            {/* Add more items as needed */}
                        </Picker>

                        {/* Text input field for phone number */}
                        <TextInput
                            style={styles.phoneNumberInput}
                            placeholder="Enter phone number"
                            keyboardType="phone-pad"
                            value={phoneNumber}
                            onChangeText={(text) => setPhoneNumber(text)}
                        />
                    </View>
                    <TouchableOpacity style={styles.tbutton} >
                        <Text style={styles.buttonText}>Send OTP</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.textInput} placeholderTextColor="#9999ff" placeholder='OTP' value={otp} onChangeText={(text)=>setotp(text)} />
                    <TouchableOpacity style={styles.tbutton} >
                        <Text style={styles.buttonText} onPress={handleLogin}>Login</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',gap:10,justifyContent:'center'}}>
                        <Text style={{ fontSize: 18, fontWeight: 500, color: "black" }}>Not have an account?</Text>
                        <Text style={{ fontSize: 18, fontWeight: 500, color: "#E9B824" }} onPress={()=>props.navigation.navigate('Register')}>SignUp</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1, // Set flex to 1 to take full height and width
        position:'absolute',
        height:'100%',
        width:'100%'
      },
      imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flex: 3,
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 3,
        width: 300,
        borderRadius: 20,
      },
      countryCodePicker: {
        flex: 2,
      },
      phoneNumberInput: {
        flex: 3, 
        paddingLeft: 8,
        borderLeftWidth:3,
        fontSize:20,

    },
    textInput: {
        borderWidth: 3,
        width: 300,
        borderRadius: 20,
        fontSize: 20,
        padding: 10,
    },
    tbutton: {
        borderWidth: 1,
        width: 300,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#000066',
        margin: 30,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }

})



export default Login;


