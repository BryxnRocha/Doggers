import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function RelocationScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reubicación</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default RelocationScreen;