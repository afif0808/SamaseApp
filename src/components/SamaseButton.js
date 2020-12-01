import React from 'react'
import { View, Text, StyleSheet , TouchableOpacity } from 'react-native'

export default function SamaseButton({children , style, disabled ,  ...props}) {
    return (
            <TouchableOpacity disabled={disabled == null ? false : disabled } {...props}>
                <View style={[styles.button,style]}>
                    <Text style={styles.buttonText}>{children}</Text>
                </View>
            </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button : {
        padding : 15,
        backgroundColor : "#FFBF00",
        borderRadius : 10,
        fontFamily:"roboto"
    },
    buttonText : {
        color : "#fff",
        textAlign : "center",
        fontWeight:"bold",
        fontSize : 15
    }
})