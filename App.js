import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Welcome from './pages/Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Signin from './pages/Signin';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}