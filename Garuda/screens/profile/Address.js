import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Modal, Alert, Pressable,TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'



const Address = ({ profile }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [address,setAddress] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptatum?')
    const [editing,setEditing] = useState(false);


    const handleSubmit = ()=>{
        setEditing(false);
    }

    return (
        <View style={styles.address}>
            <View style={styles.header}>
                <Text style={styles.title}>Address</Text>
                {editing ? <TouchableOpacity onPress={handleSubmit}><FontAwesomeIcon icon={faSquareCheck} size={20}/></TouchableOpacity>:<TouchableOpacity onPress={() => setEditing(!editing)}><FontAwesomeIcon icon={faPen} size={20}/></TouchableOpacity>}
            </View>
            {editing?<TextInput multiline style={[styles.text,styles.border]} value={address} onChangeText={setAddress}/>:<Text style={styles.text}>{address}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    address: {
        marginTop:20,
        margin: 10,
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#e6ecff',
        elevation:5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        margin:10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    text: {
        fontSize: 18,
        color: 'black',
        padding:10,
    },
    
    border:{
        borderWidth:1,
        borderRadius:10,
        paddingLeft:10,
    },
    


})

export default Address;