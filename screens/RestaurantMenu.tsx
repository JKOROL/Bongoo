import { FontAwesome } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Restaurant } from "../classes";
import { View, Text } from "../components/Themed";
import { Button, FlatList, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import MenuItem from "../components/MenuItem";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';

type RestaurantMenuProps = {
    restaurant : Restaurant,
    setScanned : Dispatch<SetStateAction<boolean>>
}

type itemDev = {
    nom:string,
    prix:number
}

const items= [
    {
        nom:"Tomate",
        prix:0.90
    },
    {
        nom:"Saucisson",
        prix:3.90
    },
    {
        nom:"Kinder",
        prix:4.90
    },
    {
        nom:"Ricard",
        prix:2
    },
]

export default function RestaurantMenu({restaurant,setScanned}: RestaurantMenuProps){
    const [panier,setPanier] = useState<Array<itemDev>>([]);
    const location = useNavigation();

    const ajoutPanier = async (nom:string,prix:number) => {
        // let panierTemp = panier;
        // panierTemp.push({nom:nom,prix:prix});
        // setPanier(panierTemp);
        setPanier([...panier,{nom:nom,prix:prix}]);

        await AsyncStorage.setItem('cart', JSON.stringify({...panier}));
        
        location.setOptions({
          headerRight: () => (
            <Pressable
              onPress={() => location.navigate("CartModal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="shopping-basket"
                size={25}
                color={"white"}
                style={{ marginRight: 15 }}
              />
              <Text>{panier.length}</Text>
            </Pressable>
          )
        });
    }
    return(
        <View>
            <View style={styles.header}>
                <FontAwesome color={"white"} size={50} name="arrow-left" onPress={()=>setScanned(false)}></FontAwesome>
                <Text>{restaurant.nom}</Text>
            </View>
            <FlatList data={items} renderItem={(item)=><MenuItem key={item.index} nom={item.item.nom} prix={item.item.prix} ajoutPanier={ajoutPanier}></MenuItem>}></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    panier: {
        flexDirection : "row",
        alignItems: "center"
    }
  });

  function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
  }