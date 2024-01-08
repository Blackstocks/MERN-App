import React, { useState } from 'react'
import { Image, Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Snackbar from 'react-native-snackbar';
import { ScrollView } from 'react-native-gesture-handler';

const Login = (props) => {
    const [countryCode, setCountryCode] = useState('+91');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setotp] = useState('');
    const [otpVisible, setOtpVisible] = useState(false);
    const { roleId } = props.route.params;


    const handleOtp = () => {
        if (!phoneNumber) {
            Snackbar.show({ text: 'Enter Phone Number', duration: Snackbar.LENGTH_SHORT, backgroundColor: '#809fff' });
            return;
        }
        setOtpVisible(true);
        Snackbar.show({ text: 'OTP is sent to ' + countryCode + phoneNumber, duration: Snackbar.LENGTH_SHORT, backgroundColor: '#809fff' });
    }

    const handleResendOtp= ()=>{
        Snackbar.show({ text: 'OTP is sent to ' + countryCode + phoneNumber, duration: Snackbar.LENGTH_SHORT, backgroundColor: '#809fff' });
      }
    

    const handleLogin = () => {

        if (otp === '123456') {
            setotp("");
            setOtpVisible(false);

            props.navigation.navigate('HomeScreen');
        }
        else {
            Snackbar.show({ text: 'Enter correct OTP', duration: Snackbar.LENGTH_SHORT, backgroundColor: '#809fff' });
        }

    }



    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.parent} >
            <View style={styles.logoContainer}>
                <Text style={{ fontSize: 30, color: 'black', fontWeight: 500 }}>Welcome Back!</Text>
                <Text style={styles.h5}>Login to continue using the app</Text>
                <Image style={{ height: 300, width: 260, }} source={{ uri: 'https://res.cloudinary.com/surajsehgal/image/upload/v1704566142/garuda/uq1aq5cfrg6sirojvhvx.jpg' }} />
            </View>
            <View style={styles.inputContainer} >
                {!otpVisible && <View style={styles.subContainer}>
                    <View style={{ gap: 10, }}>
                        <Text style={styles.h3}>Phone Number</Text>
                        <View style={[styles.flexView, styles.border]}>
                            {/* Country code selection menu */}
                            <Picker
                                selectedValue={countryCode}
                                style={styles.countryCodePicker}
                                onValueChange={(itemValue) => setCountryCode(itemValue)}
                            >
                                <Picker.Item style={{ fontSize: 16 }} label="+91IN" value="+91" />
                                <Picker.Item style={{ fontSize: 16 }} label="+1US" value="+1" />
                                <Picker.Item style={{ fontSize: 16 }} label="+44UK" value="+44" />
                                {/* Add more items as needed */}
                            </Picker>

                            {/* Text input field for phone number */}
                            <TextInput
                                style={[styles.phoneNumberInput, styles.h4]}
                                placeholder="Enter phone number"
                                keyboardType="phone-pad"
                                value={phoneNumber}
                                onChangeText={(text) => setPhoneNumber(text)}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.tbutton} onPress={handleOtp}>
                        <Text style={styles.buttonText}>Send OTP</Text>
                    </TouchableOpacity>
                </View>}
                {otpVisible && <View style={styles.subContainer}>
                    <View style={{ gap: 10, }}>
                        <Text style={styles.h3}>OTP</Text>
                        <TextInput style={[styles.h4, styles.border, { padding: 10, }]} placeholder='OTP' value={otp} onChangeText={(text) => setotp(text)} />
                        <TouchableOpacity onPress={handleResendOtp} >
                            <Text style={[styles.h4, { alignSelf: 'flex-start' }]} >Resend?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.tbutton} onPress={handleLogin} >
                        <Text style={styles.buttonText} >Login</Text>
                    </TouchableOpacity>
                </View>}
                <View style={[styles.flexView, { gap: 10, }]}>
                    <Text style={{ fontSize: 16, fontWeight: 500, color: "black" }}>Don't have an account?</Text>
                    <Text style={{ fontSize: 16, fontWeight: 500, color: "#809fff" }} onPress={() => props.navigation.navigate('Register', { roleId })}>Create Account</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 2,
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        paddingTop: 30,
        flex: 1,
        alignItems: 'center',
        gap: 5,
    },
    subContainer: {
        alignItems: 'center',
        gap: 30,
    },

    flexView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryCodePicker: {
        flex: 1,
        fontSize: 16,
    },
    phoneNumberInput: {
        flex: 2,
    },
    h3: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    h4: {
        fontSize: 16,
        padding: 5,
        color: 'black',
    },
    h5: {
        fontSize: 16,
        color: 'black',
    },

    tbutton: {
        width: 350,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#4d4dff',
        elevation: 10,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },

    border: {
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 10,
        width: 350,
        elevation: 5,
        borderColor: '#d9d9d9',
        backgroundColor: '#f2f2f2',
        opacity: .5,
    },

})



export default Login;


