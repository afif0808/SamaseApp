import React , {useEffect, useState} from 'react'
import { View ,Text, StyleSheet, Settings} from 'react-native'
import { TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InitScreen from './InitScreen';
import NotificationScreen from './NotificationScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Authenticate } from '../handlers/AuthHandler.js';
import HomeScreen from './HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LockIcon from '../../assets/icons/freepik/lock.svg'
import LoadingScreen from './LoadingScreen';
import SetttingsScreen from './SettingsScreen';
import { GetNotificationsByUserId, GetUnreadNotificationCountByUserID } from '../handlers/NotificationHandler';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const Tab = createBottomTabNavigator()

const Stack = createStackNavigator()

var SharedPreferences = require('react-native-shared-preferences');

export default function UserScreen({navigation}) {    
    const [loading , setLoading] = useState(false)
    const [user , setUser] = useState(null)
    const [notifications , setNotifications] = useState(null)
    const [unreadNotificationCount , setUnreadNotificationCount] = useState(0)
    function authenticate(navigation) {
      SharedPreferences.setName("another")
      SharedPreferences.getItem("nekot",(value)=>{
        console.log(value)
          if(!value) {
              navigation.reset({
                   index: 0,
                   routes: [{ name: 'Init' }],
              });
              return
          }            
          Authenticate(value).then((resp)=>{
            setLoading(false)
            console.log(resp)
            if(resp.email.verified == false){
              navigation.replace("VerifyEmail",{user : resp})
              return 
            }
            setUser(resp)
            GetNotificationsByUserId(resp.id).then((resp2)=>{
              setNotifications(resp2)
            }).catch((error)=>{
              console.log("Wow", error)
            })
          }).catch((error)=>{
             navigation.reset({ 
                  index: 0,
                  routes: [{ name: 'Init' }],
             });
          })
      })
  }
  useEffect(()=>{
      setTimeout(()=>{
        authenticate(navigation)
      },2000)
  },[])

  useEffect(()=>{
    if(!!user) {
      console.log("Oshiete!")
      GetUnreadNotificationCountByUserID(user.id).then((resp)=>{
        setUnreadNotificationCount(resp)
        console.log(resp)
      }).catch((err)=>{
        console.log(err)
      })
    }
  },[user])


  if(user == null) {
    return <LoadingScreen loading={true}></LoadingScreen>
  }
  return (
          <Tab.Navigator
            lazy={false}
            tabBarOptions={{activeTintColor : "#FFBF00"}}>
            <Tab.Screen 
              name="Home"
              initialParams={{user : user}} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
                tabBarLabel : "Home",
              }}
              component={HomeScreen}  />

            <Tab.Screen 
              name="Notification"
              initialParams={{user : user,notifications : notifications}} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="bell" color={color} size={size} />
                )
              }}
              component={NotificationScreen} />

            <Tab.Screen 
              name="Settings"
              initialParams={{user : user}}  
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="menu" color={color} size={size} />
                ),
                tabBarLabel : "Menu",
              }}
              component={SetttingsScreen} />
              
          </Tab.Navigator>
      );
}



