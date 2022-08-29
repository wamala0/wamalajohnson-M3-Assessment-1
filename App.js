// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/Splash'
import LoginScreen from './screens/Login'
import DetailsScreen from './screens/Details'
import HomeScreen from './screens/Home/Home'
import SignUpScreen from './screens/SignUp'



const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen}  options= {{title: 'Splash Screen '}}/>
        <Stack.Screen name="Login" component={LoginScreen}  options= {{headerShown:false}}/>
        <Stack.Screen name="Details" component={DetailsScreen} options= {{title: 'Details Screen '}} />
        <Stack.Screen name="Home" component={HomeScreen} options= {{title: 'Welcome To Best_African_Maids_App '}}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options= {{title: 'SignUp Screen '}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;