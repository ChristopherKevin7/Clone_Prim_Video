import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home/index.js';
import { LiveTV } from './src/screens/LiveTv/index.js';
import { Downloads } from './src/screens/DownloadsPage/index.js';
import { Search } from './src/screens/Search/index.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LiveTV" component={LiveTV} />
        <Stack.Screen name="Downloads" component={Downloads} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

