import React, { useEffect, useState } from 'react'
import { StyleSheet, View , Text, TextInput, Button, ImageBackground, Dimensions, Keyboard, ActivityIndicator, ToastAndroid} from 'react-native'
import VerticalSeparator from '../components/VerticalSeparator'
import SamaseButton from '../components/SamaseButton'
import Logo from '../../assets/logo-sin.svg';
import MailIcon from '../../assets/icons/freepik/mail.svg'
import SamaseTextInput from '../components/SamaseTextInput'
import { SendPasswordRecoveryCode, DoesEmailExist, SendPasswordRecoveryLink } from '../handlers/UserHandler';

var SharedPreferences = require('react-native-shared-preferences');

const backgroundImage = require("../../assets/images/bg-app.jpg")



export default function PasswordRecoveryScreen({navigation , route}) {

    const [email , setEmail] = useState("")
    const [error , setError] = useState("")
    const [activityLoading , setActivityLoading] = useState(false)
    const [success , setSuccess] = useState("")

    const EmailInputText = () => {
        return (
            <SamaseTextInput 
                onChangeText={(text)=>{
                    setEmail(text)
                }}
                Icon={MailIcon} 
                placeholder={"Email"} />
        )
    }
    

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.blackScreen}>
                    <Text style={{fontSize:25,color:"#fff",fontWeight:"bold"}}>Atur ulang kata sandi</Text>
                    <VerticalSeparator height={15} />
                    <Text style={{color:"#ccc",fontSize:13}}>
                    Masukkan email yang terdaftar  . 
                    Kami akan mengirim kode verifikasi untuk atur ulang kata sandi 
                    </Text>
                    <VerticalSeparator height={15} />
                    {EmailInputText()}
                    <VerticalSeparator height={10} />

                    <SamaseButton 
                        onPress={()=>{
                            if(!email) {
                                setError("Email tidak boleh kosong")
                                return 
                            }
                            setActivityLoading(true)
                            DoesEmailExist(email).then((resp)=>{
                                if(resp.exist == true) {
                                    setError("")
                                    SendPasswordRecoveryLink(email). then(()=>{
                                        setActivityLoading(false)     
                                        setSuccess("Kami telah mengirim link untuk mengganti password ke email anda")                                   
                                        // navigation.navigate("ConfirmPasswordRecoveryCode",{email : email})
                                    }).catch((error)=>{
                                        console.log(error)
                                    })
                                } else {
                                    setActivityLoading(false)
                                    setError("Email tidak terdaftar")
                                }
                            }).catch(()=>{

                            })
                        }}>
                        Lanjut
                    </SamaseButton>
                    {error != "" &&
                        <Text style={{color:"#fff",backgroundColor:"#f00",padding:10,marginTop:15,borderRadius:10}}>
                            {error}
                        </Text>
                    }
                    {!!success && 
                        <Text style={{color:"#fff",backgroundColor:"green",padding:10,marginTop:15,borderRadius:10}}>
                            {success}
                        </Text>
                    }
                    <VerticalSeparator height={20} />
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
        flex :1,
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    blackScreen : {
        paddingTop :50,
        padding: 20,
        flex:1,
        opacity:0.7,
        backgroundColor:"#000",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})