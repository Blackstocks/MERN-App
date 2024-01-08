import React, { Component, useState } from 'react'
import { Image, Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'

const ForgetPassword = (props) => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [otpBoxVisible, setOtpBoxVisible] = useState(false);
    const [otp, setOtp] = useState('');
    const [newPasswordBoxVisible,setNewPasswordBoxVisible]=useState(false)
    const { roleId } = props.route.params;


    const handleLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // if(!email || !password){
        //     Alert.alert('warning', 'Fill all the Fields');  
        //     return; 
        // }

        // if (!emailRegex.test(email)) {
        //     // Invalid email format, display an error or take appropriate action
        //     Alert.alert('Warning', 'Invalid Email Format');  
        //     return; 
        // }

        props.navigation.navigate('VendorHomeScreen');

    }
    const sendOTP = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Warning', 'Invalid Email Format');
            return;
        }

        setOtpBoxVisible(true);
        Alert.alert('OTP send to your mail: ' + email+' to set new password');

        // api call for sending Otp

    }

    const verifyOTP = () => {
        setOtpBoxVisible(false);
        setNewPasswordBoxVisible(true);
        Alert.alert('OTP verified successfully');
    }

    const setPassword= ()=>{
        if(newPassword===confirmNewPassword){
            Alert.alert('Password is changed successfully');
            if(roleId===2)
                props.navigation.navigate('VendorLogin',{roleId});
        }
        else{
            Alert.alert("Password doesn't match!")
        }
    }


    return (
        <View style={styles.parent}>
            <View style={styles.logoContainer}>
                <Image style={{ height: 100, width: 100 }} source={require("../../images/drone.png")} />
                <Text style={{ fontSize: 30, color: 'black' }}>Welcome Back!</Text>
            </View>

            <View style={styles.inputContainer} >
                {!otpBoxVisible && !newPasswordBoxVisible && <View style={styles.container}>
                    <TextInput style={styles.email} placeholder='Email' keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={(text) => setEmail(text)} />
                    <TouchableOpacity style={styles.tbutton} >
                        <Text style={styles.buttonText} onPress={sendOTP}>Send OTP</Text>
                    </TouchableOpacity>
                </View>}

                {otpBoxVisible && <View style={styles.container}>
                    <TextInput style={styles.email} value={otp} onChangeText={(text) => setOtp(text)} placeholder='Enter OTP ' />
                    <TouchableOpacity style={styles.tbutton} >
                        <Text style={styles.buttonText} onPress={verifyOTP}>Verify OTP</Text>
                    </TouchableOpacity>
                </View>}

                {newPasswordBoxVisible&&<View style={styles.container}>
                    <View style={styles.passwordView}>
                        <TextInput style={styles.password} placeholder='New Password' secureTextEntry={!showPassword} value={newPassword} onChangeText={(text) => setNewPassword(text)} />
                        <TouchableOpacity style={styles.eye} onPress={() => setShowPassword(!showPassword)}>{showPassword ? <FontAwesomeIcon icon={faEyeSlash} size={20} /> : <FontAwesomeIcon icon={faEye} size={20} />}</TouchableOpacity>
                    </View>
                    <View style={styles.passwordView}>
                        <TextInput style={styles.password} placeholder='Confirm New Password' secureTextEntry={!showPassword} value={confirmNewPassword} onChangeText={(text) => setConfirmNewPassword(text)} />
                        <TouchableOpacity style={styles.eye} onPress={() => setShowPassword(!showPassword)}>{showPassword ? <FontAwesomeIcon icon={faEyeSlash} size={20} /> : <FontAwesomeIcon icon={faEye} size={20} />}</TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.tbutton} >
                        <Text style={styles.buttonText} onPress={setPassword}>Set Password</Text>
                    </TouchableOpacity>
                </View>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1, // Set flex to 1 to take full height and width
        position: 'absolute',
        height: '100%',
        width: '100%'
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
        gap: 20,
    },
    email: {
        borderBottomWidth: 2,
        borderBottomColor: '#000066',
        width: 300,
        fontSize: 20,
        padding: 10,
    },
    passwordView: {
        width: 300,
        borderBottomWidth: 2,
        borderBottomColor: '#000066',
        flexDirection: 'row',
        alignItems: 'center'
    },
    password: {
        flex: 0.9,
        fontSize: 20,
        padding: 10,
    },
    eye: {
        flex: 0.1,
    },
    tbutton: {
        width: 300,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#809fff',
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    h3: {
        fontSize: 18,
        color: '#809fff',
    }

})



export default ForgetPassword;
