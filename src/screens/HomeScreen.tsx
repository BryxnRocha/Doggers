import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import MapView from 'react-native-maps';

function HomeScreen(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -33.4489,
          longitude: -70.6693,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <TouchableOpacity
        style={styles.accountButton}
        onPress={() => navigation.navigate('Account' as never)}
      >
        <Text style={styles.buttonText}>Cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.relocationButton}
        onPress={() => navigation.navigate('Relocation' as never)}
      >
        <Text style={styles.buttonText}>Reubicación</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.reportsButton}
        onPress={() => navigation.navigate('Reports' as never)}
      >
        <Text style={styles.buttonText}>Reports</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },

  accountButton: {
    position: 'absolute',
    top: 60,
    left: 20,

    backgroundColor: '#1E1E1E',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
  },

  relocationButton: {
    position: 'absolute',
    bottom: 40,
    left: 20,

    backgroundColor: '#1E1E1E',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
  },

  reportsButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,

    backgroundColor: '#1E1E1E',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default HomeScreen;