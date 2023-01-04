import { useEffect, useState } from "react";
import { FlatList, Platform, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from "./Themed";
import * as Location from 'expo-location';
import { LocationObject } from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { Restaurant } from "../classes";
import RestaurantCard from "./RestaurantCard";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

type LocalisationProps = {
    username:string,
    userLocation: LocationObject,
    restaurant: Array<Restaurant>
}

export default function Localisation({username, userLocation,restaurant} : LocalisationProps)
{
    const [location, setLocation] = useState<LocationObject>(userLocation);
    const [restaurants, setRestaurants] = useState<Array<Restaurant>>(restaurant)
    const [mapHidden, setMapHidden] = useState(false);
    
    return (
        <View style={styles.container}>
        {!mapHidden && (<MapView 
        camera = {{
            altitude: location?.coords.altitude??0,
            center: {
                latitude:location?.coords.latitude??0,
                longitude:location?.coords.longitude??0
            },
            heading: location?.coords.heading??0,
            pitch:1,
            zoom: 18
        }} style={styles.map} 
        >
        <Marker
        key={0}
        coordinate={{latitude:location?.coords.latitude??0,longitude:location?.coords.longitude??0}}
        title={username}
        />
        {restaurants.sort((a,b)=> a.getDistance({latitude : location?.coords.latitude, longitude:location?.coords.longitude})>b.getDistance({latitude : location?.coords.latitude, longitude:location?.coords.longitude})?1:-1).map((restaurant)=><Marker key={restaurant.id} coordinate={{latitude:restaurant.latitude,longitude:restaurant.longitude}} title={restaurant.nom}>
            <MaterialIcons size={30} name={"restaurant"} />
        </Marker>)}
        </MapView>)}
        <TouchableOpacity style={styles.showMap} onPress={()=>setMapHidden(!mapHidden)}>
            <FontAwesome size={30} style={{ justifyContent:"center" }} color="white" name={mapHidden?"angle-double-down":"angle-double-up"} />
        </TouchableOpacity>
        {location && (<FlatList
            style={styles.flatList}
            data={restaurants}
            renderItem={(restaurants)=>{return(<RestaurantCard key={restaurants.index} restaurant={restaurants.item} latlong={{latitude:location?.coords.latitude,longitude:location?.coords.longitude}}></RestaurantCard>)}}></FlatList>)}
        </View>
        );}
        
        const styles = StyleSheet.create({
            container: {
                width:'100%',
                height:'100%'
            },
            paragraph: {
                
            },
            map: {
                width: '100%',
                height: '60%',
                margin: 0
            },
            showMap: {
                justifyContent:"center",
                alignItems:"center"
            },
            flatList: {

            }
        });
        