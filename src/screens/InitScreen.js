import React , {useEffect, useState} from 'react'
import { View, ImageBackground, Dimensions , StyleSheet , Text , Image } from 'react-native'
import SamaseButton from '../components/SamaseButton'
import VerticalSeparator from '../components/VerticalSeparator'

import { GoogleSignin , statusCodes } from '@react-native-community/google-signin';
import { GoogleLogIn , GoogleLogOut } from '../handlers/AuthHandler';
import LoadingScreen from './LoadingScreen';
import Logo from '../../assets/logo-sin.svg';


const logo = {uri : "http://samasecentro.com:777/assets/images/logo-sin2.png"}
const backgroundImage = require("../../assets/images/bg-app.jpg")

var SharedPreferences = require('react-native-shared-preferences');

async function googleSignIn() {
    GoogleSignin.configure(
        {   
            webClientId : "237241376283-0h2i2j36jmpagp6pc90rkkn8jd5cpt4u.apps.googleusercontent.com",
            offlineAccess : true,
            androidClientId : "237241376283-22uvmh1gnp894n1o4t3n3igulhbgu147.apps.googleusercontent.com",
            scopes : [
                "https://www.googleapis.com/auth/userinfo.profile",
            ],
        }
    )
    try {
        await GoogleSignin.hasPlayServices()
        return await GoogleSignin.signIn()                            
    } catch(err) {
        console.log(err)
        throw Error
    }
}


export default function InitScreen({navigation}) {
    const [loading , setLoading] = useState(true)
    useEffect(()=>{
       
    },[])
    
    function header() {
        return (
            <View style={{flex :3,marginTop:50 , alignItems:"center"}}>
                <Logo width={80} height={80} />
            </View>
        )
    }
    return (
        <View>
            <LoadingScreen style={{position:"absolute",zIndex:2,width : Dimensions.get("window").width,height : Dimensions.get("window").height}} loading={loading}>
            </LoadingScreen>    
            <ImageBackground 
                onLoad={()=>{setLoading(false)}}
                source={backgroundImage} 
                style={styles.image}>
                <View style={styles.blackScreen}>
                    {header()}
                    <View style={styles.container}>
                        <VerticalSeparator height={40} />
                        <SamaseButton onPress={()=>{navigation.navigate("Login")}}>
                            Sign In
                        </SamaseButton>
                        <VerticalSeparator height={10} />
                        <SamaseButton onPress={()=>{navigation.navigate("Register")}}>
                            Sign Up
                        </SamaseButton>
                        <VerticalSeparator height={10} />
                        <SamaseButton 
                            onPress={()=>{
                                googleSignIn().then((resp)=>{
                                    const user =  resp.user
                                    GoogleLogOut().then(()=>{
                                        console.log("Success log out from google")
                                    }).catch((error)=>{
                                        // console.log(error)
                                    })

                                    setLoading(true)
                                    GoogleLogIn(resp.idToken,resp.accessToken).then((resp)=>{
                                        SharedPreferences.setName("another")
                                        SharedPreferences.setItem("nekot",resp)
                                        navigation.reset({
                                            index: 0,
                                            routes: [{ name: 'User' }],
                                        });                        
                                    }).catch((error)=>{
                                        // console.log(error)
                                    })

                                }).catch((error)=>{
                                    console.log("Why",error)
                                })
                            }}
                            style={{backgroundColor:"#f00"}}>
                            Google
                        </SamaseButton>
                        <VerticalSeparator height={10} />
                    </View>
                </View>
            </ImageBackground>            
        </View>        
    )
}

const styles = StyleSheet.create({
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
    },
    container : {
        flex : 20,
        justifyContent : "center"
    }
})