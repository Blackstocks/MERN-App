import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView,Platform,Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'


const VendorRegister = (props) => {
    const [name, setName] = useState("");
    const [countryCode, setCountryCode] = useState('+91IN');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const {roleId} = props.route.params;

    const handleSignUp = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!name || !phoneNumber || !countryCode || !email || !password || !confirmPassword){
            Alert.alert('Warning', 'Fill all the fields');
            return;
        }

        if (!emailRegex.test(email)) {
            Alert.alert('Warning', 'Invalid Email Format');
            return;
        }

        if(password!==confirmPassword){
            Alert.alert('Warning', 'Password does not match ');
            return;
        }

        props.navigation.navigate('VerifyOTP',{roleId});
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':'height'} style={styles.parent}>
            <View style={styles.logoContainer}>
                <Image style={{ width: 100, height: 100 }} source={require("../../images/drone.png")} />
                <Text style={{ fontSize: 30, color: 'black' }}>Welcome Back Vendor!</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='User Name' value={name} onChangeText={(text) => setName(text)} />
                <View style={[styles.container,styles.flexView]}>
                    {/* Country code selection menu */}
                    <Picker
                        selectedValue={countryCode}
                        style={styles.countryCodePicker}
                        onValueChange={(itemValue) => setCountryCode(itemValue)}
                    >
                        <Picker.Item label="+91IN" value="+91" />
                        <Picker.Item label="+1US" value="+1" />
                        <Picker.Item label="+44UK" value="+44" />
                        {/* Add more items as needed */}
                    </Picker>

                    {/* Text input field for phone number */}
                    <TextInput
                        style={styles.phoneNumberInput}
                        placeholder="Enter phone no"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                    />
                </View>
                <TextInput style={styles.textInput} placeholder='Email Address' value={email} onChangeText={(text) => setEmail(text)} />
                <View style={[styles.passwordView,styles.flexView]}>
                    <TextInput style={styles.password} placeholder='Password' secureTextEntry={!showPassword} value={password} onChangeText={(text) => setPassword(text)} />
                    <TouchableOpacity style={styles.eye} onPress={() => setShowPassword(!showPassword)}>{showPassword ? <FontAwesomeIcon icon={faEyeSlash} size={20} /> : <FontAwesomeIcon icon={faEye} size={20} />}</TouchableOpacity>
                </View>
                <View style={[styles.passwordView,styles.flexView]}>
                    <TextInput style={styles.password} placeholder='Confirm Password' secureTextEntry={!showPassword} value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)} />
                    <TouchableOpacity style={styles.eye} onPress={() => setShowPassword(!showPassword)}>{showPassword ? <FontAwesomeIcon icon={faEyeSlash} size={20} /> : <FontAwesomeIcon icon={faEye} size={20} />}</TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.tbutton} onPress={handleSignUp}>
                    <Text style={styles.buttonText} >SignUp</Text>
                </TouchableOpacity>
                <View style={[styles.flexView,{gap:10}]}>
                    <Text style={{fontSize:16,fontWeight:500,color:"black"}}>Have an account?</Text>
                    <Text style={{fontSize:16,fontWeight:500,color:"#809fff"}} onPress={()=>props.navigation.navigate('VendorLogin',{roleId})}>LogIn</Text>
                </View>
            </View>
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1, // Set flex to 1 to take full height and width
        position: 'absolute',
        height: '100%',
        width: '100%'
    },

    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flex: 2,
        alignItems: 'center',
        padding:20,
    },
    textInput: {
        fontSize: 18,
        height:60,
        borderBottomWidth: 2,
        color: 'black',
        width: 300,
        borderBottomColor: 'black',
    },
    container: {
        height:60,
        borderBottomWidth: 2,
        width: 300,
        borderBottomColor: 'black',
    },
    flexView:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryCodePicker: {
        flex: 1,
    },
    phoneNumberInput: {
        flex: 1.3,
        fontSize: 18,

    },
    passwordView: {
        width: 300,
        height:60,
        borderBottomWidth: 2,
        borderBottomColor: 'black',

    },
    password: {
        flex: 0.9,
        fontSize: 18,
    },
    eye: {
        flex: 0.1,
    },
    tbutton: {
        padding: 10,
        width:300,
        borderRadius: 20,
        backgroundColor: '#809fff',
        alignSelf:'center',
        margin:20,
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    
})

export default VendorRegister;