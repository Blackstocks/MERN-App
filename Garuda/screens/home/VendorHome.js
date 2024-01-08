import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Modal, TextInput } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { NodeBuilderFlags, convertTypeAcquisitionFromJson } from 'typescript';
import Contact from './Contact';

LocaleConfig.locales['en'] = {
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
};

LocaleConfig.defaultLocale = 'en';

const VendorHome = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [markedDates, setMarkedDates] = useState({});
    const [isModalVisible, setModalVisible] = useState(false);
    const [workingHours, setWorkingHours] = useState('');
    const [noOfJobs, setNoOfJobs] = useState('');
    const [editing, setEditing] = useState(false);
    const [selectedDateWorkingDetails, setSelectedDateWorkingDetails] = useState(null);
    const [workingDetails, setWorkingDetails] = useState([]);

    const updateOrCreateWorkingDetails = (updatedDetails) => {
        const existingIndex = workingDetails.findIndex(
          (details) => details.date === updatedDetails.date
        );
      
        if (existingIndex !== -1) {
          // If the object with the specified date exists, update it
          const updatedArray = [...workingDetails];
          updatedArray[existingIndex] = updatedDetails;
          setWorkingDetails(updatedArray);
        } else {
          // If the object with the specified date doesn't exist, add a new object
          setWorkingDetails([...workingDetails, updatedDetails]);
        }
        

        setNoOfJobs('');
        setWorkingHours('');
      };

    const saveWorkingDetails = () => {
        setEditing(false);
        const updatedDetails = {date: selectedDate,job: noOfJobs,hour: workingHours,};

        updateOrCreateWorkingDetails(updatedDetails);
    }

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
        setModalVisible(true);
    };

    useEffect(() => {
        setSelectedDateWorkingDetails((prevDetails) => {
            const Tdetails = workingDetails.find((details) => details.date === selectedDate) || null;
            return Tdetails;
        });
        if (selectedDateWorkingDetails) {
            setMarkedDates({ ...markedDates, [selectedDateWorkingDetails.date]: { selected: true, marked: true, selectedColor: 'green' } });
        }
    },[selectedDate,selectedDateWorkingDetails,workingDetails]);

    const closeModal = () => {
        setModalVisible(false);
    };


    return (
        <View style={styles.container}>
            <Calendar onDayPress={onDayPress} markedDates={markedDates} />
            <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={closeModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.h2}>Working Details for {selectedDate}?</Text>
                        <View >
                            <View style={styles.flexView}>
                                <Text style={styles.h3}>Number of Job per day :</Text>
                                {editing ? <TextInput value={noOfJobs} placeholder='Enter Value' style={[styles.h3, styles.border]} onChangeText={setNoOfJobs} /> : <Text style={styles.h3}>{selectedDateWorkingDetails===null?'NULL':selectedDateWorkingDetails.job}</Text>}
                            </View>
                            <View style={styles.flexView}>
                                <Text style={styles.h3}>Number of working hours :</Text>
                                {editing ? <TextInput value={workingHours} placeholder='Enter Value' style={[styles.h3, styles.border]} onChangeText={setWorkingHours} /> : <Text style={styles.h3}>{selectedDateWorkingDetails===null?'NULL':selectedDateWorkingDetails.hour}</Text>}
                            </View>
                        </View >
                        <View style={[styles.flexView, { justifyContent: 'space-between' }]}>
                            {editing ? <Button title="Save" onPress={saveWorkingDetails} /> : <Button title="Edit" onPress={()=>setEditing(true)} />}
                            {editing ? <Button title="Cancel" onPress={() => setEditing(false)} /> : <Button title="Close" onPress={closeModal} />}
                        </View>
                    </View>
                </View>
            </Modal>
            <Contact/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    selectedDate: {
        marginTop: 20,
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    h2: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black',
        fontWeight: '500',
    },
    flexView: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    h3: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
    },
    border: {
        borderWidth: 1,
        height: 40,
    },
});

export default VendorHome;