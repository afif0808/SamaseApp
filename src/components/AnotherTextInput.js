import React from 'react'
import {StyleSheet,View, Text , TextInput, Button, Keyboard } from 'react-native'
import VerticalSeparator from './VerticalSeparator'

export default function AnotherTextInput({style, errorText, ...props }) {
    return (
        <View>
            <TextInput
                style={[styles.textInput]} 
                {...props} />
            <VerticalSeparator height={4} />
            {!!errorText ? <Text style={styles.error}>{errorText}</Text> : null}
        </View>
    )
}


const styles = StyleSheet.create({
    textInput : {
        borderColor : "#ccc",
        borderWidth : 1,
        backgroundColor : "#fff",
        padding : 10,
        paddingLeft : 20,
        borderRadius : 15,
        color : "#000",
    },
    error : {
        marginLeft : 10,
        fontStyle : "italic",
        fontWeight : "200"
    }
})