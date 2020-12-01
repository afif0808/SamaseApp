import React, { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import { View, StyleSheet, Text, ImageBackground, Dimensions, Image, Share, Keyboard, KeyboardAvoidingView } from 'react-native'
import { LogIn, Authenticate } from '../handlers/AuthHandler'
import VerticalSeparator from '../components/VerticalSeparator'
import SamaseButton from '../components/SamaseButton'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import LoadingScreen from './LoadingScreen'
import Logo from '../../assets/logo-sin.svg';


var SharedPreferences = require('react-native-shared-preferences');


export default function LoginScreen({navigation}) {
    const logo = {uri : "http://samasecentro.com:777/assets/images/logo-sin2.png"}
    const backgroundImage = require("../../assets/images/bg-app.jpg")
    const image = { uri: "https://reactjs.org/logo-og.png" };
    const [loading , setLoading] = useState(false) 
    const [user , setUser] = useState({}) 
    const [logInDisabled , setLogInDisabled] = useState(true)
    const [emailError , setEmailError] = useState("")
    const [passwordError , setPasswordError] = useState("")
    const [logInError , setLogInError] = useState("")
    function onLogIn(user) {
        !user.email  ? setEmailError("Useremail is required") : setEmailError("")
        !user.password  ? setPasswordError("Password is required") : setPasswordError("")
        if(!!user.email && !!user.password) {
            setLoading(true)
            LogIn(user).then((resp)=>{
                setLogInError("")
                console.log(resp)
                SharedPreferences.setName("another")
                SharedPreferences.setItem("nekot",resp.token)
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'User' }],
               });
            }).catch((error)=>{
                setLoading(false)
                setLogInError("Log in failed")
            })
        }
    }
    useEffect(()=>{
        user.email == "" ? setEmailError("Useremail is required") : setEmailError("")
        user.password == "" ? setPasswordError("Password is required") : setPasswordError("")
    },[user])

    function header() {
        return (
            <View style={{flex : 2,marginTop  : 50 , alignItems:"center"}}>
                <Logo width={80} height={80} />
            </View>
        )
    }
    

    function body() {
        return (
            <View style={{flex: 4}}>
                <LoginForm
                    emailError={emailError}
                    passwordError={passwordError}
                    onChange={(user)=> {
                        setUser(user)
                    }} />
                <SamaseButton 
                    disabled={false}
                    onPress={()=>{onLogIn(user)}}>
                    LOG IN
                </SamaseButton>
                <VerticalSeparator height={10}/>
                {!!logInError &&
                    <View style={{backgroundColor:"#f00",padding : 5,borderRadius : 4}}>
                        <Text style={{color : "#fff",alignSelf : "center",fontWeight : "bold"}}>
                            {logInError}
                        </Text>
                    </View>
                }
                <VerticalSeparator height={10}/>
                    <Text onPress={()=>{navigation.navigate("PasswordRecovery")}} style={{color : "#fff",alignSelf:  "flex-start"}}>Lupa password?</Text>
                <VerticalSeparator height={5}/>
            </View>
        )
    }                         

    function footer() {
        return (
            <View style={{flex:1}}>
            <View
                style={{
                    flexDirection : "row",
                    justifyContent : "center",
                }}>
                <Text style={{color : "#fff"}}>Belum punya akun ? </Text>
                <Text style={{color : "#fff", fontWeight : "bold"}}>Daftar!</Text>
            </View>
        </View>
        )
    }
    
    

    return (
        <LoadingScreen loading={loading}>
            <View style={styles.container} >
                <ImageBackground source={backgroundImage} style={styles.image}>
                    <View style={styles.blackScreen} behavior={"height"}>
                        {header()}
                        {body()}
                    </View>
                </ImageBackground>
            </View>
        </LoadingScreen>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#fff",
        height:"100%",
    },
    image: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    blackScreen : {
        paddingLeft:40,
        paddingRight:40,
        flex:1,
        opacity:0.7,
        backgroundColor:"#000"
    },
    logo : {
        width : 80,
        height : 80,
        alignSelf  : "center"
    }
})