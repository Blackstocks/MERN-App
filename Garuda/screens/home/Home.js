import React from "react";
import { View ,Text,StyleSheet} from "react-native";
import DroneCard from "../component/DroneCard";
import { ScrollView } from "react-native-gesture-handler";



const Home = () =>{

    const drone = [
        {
            id:1,
            name:"Aero Bee",
            image:'https://tse2.mm.bing.net/th?id=OIP.5qBOKdndmxfyPh1hg-zh8gHaEm&pid=Api&P=0&h=180',
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum pariatur repudiandae vel, quaerat quos, iusto officia enim voluptas voluptatum voluptatem omnis cupiditate quod cumque accusamus eum explicabo rerum optio.",
        },
        {
            id:2,
            name:"Aero Bee",
            image:'https://tse1.mm.bing.net/th?id=OIP.C4AXcS40HcoECNthAmCITgHaEo&pid=Api&P=0&h=180',
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum pariatur repudiandae vel, quaerat quos, iusto officia enim voluptas voluptatum voluptatem omnis cupiditate quod cumque accusamus eum explicabo rerum optio."
        },
        {
            id:3,
            name:"Aero Bee",
            image:'https://tse2.mm.bing.net/th?id=OIP.ueEdORv2lefEeplQRbjPFAHaE8&pid=Api&P=0&h=180',
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum pariatur repudiandae vel, quaerat quos, iusto officia enim voluptas voluptatum voluptatem omnis cupiditate quod cumque accusamus eum explicabo rerum optio.",
        },
        {
            id:4,
            name:"Aero Bee",
            image:'https://tse1.mm.bing.net/th?id=OIP.uH8LJ4eEX4mGAPeCLHemaQHaDQ&pid=Api&P=0&h=180',
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum pariatur repudiandae vel, quaerat quos, iusto officia enim voluptas voluptatum voluptatem omnis cupiditate quod cumque accusamus eum explicabo rerum optio.",
        },
        {
            id:5,
            name:"Aero Bee",
            image:'https://tse1.mm.bing.net/th?id=OIP.C4AXcS40HcoECNthAmCITgHaEo&pid=Api&P=0&h=180',
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum pariatur repudiandae vel, quaerat quos, iusto officia enim voluptas voluptatum voluptatem omnis cupiditate quod cumque accusamus eum explicabo rerum optio."
        }
    ]

   

    return(
        <ScrollView style={styles.parent}>
            <Text style={styles.header}>Available Services</Text>
            {drone?.map((item,index)=>(<DroneCard key={index} item={item}/>))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        height:'100%',
        width:'100%',
        position:'absolute',
    },
    header:{
        fontSize:26,
        color:'black',
        textAlign:'center',
        fontWeight:'bold',
    },
})

export default Home;