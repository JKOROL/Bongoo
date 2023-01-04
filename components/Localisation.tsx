import { useEffect, useState } from "react";
import { FlatList, Platform, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from "./Themed";
import * as Location from 'expo-location';
import { LocationObject } from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { Restaurant } from "../classes";
import RestaurantCard from "./RestaurantCard";

export default function Localisation({nom} : {nom :string})
{
    const [location, setLocation] = useState<LocationObject>();
    const [errorMsg, setErrorMsg] = useState("");
    const [adress, setAdress] = useState("");
    const [restaurants, setRestaurants] = useState<Array<Restaurant>>([])
    const [mapHidden, setMapHidden] = useState(false);
    
    
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
            setRestaurants([new Restaurant(1,"Kantiin",47.850812,1.892373),new Restaurant(2,"test",47.850812,1.892373),new Restaurant(3,"Kantiin",47.850812,1.892373),new Restaurant(4,"OUI",47.850812,1.892373),new Restaurant(5,"Kantiin",47.900812,1.892373)])
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
        title={nom}
        description={adress}
        />
        {restaurants.map((restaurant)=><Marker key={restaurant.id} coordinate={{latitude:restaurant.latitude,longitude:restaurant.longitude}} title={restaurant.nom}></Marker>)}
        </MapView>)}
        <TouchableOpacity style={styles.showMap}>
            <Text>Masquer carte</Text>
        </TouchableOpacity>
        <FlatList
            style={styles.flatList}
            data={restaurants}
            renderItem={(restaurants)=>{return(<RestaurantCard key={restaurants.index} restaurant={restaurants.item} latlong={{latitude:location?.coords.latitude??0,longitude:location?.coords.latitude??0}}></RestaurantCard>)}}></FlatList>
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

            },
            flatList:{
                
            },
        });
        