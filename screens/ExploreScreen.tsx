import { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Restaurant } from '../classes';
import * as Location from 'expo-location';

import EditScreenInfo from '../components/EditScreenInfo';
import Localisation from '../components/Localisation';
import { Text, View } from '../components/Themed';
import { LocationObject } from 'expo-location';
import RestaurantCard from '../components/RestaurantCard';

export default function ExploreScreen() {
  
  const [errorMsg, setErrorMsg] = useState("");
  const [adress, setAdress] = useState<Location.LocationGeocodedAddress>();
  const [location, setLocation] = useState<LocationObject>();
  const [restaurants, setRestaurants] = useState<Array<Restaurant>>();
  
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      
      let location = await Location.getCurrentPositionAsync({});
      let adressObject = await Location.reverseGeocodeAsync(location.coords);
      if(adressObject[0])
      {
        setAdress(adressObject[0])
      }
      setLocation(location);
      setRestaurants([new Restaurant(1,"Kantiin",47.909222,1.907329),new Restaurant(2,"test",47.850812,1.892373),new Restaurant(3,"Kantiin",47.850812,1.892373),new Restaurant(4,"OUI",47.850812,1.892373),new Restaurant(5,"Kantiin",47.900812,1.892373)])
    })();
  }, []);
  
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  
  return (
    <View style={styles.container}>
    {location && restaurants && (<Localisation username="Jonathan" userLocation={location} restaurant={restaurants} ></Localisation>)}
    </View>
  );
}
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        height: "100%"
      },
      flatList:{

      },
    });
    