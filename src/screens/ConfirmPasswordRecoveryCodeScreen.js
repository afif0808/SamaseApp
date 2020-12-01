import React, { useEffect, useState } from 'react'
import { StyleSheet, View , Text, TextInput, Button, ImageBackground, Dimensions, Keyboard, ActivityIndicator, ToastAndroid} from 'react-native'
import { CodeField } from 'react-native-confirmation-code-field'
import VerificationCodeInput from '../components/VerificationCodeInput'
import { SendUserEmailConfirmationCode, VerifyUserEmail, SendPasswordRecoveryCode, ConfirmPasswordRecoveryCode } from '../handlers/UserHandler'
import VerticalSeparator from '../components/VerticalSeparator'
import { RefreshToken, LogOut } from '../handlers/AuthHandler'
import SamaseButton from '../components/SamaseButton'
import Logo from '../../assets/logo-sin.svg';

var SharedPreferences = require('react-native-shared-preferences');

function ResendCodeButton({onPress,...props}) {
    return (
        <View style={{flexDirection:"row"}}>
            <Text style={{color:"#fff"}}>Tidak menerima kode?</Text>
            <Text style={{color:"#FFBF00"}} onPress={()=>{if(!!onPress){onPress()}}}> Kirim ulang</Text>
        </View>
    )

}

function NextButton({...props}) {
    return (
        <SamaseButton {...props} >LANJUTKAN</SamaseButton>
        // <Button title={"Verify"}  {...props} />
    ) 
}


function ErrorText({text}) {
    return (
        <Text style={styles.errorText}>{text}</Text>
    )
}


const backgroundImage = require("../../assets/images/bg-app.jpg")

export default function ConfirmPasswordRecoveryCodeScreen({navigation , route}) {
    let email = route.params.email
    const [confirmationCode , setConfirmationCode] = useState("")
    const [errorText , setErrorText] = useState("")
    const [activityLoading , setActvityLoading] = useState(false)
    function confirmPasswordRecoveryCode() {
        Keyboard.dismiss()
        setActvityLoading(true)
        setErrorText("")
        console.log(confirmationCode)
        ConfirmPasswordRecoveryCode({email : email , code : confirmationCode}).then((resp)=>{
            console.log("Success")
            setActvityLoading(false)
            console.log(resp)
            navigation.replace("ChangePassword",{user:resp})
        }).catch((error)=>{
            console.log(error)
            setActvityLoading(false)
        })
        // VerifyUserEmail({code : confirmationCode , email : user.email.value}).then(()=>{
        //     SharedPreferences.setName("another")
        //     SharedPreferences.getItem("nekot",(value)=>{
        //         if(!!value) {
        //             RefreshToken(value).then((resp)=>{
        //                 SharedPreferences.setItem("nekot",resp.token)
        //                 setActvityLoading(false)
        //                 navigation.replace("User")
        //             })                                                        
        //         }
        //     })
        // }).catch((error)=>{
        //     setActvityLoading(false)
        //     setErrorText("Kode salah atau telah kadaluarsa")
        //     console.log("eee",error)
        // })
    }

    useEffect(()=>{
    },[])
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.blackScreen}>
                    <Logo width={80} height={80} />
                    
                    <VerticalSeparator  height={30}/>

                    <Text style={styles.headText}>Masukan kode verifikasi</Text>
                    
                    <VerticalSeparator  height={10}/>
                    
                    <Text style={styles.desc}>
                        Kode verifikasi telah di kirim ke email anda . 
                        Kode insya allah akan kadaluarsa dalam tiga jam . 
                        Kode verifikasi dibutuhkan untuk mengatur ulang password anda
                    </Text>

                    <TextInput 
                        onChangeText={(text)=>{
                            setConfirmationCode(text)
                        }}
                        onSubmitEditing={()=>{
                            confirmPasswordRecoveryCode()
                        }}
                        style={styles.textInput} 
                        spellCheck={false} 
                        autoCorrect={false} 
                        autoCapitalize="characters" 
                        maxLength={4} 
                        underlineColorAndroid={"transparent"} />
                
                    <VerticalSeparator  height={15}/>

                    <NextButton 
                        onPress={()=>{
                            confirmPasswordRecoveryCode()
                        }}/>
                    
                    <VerticalSeparator  height={15}/>
                    
                    <ResendCodeButton 
                        onPress={()=>{
                            setActvityLoading(true)
                            Keyboard.dismiss()
                            SendPasswordRecoveryCode(email).then((resp)=>{ 
                                setActvityLoading(false)
                                ToastAndroid.show("Terkirim!",1000)                       
                            }).catch((error)=>{
                                console.log("Error oi",error)
                            })
                    }}/>
                    <VerticalSeparator  height={15}/>
                    

                    <VerticalSeparator  height={15}/>
                    
                    {!!errorText &&
                        <ErrorText text={errorText} />
                    }

                    <ActivityIndicator animating={activityLoading} size={"large"} color={"#FFBF00"} />
                </View>
            </ImageBackground>
        </View>
    )       
}

const styles = StyleSheet.create({
    errorText : {
        color : "#fff",
        padding : 10,
        backgroundColor : "#f00",
        opacity : 0.8,
    },
    container : {
        flex :1 ,
        alignItems : "center",
    },
    textInput : {
        borderBottomColor : "#fff",
        borderBottomWidth : 1,
        width:150,
        color : "#fff",
        textAlign : "center",
        fontSize:35,
    },
    headText : {
        fontSize : 22,
        color : "#fff",
        textAlign : "center"
    },
    desc : {
        textAlign : "center",
        marginLeft : 25,
        marginRight : 25,
        color : "#fff",
    },
    backgroundImage: {
        position: 'absolute',
        left: 0,
        alignItems : "center",
        top: 0,
        flex : 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    blackScreen : {
        paddingTop:60,
        alignItems : "center",
        flex:1,
        opacity:0.7,
        backgroundColor:"#000"
    }
})