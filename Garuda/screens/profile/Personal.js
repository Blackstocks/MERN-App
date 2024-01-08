import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Modal, Alert, Pressable, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import DocumentPicker from 'react-native-document-picker';


const Personal = ({ profile }) => {
    const img = 'https://cdn4.iconfinder.com/data/icons/instagram-ui-twotone/48/Paul-18-512.png';

    const [modalVisible, setModalVisible] = useState(false);
    const [editing, setEditing] = useState(false);
    const [userName, setUserName] = useState('User Name');
    const [age, setAge] = useState('50');
    const [gender, setGender] = useState('Male');
    const [email, setEmail] = useState('ankita@gmail.com');
    const [profilePic, setProfilePic] = useState(img);

    const handleSubmit = () => {
        setEditing(false);
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

    return (
        <View style={styles.personal}>
            <View style={styles.header} >
                <View style={styles.imageContainer}>
                    <Avatar.Image size={100} style={styles.image} source={{ uri: profilePic }} />
                    <TouchableOpacity style={styles.imageEdit} onPress={handleProfilePic}>
                        <FontAwesomeIcon size={20} icon={faPlus} />
                    </TouchableOpacity>
                </View>                
                <View style={styles.nameContainer}>
                    {editing ? <TextInput style={[styles.name, styles.border]} value={userName} onChangeText={setUserName} /> : <Text style={styles.name}>{userName}</Text>}
                    {editing ? <TextInput style={[styles.text, styles.border]} value={age} onChangeText={setAge} /> : <Text style={styles.text}>{age}</Text>}
                    {editing ?
                        <View style={styles.border}>
                            <Picker
                                selectedValue={gender}
                                style={styles.countryCodePicker}
                                onValueChange={(itemValue) => setGender(itemValue)}
                            >
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                                <Picker.Item label="Other" value="Other" />
                                {/* Add more items as needed */}
                            </Picker></View>
                        : <Text style={styles.text}>{gender}</Text>}
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.contact} >
                    {editing ? <TextInput style={[styles.text, styles.border]} value={email} onChangeText={setEmail} /> : <Text style={styles.text}>{email}</Text>}
                    <Text style={styles.text}>{profile.phone}</Text>
                </View>
                {editing ? <TouchableOpacity onPress={handleSubmit}><FontAwesomeIcon icon={faSquareCheck} size={20} /></TouchableOpacity> : <TouchableOpacity onPress={() => setEditing(!editing)}><FontAwesomeIcon icon={faPen} size={20} /></TouchableOpacity>}
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    personal: {
        width: '100%',
        backgroundColor: '#809fff',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        gap: 20,
    },
    nameContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    footer: {
        flexDirection: 'row',
        paddingTop: 18,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contact: {
        gap: 5,
    },
    text: {
        fontSize: 18,
        color: 'black',
    },

    border: {
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        height: 50,
        margin: 3,
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


})

export default Personal;