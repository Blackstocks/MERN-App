import React from "react";
import { View ,Text,StyleSheet} from "react-native";
import OrderCard from "./OrderCard";
import { ScrollView } from "react-native-gesture-handler";



const CurrentServices = () =>{

    const order = [
        {
            id:1,
            name:'Abcdef Ghijkl',
            image:'https://tse1.mm.bing.net/th?id=OIP.C4AXcS40HcoECNthAmCITgHaEo&pid=Api&P=0&h=180',
            desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum pariatur repudiandae vel, quaerat quos, iusto officia enim voluptas',
            status:'Pending',
            time:'10 jun',
        },
        {
            id:2,
            name:'Abcdef Ghijkl',
            image:'https://tse1.mm.bing.net/th?id=OIP.C4AXcS40HcoECNthAmCITgHaEo&pid=Api&P=0&h=180',
            desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum pariatur repudiandae vel, quaerat quos, iusto officia enim voluptas',
            status:'Pending',
            time:'10 jun',
        },
        {
            id:3,
            name:'Abcdef Ghijkl',
            image:'https://tse1.mm.bing.net/th?id=OIP.C4AXcS40HcoECNthAmCITgHaEo&pid=Api&P=0&h=180',
            desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum pariatur repudiandae vel, quaerat quos, iusto officia enim voluptas',
            status:'Completed',
            time:'10 jun',
        },
        {
            id:4,
            name:'Abcdef Ghijkl',
            image:'https://tse1.mm.bing.net/th?id=OIP.C4AXcS40HcoECNthAmCITgHaEo&pid=Api&P=0&h=180',
            desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum pariatur repudiandae vel, quaerat quos, iusto officia enim voluptas',
            status:'Completed',
            time:'10 jun',
        },
        {
            id:5,
            name:'Abcdef Ghijkl',
            image:'https://tse1.mm.bing.net/th?id=OIP.C4AXcS40HcoECNthAmCITgHaEo&pid=Api&P=0&h=180',
            desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum pariatur repudiandae vel, quaerat quos, iusto officia enim voluptas',
            status:'Pending',
            time:'10 jun',
        },
        {
            id:6,
            name:'Abcdef Ghijkl',
            image:'https://tse1.mm.bing.net/th?id=OIP.C4AXcS40HcoECNthAmCITgHaEo&pid=Api&P=0&h=180',
            desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum pariatur repudiandae vel, quaerat quos, iusto officia enim voluptas',
            status:'Completed',
            time:'10 jun',
        },
        {
            id:7,
            name:'Abcdef Ghijkl',
            image:'https://tse1.mm.bing.net/th?id=OIP.C4AXcS40HcoECNthAmCITgHaEo&pid=Api&P=0&h=180',
            desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum pariatur repudiandae vel, quaerat quos, iusto officia enim voluptas',
            status:'Completed',
            time:'10 jun',
        },
        {
            id:8,
            name:'Abcdef Ghijkl',
            image:'https://tse1.mm.bing.net/th?id=OIP.C4AXcS40HcoECNthAmCITgHaEo&pid=Api&P=0&h=180',
            desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum pariatur repudiandae vel, quaerat quos, iusto officia enim voluptas',
            status:'Pending',
            time:'10 jun',
        },
        {
            id:9,
            name:'Abcdef Ghijkl',
            image:'https://tse1.mm.bing.net/th?id=OIP.C4AXcS40HcoECNthAmCITgHaEo&pid=Api&P=0&h=180',
            desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum pariatur repudiandae vel, quaerat quos, iusto officia enim voluptas',
            status:'Pending',
            time:'10 jun',
        },
        {
            id:10,
            name:'Abcdef Ghijkl',
            image:'https://tse1.mm.bing.net/th?id=OIP.C4AXcS40HcoECNthAmCITgHaEo&pid=Api&P=0&h=180',
            desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum pariatur repudiandae vel, quaerat quos, iusto officia enim voluptas',
            status:'Completed',
            time:'10 jun',
        },
    ]

    

    return(
        <ScrollView style={StyleSheet.parent}>
            {order?.map((item,index)=>(item.status==='Pending'&&<OrderCard key={index} item={item} />))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        height:'100%',
        width:'100%',
        position:'absolute',
    }
})

export default CurrentServices;