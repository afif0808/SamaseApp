import React, { useState, useEffect } from 'react'
import {StyleSheet,View, Text , TextInput, Button, Keyboard } from 'react-native'
import SamaseTextInput from './SamaseTextInput.js'
import VerticalSeparator from './VerticalSeparator.js'
import UserIcon from '../../assets/icons/freepik/user.svg'
import LockIcon from '../../assets/icons/freepik/lock.svg'
import MailIcon from '../../assets/icons/freepik/mail.svg'

// LoginForm Returns the inserted useremail and password to the parent by calling handleFormChange callback 
export default function LoginForm({onChange , emailError , passwordError  ,...props}) {
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)

    useEffect(()=>{
        if(onChange != null) {
            onChange({
                email : email,
                password : password,
            })
        }
    },[email,password])
    const navigation = props.navigation
    return (
        <>
            <SamaseTextInput
                Icon={MailIcon}
                errorText={emailError}
                placeholder={"Email"}
                onChangeText={(text)=>{
                    setEmail(text)
                }}/>   
            <VerticalSeparator height={10} />
            <SamaseTextInput 
                errorText={passwordError}
                secureTextEntry={true}
                Icon={LockIcon}
                onChangeText={(text)=>{
                    setPassword(text)
                }}
                placeholder={"Password"}/>
            <VerticalSeparator height={10} />

         
        </>
    )    
}
const styles = StyleSheet.create({
    container : {
    },
    lineSeparator : {
        margin : 5,
        borderBottomColor : "#ccc",
        borderBottomWidth : 1,
    },
    whiteSeparator : {
        margin : 5,
    }
});
  