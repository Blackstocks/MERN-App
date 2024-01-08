import React from "react";
import { View, Button } from "react-native";
import DocumentPicker from 'react-native-document-picker';

const FileInput = ({setFile}) => {

    const pickDocument = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            setFile(result);
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
        <View>
            <Button  title="Select File" onPress={pickDocument} />
        </View>
    )
}

export default FileInput;