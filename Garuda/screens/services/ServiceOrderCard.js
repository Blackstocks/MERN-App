import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import ServiceOrderFormModal from "./ServiceOrderFormModal";


const ServiceOrderCard = () => {
    const [pending, setPending] = useState(true);

    const handleStart = () => {
        setPending(false)

    }
    const handleCall = () => {
        const phoneNumber = '+91 8002148251'; // Replace with your actual phone number
        const phoneUrl = `tel:${phoneNumber}`;
        Linking.openURL(phoneUrl);
    }

    return (
        <View style={styles.parent}>
            <View style={[styles.flexView, { justifyContent: 'space-between' }]}>
                <Text style={styles.h3}>Customer Name</Text>
                <TouchableOpacity style={styles.flexView} onPress={handleCall}>
                    <Text style={styles.h4}>+91 1234234212</Text>
                    <FontAwesomeIcon icon={faPhone} />
                </TouchableOpacity>
            </View>
            <Text style={styles.h4}> Address Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias expedita necessitatibus animi?</Text>

            <Text style={styles.h3}>Service request details</Text>
            <Text style={styles.h4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ea.</Text>
            <View style={[styles.flexView, { justifyContent: 'space-between' }]}>
                <View style={[styles.flexView,]}>
                    <Text style={styles.h3}>Status:</Text>
                    <Text style={styles.h4}>{pending ? 'Pending' : 'In-Progress'}</Text>
                </View>
                {pending && <TouchableOpacity style={styles.touchableButton} onPress={handleStart}>
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>}
                {!pending && <ServiceOrderFormModal />}
            </View>



        </View>
    )
};

const styles = StyleSheet.create({
    parent: {
        padding: 20,
        backgroundColor: '#e6ecff',
        borderRadius: 20,
        margin: 10,
        elevation: 5,
    },
    h3: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
    },
    h4: {
        fontSize: 14,
        color: 'black',
    },
    flexView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    touchableButton: {
        backgroundColor: '#809fff',
        padding: 10,
        borderRadius: 20,
        elevation: 10,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },



});

export default ServiceOrderCard;