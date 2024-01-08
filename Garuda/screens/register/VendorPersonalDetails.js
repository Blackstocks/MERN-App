import React, {useState} from "react";
import { View, Text ,TextInput,StyleSheet, TouchableOpacity} from "react-native";
import FileInput from "../component/FileInput";
import { ScrollView } from "react-native-gesture-handler";


const VendorPersonalDetails = (props) =>{
    const [companyName,setCompanyName]=useState('');
    const [govtIdFile, setGovtIdFile] = useState(null);
    const [services,setServices]=useState('');
    const [panCardNumber,setPanCardNumber]=useState('');
    const [accountHolderName,setAccountHolderName]= useState('');
    const [ifscCode,setIfscCode] = useState('');
    const [accountNumber,setAccountNumber] = useState('');
    const [certificate,setCertificate] = useState(null);


    const handleSubmit = () =>{
        props.navigation.navigate('VendorHomeScreen');
    }
    
    return(
        <ScrollView style={styles.parent}>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Basic Informations</Text>
                <View style={styles.inputElementView}>
                    <Text style={styles.headingText}>Company Name</Text>
                    <TextInput style={styles.inputText} value={companyName} onChangeText={(text)=>setCompanyName(text)} placeholder="Enter Company Name"/>
                </View>
                <View style={styles.inputElementView}>
                    <Text style={styles.headingText}>Type of Service provider</Text>
                    <TextInput style={styles.inputText} value={services} onChangeText={(text)=>setServices(text)} placeholder="Enter Services"/>
                </View>
                <View style={styles.inputElementView}>
                    <Text style={styles.headingText}>Government Id</Text>
                    <View style={[styles.inputText,styles.inputFile]}>
                        <Text style={{fontSize:16}}>{govtIdFile? govtIdFile[0].name  : "Upload Id"}{govtIdFile&&<Text onPress={()=>setGovtIdFile(null)}> X</Text>}</Text>
                        <FileInput setFile={setGovtIdFile}/>
                    </View>
                </View>
                <View style={styles.inputElementView}>
                    <Text style={styles.headingText}>Certifications</Text>
                    <View style={[styles.inputText,styles.inputFile]}>
                        <Text style={{fontSize:16}}>{certificate? certificate[0].name  : "Upload Certificate"}{certificate&&<Text onPress={()=>setCertificate(null)}> X</Text>}</Text>
                        <FileInput setFile={setCertificate}/>
                    </View>
                </View>
                <View style={styles.inputElementView}>
                    <Text style={styles.headingText}>Pan Card Number</Text>
                    <TextInput style={styles.inputText} value={panCardNumber} onChangeText={(text)=>setPanCardNumber(text)} placeholder="Enter Pan Number"/>
                </View>
                <Text style={styles.title}>Bank Details</Text>
                <View style={styles.inputElementView}>
                    <Text style={styles.headingText}>Account Holder Name</Text>
                    <TextInput style={styles.inputText} value={accountHolderName} onChangeText={(text)=>setAccountHolderName(text)} placeholder="Enter Name"/>
                </View>
                <View style={styles.inputElementView}>
                    <Text style={styles.headingText}>IFSC Code</Text>
                    <TextInput style={styles.inputText} value={ifscCode} onChangeText={(text)=>setIfscCode(text)} placeholder="Enter IFSC"/>
                </View>
                <View style={styles.inputElementView}>
                    <Text style={styles.headingText}>Account Number</Text>
                    <TextInput style={styles.inputText} value={accountNumber} onChangeText={(text)=>setAccountNumber(text)} placeholder="Enter Account Number"/>
                </View>
                <TouchableOpacity style={styles.touchableButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    parent:{
        flex:1,
        height:'100%',
        width:'100%',
        position:'absolute',
    },
    inputContainer:{
        height:'auto',
        padding:20,
        width:'100%'
    },
    title:{
        fontSize:24,
        color:'black',
        fontWeight:'bold',
    },
    inputElementView:{
        height:100,
        padding:10,
    },
    headingText:{
        fontSize:18,
        color:'black',
        fontWeight:'600',
    },
    inputText:{
        borderBottomWidth:2,
        borderBottomColor:'black',
        height:50,
        fontSize:16,
    },
    inputFile:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    touchableButton:{
        alignSelf:'center',
        backgroundColor:'#809fff',
        padding:10,
        borderRadius:20,
    },
    buttonText:{
        fontSize:20,
        color:'white',
    },
});

export default VendorPersonalDetails;