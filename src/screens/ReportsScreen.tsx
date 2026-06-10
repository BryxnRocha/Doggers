import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ReportsScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reports</Text>
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

export default ReportsScreen;