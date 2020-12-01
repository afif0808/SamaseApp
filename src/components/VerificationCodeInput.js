import React, { useRef, useState } from 'react'
import { View, TextInput , Text, StyleSheet } from 'react-native'

function renderFields(digit) {
}

const Field = React.forwardRef(({onChange  },ref) => {
    const [value , setValue] = useState("") 
    return (
        <TextInput
                ref={ref}
                onFocus={()=>{
                }} 
                onChangeText={(text)=>{
                    setValue(value)
                    if(onChange != null) {
                        // onChange(text)
                    }
                }}
                value={value}
                editable={true}
                style={styles.field} />
        )
    }
)

function Fields({digit}) {
    const fields = []
    const refs = []
    for(let i = 0 ; i < digit ; i++) {
        refs.push(useRef(null))
    }
    for(let i = 0 ; i < digit ; i++) {
        fields.push(
            <Field
                key={i}
                ref={refs[i]}
                onChange={(text)=>{
                    if(!!text) {
                        if(!!refs[i+1]) {
                            refs[i+1].current.focus()
                        }
                    }
                }}/>            
        )
    }
    return  fields
}


export default function VerificationCodeInput({digit}) {
    const values = []
    return (
        <View style={styles.container}>
            <Fields digit={digit} />
        </View>
    )
}
const styles = StyleSheet.create({
    field : {
        borderBottomColor : "#ccc",
        borderBottomWidth : 1,
        marginRight : 8,
        fontSize : 18
    },
    container : {
        flexDirection:"row"
    }
})