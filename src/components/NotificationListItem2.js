import React from 'react'
import { StyleSheet , Text ,View } from 'react-native'
import VerticalSeparator from './VerticalSeparator'


export default function NotificationListItem({notification , ...props}) {
    return (<View style={{backgroundColor:"#fff",margin : 5 , borderRadius:10 , padding : 10}}>
        <Text>{item.title}</Text>
        <Text>{item.message}</Text>
    </View>)
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        borderColor :  "#f00",
        borderWidth : 3,
        backgroundColor : "#fff",
    },
    title : {
        fontSize : 18,
        fontWeight : "bold",
    }
})