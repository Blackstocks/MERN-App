import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Contact = () =>{
    return(
        <View style={styles.container}>
            <Text style={{fontSize:30,color:'black'}}>Contact Details</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        height:'50%',
        backgroundColor:'#809fff',
        justifyContent:'center',
        alignItems:'center',

    }

});

export default Contact;