import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity, Modal, Alert } from "react-native";
import { Order } from "../classes";
import { View,Text  } from "./Themed";

type OrderCardProps={
    order:Order;
}
export default function OrderCard({order}:OrderCardProps){

    const navigation = useNavigation();
    
    return (
        <View>
            <TouchableOpacity onPress={() =>{navigation.navigate("OrderDetail",{order:order})} }>
                <Text>Commande n°: {order.idOrder} le {order.date}</Text>
            </TouchableOpacity>
            
        </View>
    )
}