import React from "react";
import { View,Text, StyleSheet,Image,Linking } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { TouchableOpacity } from "react-native-gesture-handler";


const DroneCard = ({item}) =>{

    const handleCall = () => {
        const phoneNumber = '+91 8002148251'; // Replace with your actual phone number
        const phoneUrl = `tel:${phoneNumber}`;
        Linking.openURL(phoneUrl);
    }
    

    return(
        <View style={styles.parent}>
            <View style={styles.header}>
                <Image style={styles.image} source={{ uri: item.image }}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.name}</Text>
                    <TouchableOpacity style={styles.flexView}  onPress={handleCall}>
                        <Text style={styles.h4}>+91 1234234212</Text>
                        <FontAwesomeIcon icon={faPhone} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.order}>
                        <Text style={{fontSize:18,textAlign:'center',color:'white'}}>Order Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{fontSize:14,color:'black'}}>{item.desc}</Text>
        </View>
    )
}

const styles = StyleSheet. create({
    parent:{
        alignSelf:'center',
        backgroundColor:'#e6ecff',
        padding:15,
        gap:10,
        borderRadius:10,
        elevation:10,
        margin:10,
    },
    header:{
        flexDirection:'row',
        gap:10,
    },
    image:{
        height:120,
        width:180,
        borderRadius:20,
    },
    titleContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        gap:10,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
    },
    order:{
        backgroundColor:"#809fff",
        borderRadius:10,
        padding:10,
    },
    h4: {
        fontSize: 16,
        color: 'black',
    },
    flexView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

});


export default DroneCard;