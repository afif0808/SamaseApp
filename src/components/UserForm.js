import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { View , StyleSheet, Button ,Text, ToastAndroid} from 'react-native';
import SamaseTextInput from './SamaseTextInput';
import UserIcon from '../../assets/icons/freepik/user.svg'
import LockIcon from '../../assets/icons/freepik/lock.svg'
import MailIcon from '../../assets/icons/freepik/mail.svg'



// UserForm returns the inserted user's fields to the parent by calling oncChange callback
export default function UserForm({
        onChange , nameError , fullnameError , emailError , passwordError,
        ...props
    }) {
    // const [name , setName] = useState(props.name != null ? props.name : null)
    const [fullname , setFullname] = useState(props.fullname != null ? props.fullname : null)
    const [email , setEmail] = useState(props.email != null ? props.email : null)
    const [password , setPassword] = useState(props.password != null ? props.password : null)
    const [data, setData] = useState({})
    
    useEffect(()=>{
        console.log("AAA",fullname,email)
    },[])

    useEffect(()=>{
        if(onChange != null) {
            const user = {
                fullname : fullname,
                password : password,
                email : email
            }
            onChange(user)
        }
    },[fullname,email,password])

    return (
        <View>
            <SamaseTextInput
                onChangeText={(text)=>{
                    setFullname(text)
                }}
                Icon={UserIcon}
                errorText={fullnameError}
                value={fullname}
                placeholder={"Fullname"} 
                 />
            <View style={styles.whiteSeparator}/>
            <SamaseTextInput
                onChangeText={(text)=>{
                    setEmail(text)
                }}
                Icon={MailIcon}            
                value={email}
                errorText={emailError}
                placeholder={"Email"} 
                 />
            <View style={styles.whiteSeparator}/>
            <SamaseTextInput
                onChangeText={(text)=>{
                    setPassword(text)
                }}
                Icon={LockIcon}
                errorText={passwordError}            
                value={password}
                secureTextEntry={true}
                placeholder={"Password"} 
                />
            <View style={styles.whiteSeparator}/>
           
        </View>
    )
}

const styles = StyleSheet.create({
    textInput : {
        borderWidth : 1,
        borderColor:"#ccc",
        padding : 10,
        width : "100%",
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