import React from 'react'
import { View } from 'react-native'

// Vertical white space as a separator between component
export default function VerticalSeparator({height}) {
    return (
        <View style={{
            marginTop : height / 2,
            marginBottom : height / 2,
        }}>
            
        </View>
    )
}

