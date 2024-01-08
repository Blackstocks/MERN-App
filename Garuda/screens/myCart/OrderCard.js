import React from "react";
import { View ,Text,Image,StyleSheet,Linking} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'



const OrderCard = ({item}) =>{
    const handleCall = () => {
        const phoneNumber = '+91 8002148251'; // Replace with your actual phone number
        const phoneUrl = `tel:${phoneNumber}`;
        Linking.openURL(phoneUrl);
    }

    return(
        <View style={styles.parent}>
            <View style={styles.header}>
                <Image style={styles.image} source={{uri: item.image}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.h2}>{item.name}</Text>
                    <Text style={styles.status}><Text style={{fontWeight:'bold'}}>Status : </Text>{item.status}</Text>
                    <Text style={{fontSize:14}}>{item.desc}</Text>
                </View>
            </View>
            <View  style={styles.flexView}>
                <TouchableOpacity style={styles.flexView}  onPress={handleCall}>
                    <Text style={styles.h4}>+91 1234234212</Text>
                    <FontAwesomeIcon icon={faPhone} />
                </TouchableOpacity>
                <Text style={styles.footer}>{item.time}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parent:{
        // width:'',
        backgroundColor:'#e6ecff',
        padding:10,
        borderRadius:10,
        margin:10,
        elevation:10,
        gap:10,
    },
    header:{
        flex:10,
        flexDirection:'row',
        gap:10,
    },
    image:{
        flex:5,
        height:150,
        borderRadius:10,
    },
    textContainer:{
        flex:7,
        margin:5,
    },
    h2:{
        fontSize:18,
        color:'black',
        fontWeight:'bold',

    },
    status:{
        fontSize:18,
        color:'black'
    },
    footer:{
        flex:1,
        textAlign:'right',
    },
    flexView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
});

export default OrderCard;