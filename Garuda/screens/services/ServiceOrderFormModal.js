import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Modal, Pressable, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ServiceOrderFormModal = () =>{

    const [modalVisible, setModalVisible] = useState(false);

    const handleServiceOrderForm = () =>{
        setModalVisible(true);
    }

    const handaleSubmit = () =>{
        Alert.alert('Successfully Submitted!');
        setModalVisible(false);
    }

    return(
        <View >
            <TouchableOpacity style={styles.touchableButton}   onPress={handleServiceOrderForm}>
                <Text style={styles.buttonText}>Service order form</Text>
            </TouchableOpacity>
            <View style={styles.centeredView}>
                <Modal animationType="slide" transparent={true} visible={modalVisible} 
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.h1}>Service Order Form</Text>
                            <ScrollView style={styles.inputContainer}>
                                <View style={styles.flexView}>
                                    <Text style={styles.h3}>Service Type</Text>
                                    <TextInput style={styles.inputText} placeholder="Enter Service Type"/>
                                </View>
                                <View>
                                    <Text style={styles.h3}>Drone Details in Use Type</Text>
                                    <TextInput style={styles.inputText} placeholder="Enter Details"/>
                                </View>
                                <View>
                                    <Text style={styles.h3}>Addons</Text>
                                    <TextInput style={styles.inputText} placeholder="Enter Details"/>
                                </View>
                                <View style={styles.flexView}>
                                    <Text style={styles.h3}>Estimated Price</Text>
                                    <TextInput style={styles.inputText} placeholder="Enter Details"/>
                                </View>
                                <View style={styles.flexView}>
                                    <Text style={styles.h3}>Discount Price</Text>
                                    <TextInput style={styles.inputText} placeholder="Enter Details"/>
                                </View>
                                <View style={styles.flexView}>
                                    <Text style={styles.h3}>Price Unit</Text>
                                    <TextInput style={styles.inputText} placeholder="Enter Details"/>
                                </View>
                                <View>
                                    <Text style={styles.h3}>Description</Text>
                                    <TextInput multiline={true} numberOfLines={1} style={styles.inputText} placeholder="Enter Details"/>
                                </View>
                                <View style={styles.flexView}>
                                    <Text style={styles.h3}>Total Duration</Text>
                                    <TextInput style={styles.inputText} placeholder="Enter Details"/>
                                </View>
                                <View style={styles.flexView}>
                                    <Text style={styles.h3}>Total Area Covered</Text>
                                    <TextInput style={styles.inputText} placeholder="Enter Details"/>
                                </View>
                            </ScrollView>
                            <View style={styles.flexView}>
                                <Pressable style={[styles.touchableButton,]} onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.buttonText}>Canceal</Text>
                                </Pressable>
                                <Pressable style={[styles.touchableButton,]} onPress={handaleSubmit}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </Pressable>
                            </View>
                            
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
};

const styles =StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width:'90%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        gap:10,
    },
    
    inputContainer:{
        width:'100%',
        gap:10,
    },
   
    flexView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent:'space-between'
    },

    touchableButton: {
        backgroundColor: '#809fff',
        padding: 10,
        borderRadius: 20,
        elevation:10,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
    h1: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
    },
    h2: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
    },
    h3: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
    },
    h4: {
        fontSize: 16,
        color: 'black',
    },
    inputText:{
        borderBottomWidth:2,
        fontSize:16,
    },
});

export default ServiceOrderFormModal;