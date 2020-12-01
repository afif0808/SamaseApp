import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ImageBackground, Dimensions, Image, KeyboardAvoidingView } from 'react-native'
import UserForm from '../components/UserForm'
import SamaseButton from '../components/SamaseButton'
import { CreateUser , DoesEmailExist, SendUserEmailConfirmationCode } from '../handlers/UserHandler'
import VerticalSeparator from '../components/VerticalSeparator'
import CheckBox from '@react-native-community/checkbox';
import SamaseTextInput from '../components/SamaseTextInput'

import LockIcon from '../../assets/icons/freepik/lock.svg'
import Logo from '../../assets/logo-sin.svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoadingScreen from './LoadingScreen'
import { LogIn } from '../handlers/AuthHandler'

var SharedPreferences = require('react-native-shared-preferences');


const logo = {uri : "http://samasecentro.com:777/assets/images/logo-sin2.png"}
const backgroundImage = require("../../assets/images/bg-app.jpg")


export default function RegisterScreen({navigation , route}) {
    const [user , setUser] = useState({})


    const [passwordTwo , setPasswordTwo] = useState(null)

    const [nameError , setNameError] = useState("")
    const [fullnameError , setFullnameError] = useState("")
    const [emailError , setEmailError] = useState("")
    const [passwordError , setPasswordError] = useState("")
    const [passwordTwoError , setPasswordTwoError] = useState("")
    const [registerDisabled , setRegisterDisabled] = useState(true)
    const [agreedTOS , setAgreedTOS] = useState(false)
    const [agreedTOSError , setAgreedTOSError] = useState("")
    const [loading , setLoading] = useState(false)




    useEffect(()=>{
        // user.name == "" ? setNameError("Username is required ") : setNameError("")
        user.fullname == "" ? setFullnameError("Fullname is required") : setFullnameError("") 
        user.password == "" ? setPasswordError("Password is required") : setPasswordError("")
        user.email == "" ? setEmailError("Email is required") : setEmailError("")
        
        if(!user.email || !user.password || !user.fullname || agreedTOS == false ) {
            setRegisterDisabled(true)
        } else {
            setRegisterDisabled(false)
        }

    },[user,agreedTOS])

    useEffect(()=>{
        if(user.password != passwordTwo) {
            setPasswordTwoError("Password not same")
        } else {
            setPasswordTwoError("")
        }
    },[passwordTwo])

    function logIn(user) {
        LogIn(user).then((resp)=>{
            SharedPreferences.setName("another")
            SharedPreferences.setItem("nekot",resp.token)
            navigation.reset({
                index: 0,
                routes: [{ name: 'User' }],
           });           
        }).catch(()=>{
            setLoading(false)
        })
    }
    function onRegister(user) {
        return ()=> {
            !user.fullname  ? setFullnameError("Fullname is required") : setFullnameError("") 
            !user.password  ? setPasswordError("Password is required") : setPasswordError("")
            !user.email  ? setEmailError("Email is required") : setEmailError("")
            agreedTOS == false ? setAgreedTOSError("You have to agree on terms and conditions to proceed") : setAgreedTOSError("")
            setLoading(true)
            if(user.fullname && !!user.password && !!user.email) {
                DoesEmailExist(user.email).then((resp)=>{
                    if(resp.exist) {
                        setLoading(false)
                        setTimeout(()=>{
                            setEmailError("That email already exist")
                        },500)

                    } else {
                        setEmailError("")
                        CreateUser(user).then((resp)=>{
                            SendUserEmailConfirmationCode(user.email).then(()=>{

                            }).catch(()=>{

                            })
                            logIn(user)
                        }).catch(()=>{
                            setLoading(false)
                        })                
                    }
                }).catch((error)=>{
                })
        
            }
        }
    }

    function body() {
        return (
        <KeyboardAwareScrollView style={{flex:1}} resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={{justifyContent:"center"}}>
            <Logo width={80} height={80} style={{alignSelf:"center",marginBottom:30,marginTop : 40}} />        
            <UserForm
                fullname={user.name}
                email={user.email}

                nameError={nameError}
                fullnameError={fullnameError}
                emailError={emailError}
                passwordError={passwordError}
                onChange={(data)=>{
                    setUser(data)
                }}/>
            <SamaseTextInput 
                secureTextEntry={true}
                errorText={passwordTwoError}
                onChangeText={(text)=>{
                    setPasswordTwo(text)
                }}
                Icon={LockIcon}
                placeholder={"Confirm password"}/>

            <VerticalSeparator height={10} />

            <View style={{flexDirection:"row"}}>
                <CheckBox
                    tintColors={{ true: '#a3a096', false: '#a3a096' }}
                    onValueChange={(v)=>{setAgreedTOS(v)}} 
                    value={agreedTOS}/> 
                <Text style={{marginTop:5,color:"#fff"}}>
                    Saya selah telah membaca dan setuju dengan  
                    <Text>  </Text>
                    <Text onPress={()=>{navigation.navigate("TOS")}} style={{color : "#fff",textDecorationLine:"underline",padding:2,fontWeight:"bold"}}>Syarat dan Ketentuan</Text>

                </Text>
            </View>

            <VerticalSeparator height={15} />
            <SamaseButton
                disabled={registerDisabled}
                onPress={onRegister(user)}>
                REGISTER
            </SamaseButton>
            <VerticalSeparator height={10} />
        </KeyboardAwareScrollView>
        )
    }
    function header() {
        return (
            <View style={{flex :0.8}}>
                <Logo width={80} height={80} />
            </View>
        )
    }
    return (
        <LoadingScreen loading={loading}>
            <View style={styles.container}>
                <ImageBackground source={backgroundImage} style={styles.image}>
                        <KeyboardAvoidingView style={styles.blackScreen} behavior={"height"}>
                            {body()}
                        </KeyboardAvoidingView>
                </ImageBackground>   
            </View>
        </LoadingScreen>
    )
}

const styles = StyleSheet.create({
    container : {
        height : "100%",
        flex : 1,
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
        justifyContent : "center",
        opacity:0.7,
        backgroundColor:"#000"
    },
    logo : {
        width : 80,
        height : 80,
        alignSelf  : "center"
    }

})