import React ,{useState, useEffect , useRef} from 'react'
import { StyleSheet , View , Image , Animated ,Text , Easing } from 'react-native'
import { Authenticate } from '../handlers/AuthHandler';
import Svg from 'react-native-svg';

import Logo from '../../assets/logo-sin.svg';
import KeyboardAvoidingComponent from '../components/KeyboardAvoidingComponent';
import { TextInput } from 'react-native-gesture-handler';
import SamaseTextInput from '../components/SamaseTextInput';
import LoadingCircle from '../components/LoadingCircle';
import { GoogleSignin } from '@react-native-community/google-signin';


const logo = require("../../assets/logo-sin.png")
const splashGif = {uri : "http://samasecentro.com:777/assets/gifs/splash.gif"}
var SharedPreferences = require('react-native-shared-preferences');



export default function SplashScreen({navigation}) {
    const [user , setUser] = useState({})
    function authenticate(navigation) {
        SharedPreferences.setName("another")
        SharedPreferences.getItem("nekot",(value)=>{
            if(!value) {
                navigation.reset({
                     index: 0,
                     routes: [{ name: 'Init' }],
                });
                return
              }            
            Authenticate(value).then((resp)=>{
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'User' }],
               });
            }).catch((error)=>{
                navigation.reset({ 
                    index: 0,
                    routes: [{ name: 'Init' }],
               });
            })
        })
    }
    useEffect(()=>{
        setTimeout(()=>{
            authenticate(navigation)
        },2000)
    },[])

    return (
        <View style={styles.container}>
            <LoadingCircle >
                <Logo width={100} height={100} />        
            </LoadingCircle>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#000",
    },
    logo : {
        width : 80,
        height : 80,
        alignSelf  : "center"
    },
    circle : {
        height:120,
        width:120,
        borderColor:"#ccc",
        borderBottomColor : "#FFBF00",
        borderWidth:4,
        justifyContent : "center"
    }
})