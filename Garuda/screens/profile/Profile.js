import React, { useState } from "react";
import {View, Text,StyleSheet, TouchableOpacity} from "react-native";
import Personal from "./Personal";
import Address from "./Address";
import Crop from "./Crop";
import { ScrollView } from "react-native-gesture-handler";



const Profile = (props) =>{
    const [profile , setProfile]=useState(
        {
            name: 'User Name',
            phone:'+91 1123839747',
            email: 'ankita@gmail.com',
            age:'50',
            gender:'Male',
            address:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptatum?',
            crop:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptatum?',
            image:'https://cdn4.iconfinder.com/data/icons/instagram-ui-twotone/48/Paul-18-512.png',    
        }
    );

    const handleSignOut = ()=>{
        props.navigation.navigate('LandingScreen');
    }

    

    return(
        <ScrollView style={styles.parent}>
            <Personal profile={profile} /> 
            <Address profile={profile} />
            <Crop profile={profile} />
            <TouchableOpacity style={styles.button} onPress={handleSignOut}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity> 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        height:'100%',
        width:'100%',
        position:'absolute',
    },
    button:{
        bottom:0,
        margin:10,
        padding:10,
    },
    buttonText:{
        fontSize:24,
        textAlign:'center',
        color:'#809fff',
        fontWeight:'bold'
    }
    
})

export default Profile;