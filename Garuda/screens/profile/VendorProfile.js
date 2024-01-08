import React, { useState } from "react";
import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Avatar } from "react-native-paper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import DocumentPicker from 'react-native-document-picker';
import ImageView from "../component/ImageView";




const VendorProfile = (props) => {

    const img = 'https://theshillongtimes.com/wp-content/uploads/2020/04/aadhar-card-adress_5d0de64080ab5.jpg';

    const image = 'https://cdn4.iconfinder.com/data/icons/instagram-ui-twotone/48/Paul-18-512.png';
    const [editPersonal, setEditPersonal] = useState(false);
    const [editBank, setEditBank] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


    const [profilePic, setProfilePic] = useState(image);
    const [userName, setUserName] = useState('User Name');
    const [serviceType, setServiceType] = useState('XYZABC');
    const [accountHolderName, setAccountHolderName] = useState('Account Holder Name');
    const [ifscCode, setIfscCode] = useState('SBIN0001055');
    const [accountNumber, setAccountNumber] = useState('XXXXXXXXXXX123');



    const handleProfileEdit = (text) => {
        if (text === 'personal')
            setEditPersonal(!editPersonal);

        if (text === 'bank')
            setEditBank(!editBank);
    }

    const handleSignOut = () => {
        props.navigation.navigate('LandingScreen');
    }

    const handleProfilePic = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });
            setProfilePic(result[0].uri);
            console.log('Selected image URI:', result[0].uri);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker
                console.log('User cancelled the picker');
            } else {
                console.error('Error picking document:', err);
            }
        }
    };

    const handleImageView = () => {
        setModalVisible(true);
    }

    return (
        <View style={styles.parent}>
            <ScrollView >
                <View style={[styles.subParent, { backgroundColor: '#809fff' }]}>
                    <View style={[styles.flexView,]}>
                        <View style={styles.imageContainer}>
                            <Avatar.Image size={100} style={styles.image} source={{ uri: profilePic }} />
                            <TouchableOpacity style={styles.imageEdit} onPress={handleProfilePic}>
                                <FontAwesomeIcon size={20} icon={faPlus} />
                            </TouchableOpacity>
                        </View>
                        {editPersonal ? <TextInput style={[styles.name, styles.h1, styles.edit]} value={userName} onChangeText={setUserName} /> : <Text style={[styles.name, styles.h1]}>{userName}</Text>}
                    </View>
                    <View style={styles.flexView}>
                        <Text style={styles.h3}>Service Type :</Text>
                        {editPersonal ? <TextInput style={[styles.h4, styles.edit]} value={serviceType} onChangeText={setServiceType} /> : <Text style={styles.h4}>{serviceType}</Text>}
                    </View>
                    <View style={[styles.flexView]}>
                        <Text style={[styles.h3, { flex: 1.2 }]}>Govt Id :</Text>
                        <View style={[styles.flexView, { flex: 4 }, { justifyContent: 'space-between' }]}>
                            <Text style={styles.h4}>XYZABC</Text>
                            <TouchableOpacity onPress={handleImageView} >
                                <FontAwesomeIcon icon={faEye} size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => handleProfileEdit('personal')}>
                        {editPersonal ? <FontAwesomeIcon size={24} icon={faSquareCheck} style={{ alignSelf: 'flex-end' }} /> : <FontAwesomeIcon icon={faPen} style={{ alignSelf: 'flex-end' }} />}
                    </TouchableOpacity>
                </View>



                <View style={[styles.subParent, styles.border]}>
                    <View style={[styles.flexView, styles.bottomBorder, { justifyContent: 'space-between' }]}>
                        <Text style={[styles.h2,]}>Bank Details</Text>
                        <TouchableOpacity onPress={() => handleProfileEdit('bank')}>
                            {editBank ? <FontAwesomeIcon size={24} icon={faSquareCheck} /> : <FontAwesomeIcon icon={faPen} />}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flexView}>
                        <Text style={styles.h3}>Account Holder :  </Text>
                        {editBank ? <TextInput style={[styles.h4, { maxWidth: 200, }, styles.edit]} value={accountHolderName} onChangeText={setAccountHolderName} /> : <Text style={[styles.h4, { maxWidth: 200, }]}>{accountHolderName}</Text>}
                    </View>
                    <View style={styles.flexView}>
                        <Text style={styles.h3}>IFSC :  </Text>
                        {editBank ? <TextInput style={[styles.h4, { maxWidth: 200, }, styles.edit]} value={ifscCode} onChangeText={setIfscCode} /> : <Text style={[styles.h4, { maxWidth: 200, }]}>{ifscCode}</Text>}
                    </View>
                    <View style={styles.flexView}>
                        <Text style={styles.h3}>Account Number :  </Text>
                        {editBank ? <TextInput style={[styles.h4, { maxWidth: 200, }, styles.edit]} value={accountNumber} onChangeText={setAccountNumber} /> : <Text style={[styles.h4, { maxWidth: 200, }]}>{accountNumber}</Text>}
                    </View>
                </View>



                <View style={[styles.subParent, styles.border]}>
                    <View style={[styles.flexView, styles.bottomBorder, { justifyContent: 'space-between' }]}>
                        <Text style={[styles.h2,]}>Drone/Services Details</Text>
                        <TouchableOpacity onPress={() => handleProfileEdit('drone')}>
                            <FontAwesomeIcon icon={faPen} />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.h4, { maxWidth: 350 }]}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laborum voluptatem corporis a voluptatum ad unde inventore, quae aperiam dicta quos odio rem minima eveniet aspernatur maxime similique? Magnam, consequatur.</Text>
                </View>



                <View style={[styles.subParent, styles.border]}>
                    <View style={[styles.flexView, styles.bottomBorder, { justifyContent: 'space-between' }]}>
                        <Text style={[styles.h2]}>Uploaded Certifications</Text>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faPlus} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.flexView, { justifyContent: 'space-between' }]}>
                        <Text style={[styles.h4, { maxWidth: 300, }]}>XYZABC</Text>
                        <TouchableOpacity onPress={handleImageView}>
                            <FontAwesomeIcon icon={faEye} size={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.flexView, { justifyContent: 'space-between' }]}>
                        <Text style={[styles.h4, { maxWidth: 300, }]}>XYZABC</Text>
                        <TouchableOpacity onPress={handleImageView}>
                            <FontAwesomeIcon icon={faEye} size={20} />
                        </TouchableOpacity>
                    </View>
                </View>


                <TouchableOpacity style={styles.touchableButton} onPress={handleSignOut}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </ScrollView>
            {modalVisible && <ImageView img={img} setModalVisible={setModalVisible} />}
        </View>
    )
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    subParent: {
        padding: 20,
        marginBottom: 20,
        gap: 5,
    },
    border: {
        // borderWidth:2,
        borderRadius: 20,
        // borderColor:'#809fff',
        margin: 10,
        backgroundColor: '#e6ecff',
        elevation: 5,
        overflow: 'hidden',
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
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
    },
    h4: {
        fontSize: 16,
        color: 'black',
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        backgroundColor: 'white',
        elevation: 10,
    },
    imageEdit: {
        position: 'absolute',
        bottom: 10,
        right: 0,
    },

    name: {
        width: '70%',
        textAlign: 'center',
    },
    bottomBorder: {
        borderBottomWidth: 2,
        borderBottomColor: '#809fff',
        marginBottom: 10,
    },
    flexView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    touchableButton: {
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#809fff',

    },

    edit: {
        borderWidth: 1,
        height: 50,
    },

});



export default VendorProfile;