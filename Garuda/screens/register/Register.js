import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Snackbar from 'react-native-snackbar';

const Register = (props) => {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState("");
  const { roleId } = props.route.params;
  const [otp, setOtp] = useState("");
  const [otpVisible, setOtpVisible] = useState(false);


  const handleSignUp = () => {
    if (!name || !phoneNumber) {
      Snackbar.show({ text: 'Fill all fields', duration: Snackbar.LENGTH_SHORT, backgroundColor: '#809fff' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      // Invalid email format, display an error or take appropriate action
      Snackbar.show({ text: 'Enter Valid Email', duration: Snackbar.LENGTH_SHORT, backgroundColor: '#809fff' });
      return;
    }
    setOtpVisible(true);
    Snackbar.show({ text: 'OTP is sent to ' + countryCode + phoneNumber, duration: Snackbar.LENGTH_SHORT, backgroundColor: '#809fff' });
  }

  const handleResendOtp= ()=>{
    Snackbar.show({ text: 'OTP is sent to ' + countryCode + phoneNumber, duration: Snackbar.LENGTH_SHORT, backgroundColor: '#809fff' });
  }
  const handleVerify = () => {
    if (otp === '123456') {
      props.navigation.navigate('HomeScreen');
    }
    else {
      Snackbar.show({ text: 'Enter correct OTP', duration: Snackbar.LENGTH_SHORT, backgroundColor: '#809fff' });
    }
  }

  return (
    <KeyboardAvoidingView style={styles.parent} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.logoContainer}>
        <Text style={{ fontSize: 30, color: 'black', fontWeight: 500 }}>Welcome Back!</Text>
        <Text style={styles.h5}>Enter your personal informations</Text>
        {/* <View  style={{borderWidth:1,}}> */}
        <Image style={{ width: 260, height: 300 }} source={{ uri: 'https://res.cloudinary.com/surajsehgal/image/upload/v1704650957/garuda/clgecd7yfzych88fbc5a.jpg' }} />
        {/* </View> */}
      </View>
      {!otpVisible && <View style={styles.inputContainer}>
        <TextInput style={[styles.textInput, styles.border]} placeholder='User Name' value={name} onChangeText={(text) => setName(text)} />
        <View style={[styles.container, styles.border]}>
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
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <TextInput style={[styles.textInput, styles.border]} placeholder='Email Address (Optional)' value={email} onChangeText={(text) => setEmail(text)} />
      </View>}
      {!otpVisible && <View style={styles.buttonContainer} >
        <TouchableOpacity style={[styles.tbutton,{marginTop:40,}]} onPress={handleSignUp}>
          <Text style={styles.buttonText} >SignUp</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 500, color: "black" }}>Have an account?</Text>
          <Text style={{ fontSize: 16, fontWeight: 500, color: "#809fff" }} onPress={() => props.navigation.navigate('Login', { roleId })}>SignIn</Text>
        </View>
      </View>}
      {otpVisible && <View style={styles.subContainer}>
        <View style={{ gap: 10, }}>
          <Text style={styles.h3}>OTP</Text>
          <TextInput style={[styles.h4, styles.border, { padding: 10, }]} placeholder='OTP' value={otp} onChangeText={(text) => setOtp(text)} />
        </View>
        <TouchableOpacity  onPress={handleResendOtp} >
          <Text style={[styles.h4,{alignSelf:'flex-start'}]} >Resend?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tbutton} onPress={handleVerify} >
          <Text style={styles.buttonText} >Verify</Text>
        </TouchableOpacity>
      </View>}
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 15,
  },
  textInput: {
    fontSize: 18,
    borderBottomWidth: 2,
    color: 'black',
    width: 350,
    borderBottomColor: 'black',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    width: 350,
    borderBottomColor: 'black',

  },
  countryCodePicker: {
    flex: 1,
  },
  phoneNumberInput: {
    flex: 2,
    fontSize: 16,

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
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  tbutton: {
    width: 350,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#4d4dff',
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
    opacity: 0.5,
  },
  subContainer: {
    flex:2,
    alignItems: 'center',
    gap:10,
},
})

export default Register;