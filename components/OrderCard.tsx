import { useState } from "react";
import { TouchableOpacity, Modal, Alert } from "react-native";
import { Order } from "../classes";
import { View,Text  } from "./Themed";

type OrderCardProps={
    order:Order;
}
export default function OrderCard({order}:OrderCardProps){
    
    return (
        <View>
            <TouchableOpacity onPress={() =>{console.log("touché")} }>
                <Text>Commande n°: {order.idOrder} le {order.date}</Text>
            </TouchableOpacity>
            
        </View>
    )
}