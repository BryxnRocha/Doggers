import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';
import ReportsScreen from './src/screens/ReportsScreen';
import RelocationScreen from './src/screens/RelocationScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ title: 'Cuenta' }}
        />

        <Stack.Screen
          name="Reports"
          component={ReportsScreen}
          options={{ title: 'Reports' }}
        />

        <Stack.Screen
          name="Relocation"
          component={RelocationScreen}
          options={{ title: 'Reubicación' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;