import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Localisation from '../components/Localisation';
import { Text, View } from '../components/Themed';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Localisation nom="Jonathan"></Localisation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: "100%"
  },
});
