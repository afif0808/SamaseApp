import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import SamaseTextInput from '../components/SamaseTextInput'
import LockIcon from '../../assets/icons/freepik/lock.svg'
import VerticalSeparator from '../components/VerticalSeparator'
import SamaseButton from '../components/SamaseButton'
import {SetUserPassword} from '../handlers/UserHandler'
import { ActivityIndicator } from 'react-native'
import { ToastAndroid } from 'react-native'
import { LogOut } from '../handlers/AuthHandler'


var SharedPreferences = require('react-native-shared-preferences');


export default function ChangePasswordScreen({route ,  navigation}) {
    const [password , setPassword ] = useState("")
    const [secondPassword , setSecondPassword] = useState("")
    const [error , setError] = useState("")
    const [loading ,setLoading] = useState(false)
    const {user} = route.params
    return (
        <View style={styles.container}>
            <SamaseTextInput 
                Icon={LockIcon}
                onChangeText={(text)=>{
                    setPassword(text)
                }}
                textColor={"#000"}
                placeholder={"Password"}
                secureTextEntry={true}
                style={styles.textInput} />
            <VerticalSeparator height={10} />
            <SamaseTextInput 
                onChangeText={(text)=>{
                    setSecondPassword(text)
                }}            
                Icon={LockIcon}
                textColor={"#000"}
                placeholder={"Confirm Password"}
                secureTextEntry={true}
                style={styles.textInput} />
            <VerticalSeparator height={10} />
            <SamaseButton 
                onPress={()=>{
                    if(!secondPassword || !password) {
                        setError("Semua formulir harus diisi")
                        return
                    }
                    if(secondPassword != password) {
                        setError("Password tidak cocok")
                        return
                    }
                    setError("")
                    setLoading(true)
                    SetUserPassword(user.id,password).then((resp)=>{
                        setLoading(false)
                        ToastAndroid.show("Updated!",2000)
                        

                        SharedPreferences.setName("another")
                        SharedPreferences.getItem("nekot",(value)=>{
                            SharedPreferences.removeItem("nekot")
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Init' }],
                            });                        
    
                            if(!!value) {
                                LogOut(value).then(()=>{
    
                                }).catch(()=>{
            
                                })    
                            }
                            
                        })




                    }).catch(()=>{
                        setLoading(false)
                    })
                }}
                disabled={false}>
                OK
            </SamaseButton>
            <VerticalSeparator height={10} />
            {!!error &&
                <Text style={{
                    backgroundColor : "#f00",
                    color : "#fff",
                    padding : 10,
                    borderRadius : 5,
                    textAlign : "center",
                    fontWeight : "bold"
                }}>
                    {error}
                </Text>
            }
            <ActivityIndicator animating={loading} size={"large"} color={"#FFBF00"} />
        </View>        
    )
}



const styles = StyleSheet.create({
    container : {
        backgroundColor:"#fff",
        flex : 1,
        padding : 20,
    },
    textInput : {
        borderColor : "#ccc",
        borderWidth : 1,
        color : "#000",
    },
})