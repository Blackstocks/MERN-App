import React from "react";
import { ScrollView, Text, View } from "react-native";
import ServiceOrderCard from "./ServiceOrderCard";

const VendorServiceOrder = () =>{
    return(
        <ScrollView>
            <ServiceOrderCard/>
            <ServiceOrderCard/>
            <ServiceOrderCard/>
            <ServiceOrderCard/>
        </ScrollView>
    )
};

export default VendorServiceOrder;