import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { User } from '../classes';
import OrderCard from '../components/OrderCard';

import { Text, View } from '../components/Themed';

export default function ProfilScreen() {
  const [user, setUser] = useState(new User(-1,""));

  const handleConnection = () => {
    setUser(new User(0,"Jonathan"));
  }

  const handleRegister = () => {
    
  }

  const handleDisconnect = () => {
    setUser(new User(-1,""));
  }
  return (
    <View style={styles.container}>
      {user.id<0?(
        <View>
        <Text>Vous n'êtes pas connecté</Text>
        <TouchableOpacity onPress={handleConnection}><Text>Se connecter</Text></TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}><Text>S'inscrire</Text></TouchableOpacity>
        </View>
      ):(
        <View>
          <View style={styles.header}>
            <FontAwesome size={30} color="white" name={"address-book"} />
            <Text>{user.nom}</Text>
            <TouchableOpacity onPress={handleDisconnect}><FontAwesome size={30} color="white" name={"power-off"} /></TouchableOpacity>
          </View>
          <View>
            <FlatList
            data={user.getOrders(10,0)}
            renderItem={(item)=><OrderCard order={item.item}></OrderCard>}>

            </FlatList>
          </View>
        </View>
        
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width:"100%",
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
