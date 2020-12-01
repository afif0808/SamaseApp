import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'


export default function ViewNotificationScreen({route , navigation}) {
    const [notification , setNotification] = useState({})
    useEffect(()=>{
        setNotification(route.params.notification) 
    },[])
    return (
        <View style={styles.container}>
            <Text style={{fontSize : 20,fontFamily : "bold"}}>{notification.name}</Text>
            <Text>
                {notification.message}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        padding : 20,
        backgroundColor  : "#fff",
        flex :1,
    },
})