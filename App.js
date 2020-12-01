import React, { useState , useEffect } from 'react'
import { StyleSheet, Text, View, ToastAndroid, Button , TouchableOpacity , TextInput , Platform, AppState } from 'react-native';
import SamaseButton from './src/components/SamaseButton';
import SamaseTextInput from './src/components/SamaseTextInput';
import LoginScreen from './src/screens/LoginScreen';
import 'react-native-gesture-handler';

import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './src/screens/RegisterScreen';
import UserScreen from './src/screens/UserScreen';
import InitScreen from './src/screens/InitScreen';
import SplashScreen from './src/screens/SplashScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import ChangePasswordScreen from './src/screens/ChangePasswordScreen';
import ViewNotificationScreen from './src/screens/ViewNotificationScreen';

import PushNotification from 'react-native-push-notification';
import VerifiyEmailScreen from './src/screens/VerifyEmailScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';
import TOSScreen from './src/screens/TOSScreen';
import PasswordRecoveryScreen from './src/screens/PasswordRecoveryScreen';
import ConfirmPasswordRecoveryCodeScreen from './src/screens/ConfirmPasswordRecoveryCodeScreen';

PushNotification.configure({
  // (required) Called when a remote or local notification is opened or received
  onNotification: function(notification) {
    console.log('LOCAL NOTIFICATION ==>', notification)
  },
popInitialNotification: true,
requestPermissions: false
})




const Stack = createStackNavigator()
var SharedPreferences = require('react-native-shared-preferences');

export default function App() {
  useEffect(()=>{
      AppState.addEventListener("change",(nextAppState)=>{
        console.log(nextAppState)
      })
  },[])
  return (
    // <Button 
    //   title={"Notify"} 
    //   onPress={()=>{
    //     console.log("Idk")
    //     const any = PushNotification.localNotification({
    //       autoCancel: false,
    //       bigText:
    //         'This is local notification demo in React Native app. Only shown, when expanded.',
    //       subText: 'Local Notification Demo',
    //       title: 'Local Notification Title',
    //       message: 'Expand me to see more',
    //       vibrate: true,
    //       vibration: 300,
    //       visibility : "public",
    //       playSound: true,
    //       soundName: 'default',
    //       actions: '["Yes", "No"]'
    //     })
      // }} />
    <NavigationContainer>
      <Stack.Navigator 
          initialRouteName={"User"}>

       <Stack.Screen 
            name={"ConfirmPasswordRecoveryCode"}
            options={{headerShown : false}}
            component={ConfirmPasswordRecoveryCodeScreen}/>  


        <Stack.Screen 
            name={"PasswordRecovery"}
            options={{headerShown : false}}
            component={PasswordRecoveryScreen}/>  

        <Stack.Screen 
            name={"TOS"}
            options={{title : "Syarat dan Ketentuan"}}
            component={TOSScreen}/>

         <Stack.Screen 
            name={"AboutUs"}
            options={{title : "Tentang Kami"}}
            component={AboutUsScreen}/>
         
         <Stack.Screen 
            name={"ViewNotification"}
            component={ViewNotificationScreen}
            options={{headerShown:true,title : "Notifikasi"}}/>
          
          <Stack.Screen 
            name={"Splash"}
            component={SplashScreen}
            options={{headerShown:false}}/>

          <Stack.Screen
            name={"Init"}
            options={{headerShown : false}}
            component={InitScreen}/>

          <Stack.Screen
            name={"Login"}
            options={{headerShown : false}}
            component={LoginScreen}/>

          <Stack.Screen
            name={"Register"}
            options={{headerShown : false}}
            component={RegisterScreen}/>

          <Stack.Screen
            name={"User"}
            options={{headerShown:false}}
            component={UserScreen}/>

          <Stack.Screen 
            name={"ChangePassword"}
            component={ChangePasswordScreen}
            options={{title : "Ganti Password"}}/>

          <Stack.Screen
            name={"VerifyEmail"}
            component={VerifiyEmailScreen}
            options={{headerShown : false,headerLeft : () => {}}}/>
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



