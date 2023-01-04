import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { Restaurant } from "../classes";
import { View, Text } from "./Themed";

type restaurantCardProps = {
restaurant : Restaurant,
latlong : {latitude:number,longitude:number}
}

export default function RestaurantCard(props : restaurantCardProps)
{
    const [restaurant,setRestaurants] = useState<Restaurant>(props.restaurant);
    const [distance,setDistance] = useState( restaurant.getDistance(props.latlong));

    const renderNote = () =>{
        let stars = [];
        let star=0
        for (let i = 0; i <= 5; i=i+0.5) {
            console.log(i);
            if(i<=restaurant.note)
            {
                star++
            }
            if(i%1==0 && i>0)
            {
                stars.push(<FontAwesome size={15} style={{  }} color="white" name={star==0?"star-o":star==1?"star-half-o":"star"} />)
                star=0;
            }
        }
        return stars;
    }
    
    return(
        <TouchableOpacity style={styles.container} onPress={()=>alert("Touché")}>
            <View style={styles.imageContainer}>
                {restaurant.photo !==""?(
                    <Image style={styles.image} source={{uri: restaurant.photo}}></Image>
                ):(
                    <MaterialIcons size={30} style={{  }} color="white" name={"restaurant"} />
                )}
                
            </View>
            <View >
                <View><Text>{restaurant.nom} {distance ? distance>1000?distance/1000+" km":distance+" m":""}</Text></View>
                <View style={{flexDirection: "row"}}>
                    {renderNote().map(etoile=>{return (etoile)})}
                </View>
            </View>
        </TouchableOpacity>
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