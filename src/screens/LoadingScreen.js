import React ,{useState, useEffect , useRef} from 'react'
import { StyleSheet , View , Image , Animated ,Text , Easing } from 'react-native'
import { Authenticate } from '../handlers/AuthHandler';
import Svg from 'react-native-svg';

import Logo from '../../assets/logo-sin.svg';
import KeyboardAvoidingComponent from '../components/KeyboardAvoidingComponent';
import { TextInput } from 'react-native-gesture-handler';
import SamaseTextInput from '../components/SamaseTextInput';
import LoadingCircle from '../components/LoadingCircle';


const logo = require("../../assets/logo-sin.png")
const splashGif = {uri : "http://samasecentro.com:777/assets/gifs/splash.gif"}
var SharedPreferences = require('react-native-shared-preferences');

export default function LoadingScreen({children,loading , style, onAnimationComplete}) {
    if(loading) {
        return (
            <View style={[styles.container,style]}>
                <LoadingCircle onAnimationComplete={onAnimationComplete}>
                    <Logo width={100} height={100} />        
                </LoadingCircle>
            </View>
        )    
    } else {
        return <View>{children}</View>
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#000",
    },
})