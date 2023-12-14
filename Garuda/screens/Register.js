import React from "react";
import { View,StyleSheet,Image,Text,TextInput ,TouchableOpacity, ImageBackground} from 'react-native'

const Register = (props) =>{

    const handleSignUp = () =>{
        props.navigation.navigate('Verify');
    }

    return (
        <View style={styles.parent}>
            <ImageBackground source={require("../images/bg.png")} style={styles.imageBackground}>
                <View style={styles.logoContainer}>
                    <Image style={{width:100,height:100}} source={require("../images/drone.png")} />
                    <Text style={{fontSize:30,color:'black'}}>Welcome Back!</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} placeholderTextColor="#9999ff"   placeholder='User Name'  />
                    <TextInput style={styles.textInput} placeholderTextColor="#9999ff" placeholder='Phone No.'  />  
                    <TextInput style={styles.textInput} placeholderTextColor="#9999ff" placeholder='Email Address'  /> 
                    <TextInput style={styles.textInput} placeholderTextColor="#9999ff" placeholder='Address'  />
                    <TextInput style={styles.textInput} placeholderTextColor="#9999ff" placeholder='Pin'  /> 
                    <TextInput style={styles.textInput} placeholderTextColor="#9999ff" placeholder='State'  /> 
                </View>
                <View style={styles.buttonContainer} >
                    <TouchableOpacity style={styles.tbutton} onPress={handleSignUp}>
                        <Text style={styles.buttonText} >SignUp</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',gap:10,justifyContent:'center'}}>
                        <Text style={{fontSize:18,fontWeight:500,color:"black"}}>Have an account?</Text>
                        <Text style={{fontSize:18,fontWeight:500,color:"#E9B824"}} onPress={()=>props.navigation.navigate('Login')}>SignIn</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles=StyleSheet.create({
    parent: {
        flex: 1, // Set flex to 1 to take full height and width
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
      logoContainer: {
        // No need for position: 'relative'
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputContainer: {
        // No need for position: 'relative'
        alignItems: 'center',
      },
      textInput: {
        fontSize: 20,
        borderBottomWidth: 2,
        color: 'blue',
        width: 300,
        borderBottomColor: '#000066',
        margin: 10,
      },
      buttonContainer: {
        // No need for position: 'relative'
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

export default Register;