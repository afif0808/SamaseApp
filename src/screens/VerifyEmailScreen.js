import React, { useEffect, useState } from 'react'
import { StyleSheet, View , Text, TextInput, Button, ImageBackground, Dimensions, Keyboard, ActivityIndicator, ToastAndroid} from 'react-native'
import { CodeField } from 'react-native-confirmation-code-field'
import VerificationCodeInput from '../components/VerificationCodeInput'
import { SendUserEmailConfirmationCode, VerifyUserEmail } from '../handlers/UserHandler'
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

function VerifyButton({...props}) {
    return (
        <SamaseButton {...props} >VERIFIKASI</SamaseButton>
        // <Button title={"Verify"}  {...props} />
    ) 
}


function ErrorText({text}) {
    return (
        <Text style={styles.errorText}>{text}</Text>
    )
}


const backgroundImage = require("../../assets/images/bg-app.jpg")

export default function VerifiyEmailScreen({navigation , route}) {
    let user = route.params.user
    const [confirmationCode , setConfirmationCode] = useState("")
    const [errorText , setErrorText] = useState("")
    const [activityLoading , setActvityLoading] = useState(false)
    function verifyEmail() {
        Keyboard.dismiss()
        setActvityLoading(true)
        setErrorText("")
        VerifyUserEmail({code : confirmationCode , email : user.email.value}).then(()=>{
            SharedPreferences.setName("another")
            SharedPreferences.getItem("nekot",(value)=>{
                if(!!value) {
                    RefreshToken(value).then((resp)=>{
                        SharedPreferences.setItem("nekot",resp.token)
                        setActvityLoading(false)
                        navigation.replace("User")
                    })                                                        
                }
            })
        }).catch((error)=>{
            setActvityLoading(false)
            setErrorText("Kode salah atau telah kadaluarsa")
            console.log("eee",error)
        })
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
                    
                    <Text style={styles.desc}>Kode verifikasi telah di kirim ke email anda . Kode insya allah akan kadaluarsa dalam tiga jam</Text>

                    <TextInput 
                        onChangeText={(text)=>{
                            setConfirmationCode(text)
                        }}
                        onSubmitEditing={()=>{
                            verifyEmail()
                        }}
                        style={styles.textInput} 
                        spellCheck={false} 
                        autoCorrect={false} 
                        autoCapitalize="characters" 
                        maxLength={4} 
                        underlineColorAndroid={"transparent"} />
                
                    <VerticalSeparator  height={15}/>

                    <VerifyButton 
                        onPress={()=>{
                            verifyEmail()
                        }}/>
                    
                    <VerticalSeparator  height={15}/>
                    
                    <ResendCodeButton 
                        onPress={()=>{
                            setActvityLoading(true)
                            SendUserEmailConfirmationCode(user.email.value).then((resp)=>{ 
                                setActvityLoading(false)
                                ToastAndroid.show("Terkirim!",1000)                       
                            }).catch((error)=>{
                                console.log("Error oi",error)
                            })
                    }}/>
                    <VerticalSeparator  height={15}/>
                    <Text
                        onPress={()=>{
                            SharedPreferences.setName("name")
                            SharedPreferences.getItem("nekot",(value)=>{
                                SharedPreferences.removeItem("nekot")
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'User' }],
                                });                        
                                if(!!value) {
                                    LogOut(value).then(()=>{
                                    }).catch((error)=>{

                                    })        
                                }
                            })
                            SharedPreferences.removeItem("nekot")
                        }} 
                        style={{color:"#fff"}}>
                        Logout
                    </Text>

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