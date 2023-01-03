import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Image } from 'react-native';
import React, { useState } from "react";
import { Restaurant } from "../classes";
import { View, Text } from "./Themed";

type restaurantCardProps = {
restaurant : Restaurant
}

export default function RestaurantCard(props : restaurantCardProps)
{
    const [restaurant,setRestaurants] = useState<Restaurant>(props.restaurant);
    
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: restaurant.photo}}></Image>
            </View>
            <View >
                <View><Text>{restaurant.nom}</Text></View>
                <View style={{flexDirection: "row"}}>
                    <FontAwesome size={15} style={{  }} color="white" name={restaurant.note==0?"star-o":"star"} />
                    <FontAwesome size={15} style={{  }} color="white" name={restaurant.note<1.5?"star-o":"star"} />
                    <FontAwesome size={15} style={{  }} color="white" name={restaurant.note<2.5?"star-o":"star"} />
                    <FontAwesome size={15} style={{  }} color="white" name={restaurant.note<3.5?"star-o":"star"} />
                    <FontAwesome size={15} style={{  }} color="white" name={restaurant.note<4.5?"star-o":"star"} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderStyle: "solid",
        borderColor: "white",
        borderWidth:1,
        borderRadius: 10,
        margin: 2,
        padding: 2
    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    image:{
        borderRadius: 5,
        width:  40,
        height: 40
    }
});