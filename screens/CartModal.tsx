import { useEffect, useState } from "react";
import { View,Text } from "../components/Themed";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CartModal(){
    const [cart,setCart] = useState<string | null>(null);

    const fetchData = async () => {
        setCart(await AsyncStorage.getItem("cart"));
    }

    useEffect( () =>{
        fetchData();
    },[])
    return (
        <View>
            <Text>{cart}</Text>
        </View>
    )
}