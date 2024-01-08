import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity, Image,} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons/faArrowLeftLong'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const ImageView = ({img,setModalVisible}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=>setModalVisible(false)}>
                <FontAwesomeIcon icon={faArrowLeftLong} size={40} color={'white'}/>
            </TouchableOpacity>
            <View style={styles.imageContainer} >
                <Image style={styles.image} source={{uri:img}}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        width:'100%',
        backgroundColor:'black',
        position:'absolute',
        opacity:0.9,
    },
    button:{
        flex:1,
        borderWidth:1,
    },
    imageContainer:{
        flex:15,
        justifyContent:'center',
    },
    image:{
        width:'100%',
        height:250,
        backgroundColor:'white',
    },
   
});


export default ImageView;