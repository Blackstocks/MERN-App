import React, { Component, useState } from 'react'
import { Image, Text, View, StyleSheet, TextInput, TouchableOpacity,Alert } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'

const VendorLogin = (props) => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [showPassword,setShowPassword] = useState(false);
    const {roleId} = props.route.params;


    const handleLogin = () =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!email || !password){
            Alert.alert('warning', 'Fill all the Fields');  
            return; 
        }

        if (!emailRegex.test(email)) {
            // Invalid email format, display an error or take appropriate action
            Alert.alert('Warning', 'Invalid Email Format');  
            return; 
        }

          props.navigation.navigate('VendorHomeScreen');

    }

    const handleForgetPassword = () =>{
        props.navigation.navigate('ForgetPassword',{roleId});
    };

    return (
        <View style={styles.parent}>
                <View style={styles.logoContainer}>
                    <Image style={{ height: 100, width: 100 }} source={require("../../images/drone.png")} />
                    <Text style={{ fontSize: 30, color: 'black' }}>Welcome Back!</Text>
                </View>
                <View style={styles.inputContainer} >
                    <View style={styles.container}>
                        <TextInput style={styles.email}  placeholder='Email' keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={(text)=>setEmail(text)} />
                        <View style={styles.passwordView}>
                            <TextInput style={styles.password}  placeholder='Password' secureTextEntry={!showPassword} value={password} onChangeText={(text)=>setPassword(text)} />
                            <TouchableOpacity style={styles.eye} onPress={()=>setShowPassword(!showPassword)}>{showPassword?<FontAwesomeIcon icon={ faEyeSlash } size={20}/>:<FontAwesomeIcon icon={ faEye } size={20}/>}</TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={handleForgetPassword}>
                            <Text style={styles.h3}>Forget Password</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.tbutton} >
                        <Text style={styles.buttonText} onPress={handleLogin}>Login</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',gap:10,justifyContent:'center'}}>
                        <Text style={{ fontSize: 16, fontWeight: 500, color: "black" }}>Not have an account?</Text>
                        <Text style={{ fontSize: 16, fontWeight: 500, color: "#809fff" }} onPress={()=>props.navigation.navigate('VendorRegister',{roleId})}>Create Account</Text>
                    </View>
                </View>
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
        gap:20,
      },
    email: {
        borderBottomWidth: 2,
        borderBottomColor:'#000066',
        width: 300,
        fontSize: 18,
        padding: 10,
    },
    passwordView:{
        width:300,
        borderBottomWidth: 2,
        borderBottomColor:'#000066',
        flexDirection:'row',
        alignItems:'center'
    },
    password:{
        flex:0.9,
        fontSize:18,
        padding:10,
    },
    eye:{
        flex:0.1,
    },
    tbutton: {
        width: 300,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#809fff',
        marginTop: 30,
        marginBottom:10,
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        fontWeight:'bold',
    },
    h3:{
        fontSize:16,
        color:'#809fff',
    }

})



export default VendorLogin;


