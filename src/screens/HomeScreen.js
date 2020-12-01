import React ,{useEffect, useState} from 'react'
import { View ,Text, Button, StyleSheet, ImageBackground , Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LogOut, GoogleLogOut } from '../handlers/AuthHandler';

const HomeStack = createStackNavigator()

const Component = () => {
    return <Text>Wow</Text>
}
var SharedPreferences = require("react-native-shared-preferences")

function leadingZero(text,digit) {
    text = String(text)
    digit = digit - text.length
    for(let i = 0 ; i < digit ; i++) {
        text = "0" + text
    }
    return text
}

const headerBackground = require("../../assets/images/home-header-bg.jpg")
const voucherBackground = require("../../assets/images/voucher-bg-black-and-white.jpg")



export default function HomeScreen({navigation,route}) {
    const user = route.params.user
    useEffect(()=>{
        SharedPreferences.setName("another")
        // SharedPreferences.getItem("nekot",(v)=>{
        //     LogOut(v).then(()=>{
        //         SharedPreferences.removeItem("nekot")
        //     })
        // })
    },[])
    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
            </View> */}
            <ImageBackground style={styles.header} source={headerBackground}>
                <Text 
                    style={{
                        fontSize : 25,
                        color : "#fff",
                    }}>
                        {user.fullname}
                </Text>
                <Text style={{color:"#fff"}}>#SMS{ leadingZero(user.id,9) }</Text>        
            </ImageBackground>
            <View style={{flex : 2}}>
                <View style={styles.shadow}>
                <ImageBackground 
                    imageStyle={{borderRadius : 10}}  
                    source={voucherBackground} 
                    style={[styles.voucher]}>
                    <View style={{margin : 30,marginLeft:140}}>
                        <Text style={{fontSize : 25,color : "#fff",fontWeight:"bold"}}>DISKON 5%</Text>
                        <Text style={{fontSize : 12,color:"#fff"}}>Tunjukan membership mu dan dapatkan diskon 5% di semua toko samase di seluruh indonesia</Text>
                    </View>
                </ImageBackground>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:"#fff",
    },
    header : {
        alignItems : "center",
        justifyContent : "center",
        width: Dimensions.get('window').width,
        height: 200,
        flex : 1,
    },
    voucher : {
        alignItems : "flex-start",
        justifyContent : "flex-start",
        height: 200,
        margin : 20,
        shadowColor: '#000',
        shadowOpacity: 1,
        borderRadius:10,
        shadowRadius: 2,
        elevation:5,
        backgroundColor : "#fff"

    },
    shadow : {
    }
})            
/* <Button 
    onPress={()=>{

        
    }}
    title={"LOGOUT"} 
    style={{margin : 10}} /> */
