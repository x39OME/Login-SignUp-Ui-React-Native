import { View, Text, LogBox } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import useAuth from '../hooks/useAuth';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  const {user} = useAuth();

  if(user){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name='Welcome' options={{headerShown: false}} component={WelcomeScreen} />
          <Stack.Screen name='Login' options={{headerShown: false}} component={LoginScreen} />
          <Stack.Screen name='Signup' options={{headerShown: false}} component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}