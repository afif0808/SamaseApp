import React from 'react'
import NotificationListItem from './NotificationListItem'
import { FlatList } from 'react-native-gesture-handler'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native'

function notificationListItems(notifications) {
    return notifications.map((notifs)=>{
        return <NotificationListItem notification={notifs} />
    })
}




export default function NotificationList({notifications , itemOnPress, ...props}) {
    // notifications = [
    //     {id:"1",title : "Notification A" , message : "Kode di atas adalah ID membership Samase sebagai bukti telah menjadi member Samase dan di tunjukkan saat transaksi"},
    //     {id:"2",title : "Notification B" , message : "Kode di atas adalah ID membership Samase sebagai bukti telah menjadi member Samase dan di tunjukkan saat transaksi"},
    //     {id:"3",title : "Notification C" , message : "Kode di atas adalah ID membership Samase sebagai bukti telah menjadi member Samase dan di tunjukkan saat transaksi"},
    //     {id:"4",title : "Notification D" , message : "Kode di atas adalah ID membership Samase sebagai bukti telah menjadi member Samase dan di tunjukkan saat transaksi"},
    //     {id:"5",title : "Notification E" , message : "Kode di atas adalah ID membership Samase sebagai bukti telah menjadi member Samase dan di tunjukkan saat transaksi"},
    //     {id:"6",title : "Notification F" , message : "Kode di atas adalah ID membership Samase sebagai bukti telah menjadi member Samase dan di tunjukkan saat transaksi"},
    //     {id:"7",title : "Notification G" , message : "Kode di atas adalah ID membership Samase sebagai bukti telah menjadi member Samase dan di tunjukkan saat transaksi"},
    //     {id:"8",title : "Notification H" , message : "Kode di atas adalah ID membership Samase sebagai bukti telah menjadi member Samase dan di tunjukkan saat transaksi"},
    //     {id:"9",title : "Notification I" , message : "Kode di atas adalah ID membership Samase sebagai bukti telah menjadi member Samase dan di tunjukkan saat transaksi"},
    //     {id:"10",title : "Notification J" , message : "Kode di atas adalah ID membership Samase sebagai bukti telah menjadi member Samase dan di tunjukkan saat transaksi"},

    // ]
    function renderItem({item}) {
        return <NotificationListItem onPress={()=>{if(!!itemOnPress){itemOnPress(item)}}} notification={item} />
    }    
    return (
            <View style={styles.container}>
                <FlatList  
                    renderItem={renderItem}
                    data={notifications} 
                    keyExtractor={item => String(item.id)}/>
            </View>
    )   
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
    }
})