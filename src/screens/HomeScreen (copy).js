import React ,{useEffect, useState} from 'react'
import { View ,Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LogOut, GoogleLogOut } from '../handlers/AuthHandler';

const HomeStack = createStackNavigator()

const Component = () => {
    return <Text>Wow</Text>
}
var SharedPreferences = require("react-native-shared-preferences")

export default function HomeScreen({navigation,route}) {
    const [user , setUser] = useState(null)
    useEffect(()=>{
        SharedPreferences.setName("another")
        // SharedPreferences.getItem("nekot",(v)=>{
        //     LogOut(v).then(()=>{
        //         SharedPreferences.removeItem("nekot")
        //     })
        // })
        if(!!route.params.user) {
            setUser(route.params.user)
        }
    },[])
    return (
        <View style={styles.container}>
                {!!user &&
                    <View style={{
                        flex : 1,
                        alignItems : "center",
                        justifyContent  : 'center',
                        backgroundColor  : "#010101",
                        opacity : 0.9,
                    }}>
                        <Text style={{
                            color : "#fff",
                            fontSize : 20
                        }}>{user.fullname}</Text>
                        <Text style={{
                            color : "#fff",
                            fontSize : 18,
                        }}>#{user.id}</Text>
                    </View>
                }
                <View style={{
                    flex : 1,
                    backgroundColor : "#fff",
                    justifyContent : 'center',
                    alignItems : "center",
                }}>
                    <Text style={{width : 260,alignSelf : "center",fontSize:20}}>
                        Tunjujkan halaman ini dan dapatkan diskon sebesar 5%
                    </Text>
                    
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: "center",
    }

})            
/* <Button 
    onPress={()=>{

        
    }}
    title={"LOGOUT"} 
    style={{margin : 10}} /> */
