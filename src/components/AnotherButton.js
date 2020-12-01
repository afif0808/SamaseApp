import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function AnotherButton({children , disabled ,  ...props}) {
    return (
            <TouchableOpacity disabled={disabled} {...props}>
                <View style={[styles.button,{opacity:(disabled ? 0.7 : 1 )}]}>
                    <Text style={styles.buttonText}>{children}</Text>
                </View>
            </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button : {
        padding : 15,
        backgroundColor : "#FFBF00",
        borderRadius : 20,
    },
    buttonText : {
        color : "#fff",
        textAlign : "center",
        fontWeight:"bold",
    }
})