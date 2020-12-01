import React, { useState, useEffect } from 'react'
import { View  , Text, StyleSheet, ActivityIndicator, ToastAndroid} from 'react-native'
import NotificationListItem from '../components/NotificationListItem'
import NotificationList from '../components/NotificationList'
import { GetNotificationsByUserId , MarkNotificationAsRead , GetUnreadNotificationCountByUserID} from '../handlers/NotificationHandler'


export default function NotificationScreen({navigation, route}) {
    // const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const [notifications,setNotifications] = useState(null)
    const [selectedNotification,setSelectedNotification] = useState(null)
    
    const [unreadNotificationCount , setUnreadNotificationCount] = useState(0)
    
    useEffect(()=>{
        if(!!route.params){
            if(!!route.params.user) {
                const user = route.params.user 
                // setUser(user)
                GetNotificationsByUserId(user.id).then((resp)=>{
                    setLoading(false)
                    setNotifications(resp)
                }).catch(()=>{
                    setLoading(false)
                })

                GetUnreadNotificationCountByUserID(user.id).then((resp)=>{
                    setUnreadNotificationCount(resp)
                    navigation.setOptions({tabBarBadge : !!resp ? resp : null})
                  }).catch((err)=>{
                  })
        
            }
        }
    },[])    

    if(loading) {
        return (
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <ActivityIndicator size={"large"} color={"#FFBF00"} animating={true} />
            </View>
        )           
    }
    function searchNotificationById(id) {
        var low = 0
        var high = notifications.length - 1
        while(low < high) {
            var mid = Math.floor((low + high) / 2)
            if(notifications[mid].id == id) {
                return mid
            }
            if(notifications[mid].id > id) {
                high = mid - 1
            }
            if(notifications[mid].id < id) {
                low = mid + 1
            }
        }
        return low
    }

    if(!!notifications  && notifications.length > 0) {
        return (
            <View style={styles.container}>
                <NotificationList 
                    itemOnPress={(notification)=>{
                        navigation.navigate("ViewNotification",{notification : notification})
                        if(!notification.is_read) {
                            var count = unreadNotificationCount - 1
                            setUnreadNotificationCount(count)    
                            navigation.setOptions({tabBarBadge : !!count ? count : null})
                            MarkNotificationAsRead(notification.id).then((res)=>{
                                var arrId = searchNotificationById(notification.id) 
                                var tmp = JSON.parse(JSON.stringify(notifications))
                                tmp[arrId].is_read = true
                                setNotifications(tmp)
                            }).catch((error)=>{
                                console.log(error)
                            })    
                        }    
                    }} 
                    notifications={notifications} />
            </View>
        )
    }
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor : "#fff"}}>
            <Text>Tidak ada pemberitahuan</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
    }
})