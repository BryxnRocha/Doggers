import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;