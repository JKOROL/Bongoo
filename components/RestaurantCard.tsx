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
    
    return(
        <View>
            <View>
            <Text>{restaurant.nom}</Text>
            </View>
            
            <View>
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