import { useEffect, useState } from "react";
import { FlatList, Platform, StyleSheet } from 'react-native';
import { View, Text } from "./Themed";
import * as Location from 'expo-location';
import { LocationObject } from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { Restaurant } from "../classes";
import RestaurantCard from "./RestaurantCard";
const fetch = require('node-fetch');

export default function Localisation({nom} : {nom :string})
{
    const [location, setLocation] = useState<LocationObject>();
    const [errorMsg, setErrorMsg] = useState("");
    const [adress, setAdress] = useState("");
    const [restaurants, setRestaurants] = useState<Array<Restaurant>>([new Restaurant("Kantiin"),new Restaurant("test"),new Restaurant("Kantiin"),new Restaurant("OUI"),new Restaurant("Kantiin")])
    
    
    useEffect(() => {
        (async () => {
            
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            
            let location = await Location.getCurrentPositionAsync({});
            let adressObject = await Location.reverseGeocodeAsync(location.coords);
            if(adressObject[0]["city"])
            {
                setAdress(adressObject[0]["city"])
            }
            setLocation(location);
        })();
    }, []);
    setRestaurants
    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
    
    return (
        <View style={styles.map}>
        <MapView 
        camera = {{
            altitude: location?.coords.altitude??0,
            center: {
                latitude:location?.coords.latitude??0,
                longitude:location?.coords.longitude??0
            },
            heading: location?.coords.heading??0,
            pitch:1,
        }} style={styles.map} 
        >
        <Marker
        key={1}
        coordinate={{latitude:location?.coords.latitude??0,longitude:location?.coords.longitude??0}}
        title={"You"}
        description={"Vous êtes ici !"}
        />
        </MapView>
        <View style={styles.map}>
            <FlatList<Restaurant> 
            data={restaurants}
            renderItem={(restaurants)=>{return(<RestaurantCard key={restaurants.index} restaurant={restaurants.item}></RestaurantCard>)}}></FlatList>
        </View>
        </View>
        );}
        
        const styles = StyleSheet.create({
            container: {
                alignItems: 'center',
                marginHorizontal: 50,
            },
            paragraph: {
                
            },
            map: {
                width: '100%',
                height: '80%',
                margin: 0
            }
        });
        