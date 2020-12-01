import React from 'react'
import { View, StyleSheet , TouchableOpacity, ToastAndroid } from 'react-native'
import { Text } from 'react-native'
import VerticalSeparator from './VerticalSeparator'


export default function NotificationListItem({notification , onPress , ...props}) {
    return (
        <TouchableOpacity
            onPress={()=>{if(!!onPress){ onPress() }}}
            style={styles.container} >
            <View >
                    <Text style={[styles.title,{fontWeight : notification.is_read ? "normal"  : "bold"}]}>{notification.name}</Text>
                    <Text style={styles.date}>{notification.date}</Text>
            </View>
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:"#fff",
        borderRadius:5 , 
        padding : 10,
        marginTop :5,
        marginBottom : 5,
        marginRight  : 10,
        marginLeft : 10,
        flex : 1,
        borderBottomColor : "#ccc",
        borderBottomWidth : 1,
    },
    title : {
        fontSize : 15,
        fontWeight : "normal",
    },
    date : {
        color : "#999",
        fontSize : 12,
    }
})