import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Restaurant } from "../classes";
import { View, Text } from "./Themed";

type restaurantCardProps = {
restaurant : Restaurant
}

export default function RestaurantCard(props : restaurantCardProps)
{
    const [restaurant,setRestaurants] = useState<Restaurant>(props.restaurant);
    const renderNote = ()=>{
        return (
            <View>
                {restaurant.note==0?(
                    <View style={{flexDirection: "row"}}>
                        <FontAwesome size={15} style={{  }} color="white" name="star-o" />
                        <FontAwesome size={15} style={{  }} color="white" name="star-o" />
                        <FontAwesome size={15} style={{  }} color="white" name="star-o" />
                        <FontAwesome size={15} style={{  }} color="white" name="star-o" />
                        <FontAwesome size={15} style={{  }} color="white" name="star-o" />
                    </View>
                ):restaurant.note<=1.5?(
                    <View style={{flexDirection: "row"}}>
                        <FontAwesome size={15} style={{  }} color="white" name="star" />
                        <FontAwesome size={15} style={{  }} color="white" name="star-o" />
                        <FontAwesome size={15} style={{  }} color="white" name="star-o" />
                        <FontAwesome size={15} style={{  }} color="white" name="star-o" />
                        <FontAwesome size={15} style={{  }} color="white" name="star-o" />
                    </View>
                ):restaurant.note<=2.5?(
                    <View style={{flexDirection: "row"}}>
                        <FontAwesome size={15} style={{  }} color="white" name="star" />
                        <FontAwesome size={15} style={{  }} color="white" name="star" />
                        <FontAwesome size={15} style={{  }} color="white" name="star-o" />
                        <FontAwesome size={15} style={{  }} color="white" name="star-o" />
                        <FontAwesome size={15} style={{  }} color="white" name="star-o" />
                    </View>
                ):restaurant.note<=3.5?(
                    <View style={{flexDirection: "row"}}>
                        <FontAwesome size={15} style={{  }} color="white" name="star" />
                        <FontAwesome size={15} style={{  }} color="white" name="star" />
                        <FontAwesome size={15} style={{  }} color="white" name="star" />
                        <FontAwesome size={15} style={{  }} color="white" name="star-o" />
                        <FontAwesome size={15} style={{  }} color="white" name="star-o" />
                    </View>
                ):restaurant.note<=4.5?(
                    <View style={{flexDirection: "row"}}>
                        <FontAwesome size={15} style={{  }} color="white" name="star" />
                        <FontAwesome size={15} style={{  }} color="white" name="star" />
                        <FontAwesome size={15} style={{  }} color="white" name="star" />
                        <FontAwesome size={15} style={{  }} color="white" name="star" />
                        <FontAwesome size={15} style={{  }} color="white" name="star-o" />
                    </View>
                ):(
                    <View style={{flex : 1,flexDirection: "row"}}>
                        <FontAwesome size={15} style={{  }} color="white" name="star" />
                        <FontAwesome size={15} style={{  }} color="white" name="star" />
                        <FontAwesome size={15} style={{  }} color="white" name="star" />
                        <FontAwesome size={15} style={{  }} color="white" name="star" />
                        <FontAwesome size={15} style={{  }} color="white" name="star" />
                    </View>
                )}
            </View>
        )
    }
    return(
        <View>
            <View>
            <Text>{restaurant.nom}</Text>
            </View>
            
            <View>{renderNote()}</View>
        </View>
    );
}