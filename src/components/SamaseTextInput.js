import React from 'react'
import {StyleSheet,View, Text , TextInput, Button, KeyboardAvoidingView, Keyboard } from 'react-native'
import VerticalSeparator from './VerticalSeparator'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function SamaseTextInput({style, textColor ,  Icon , placeholder, errorText, ...props }) {
    return (
        <View>
            <View style={[styles.textInput,{...style}]}>
                
                {!!Icon &&
                    <Icon width={20} style={styles.icon} height={20} fill={"#a3a096"} />
                }
                <TextInput
                    {...props}
                    style={{color:!!textColor ? textColor : "#fff",flex:1}}
                    placeholder={placeholder}
                    placeholderTextColor={"#a3a096"}
                    />
            </View>
            <VerticalSeparator height={4} />
            {!!errorText ? <Text style={styles.error}>{errorText}</Text> : null}
        </View>

    )
}


const styles = StyleSheet.create({
    textInput : {
        borderColor : "#a3a096",
        borderWidth : 2,
        paddingLeft : 10,
        borderRadius : 10,
        color : "#fff",
        flexDirection : "row",
    },
    error : {
        marginLeft : 10,
        fontWeight : "200",
        fontSize  : 12,
        color :  "#f00",
    },
    icon : {
        marginTop : 15,
        marginRight : 5,
        borderRightColor : "#a3a096"
    }
})