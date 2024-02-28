import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home/index.js';
import { LiveTV } from './src/screens/LiveTv/index.js';
import { Downloads } from './src/screens/DownloadsPage/index.js';
import { Search } from './src/screens/Search/index.js';
import { Movies } from './src/screens/Movies/index.js';
import { Series } from './src/screens/Series/index.js';
import { Kids } from './src/screens/Kids/index.js';
import styles from './src/screens/Styles/Styles.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.mainContainer}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
        <Stack.Screen name="LiveTV" component={LiveTV} options={{ headerShown: false}} />
        <Stack.Screen name="Downloads" component={Downloads} options={{ headerShown: false}} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false}} />
        <Stack.Screen name="Movies" component={Movies} options={{ headerShown: false}} />
        <Stack.Screen name="Series" component={Series} options={{ headerShown: false}} />
        <Stack.Screen name="Kids" component={Kids} options={{ headerShown: false}} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

