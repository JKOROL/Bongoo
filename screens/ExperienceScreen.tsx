import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Text, View } from '../components/Themed';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Restaurant } from '../classes';
import RestaurantMenu from './RestaurantMenu';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ExperienceScreen() {
  
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [scanned, setScanned] = useState(false);
  const [restaurant, setRestaurant] = useState(new Restaurant(-1,"",0,0));
  const navigation = useNavigation();
  const [cart,setCart] = useState<string | null>(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    const fetchData = async () => {
      setCart(await AsyncStorage.getItem("cart"));
    }

    fetchData();
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: {type : string,data:string}) => {
    
    if(data.substring(0,9)!=="bongoo://")
    {
      alert(`Invalid bar code has been scanned!`);
    }
    else{
      setRestaurant(new Restaurant(parseInt(data.substring(9)),"Restaurant Dev",0,0));
      setScanned(true);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.camera}>
      {!scanned && cart ===null? (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      ):(
        <RestaurantMenu setScanned={setScanned} restaurant={restaurant}></RestaurantMenu>
      ) }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    // width: '90%',
     height: '100%',
  },
});
