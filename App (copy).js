import React, { useState , useEffect } from 'react'
import { StyleSheet, Text, View, ToastAndroid, Button , TouchableOpacity , TextInput } from 'react-native';
import SamaseButton from './src/components/SamaseButton';
import SamaseTextInput from './src/components/SamaseTextInput';
import LoginScreen from './src/screens/LoginScreen';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './src/screens/RegisterScreen';
import UserScreen from './src/screens/UserScreen';
import InitScreen from './src/screens/InitScreen';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createStackNavigator()
var SharedPreferences = require('react-native-shared-preferences');
export default function App() {
  useEffect(()=>{
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Splash"}>
          <Tab.Screen 
            name={"Splash"}
            component={SplashScreen}
            options={{headerShown:false}}/>
          <Tab.Screen
            name={"Init"}
            options={{headerShown : false}}
            component={InitScreen}/>

          <Tab.Screen
            name={"Login"}
            options={{headerShown : false}}
            component={LoginScreen}/>

          <Tab.Screen
            name={"Register"}
            options={{headerShown : false}}
            component={RegisterScreen}/>

          <Tab.Screen
            name={"User"}
            options={{headerLeft : null,headerShown : false}}
            component={UserScreen}/>

            
        </Stack.Navigator>
    </NavigationContainer>
  );
} 

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
  }
})