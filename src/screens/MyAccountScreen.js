import React from 'react'
import { View } from 'react-native'





export default function MyAccountScreen({navigation,route}) {
    return (
        <View style={{flex : 1,justifyContent:"center"}}>
            <AccountInformationScreen navigation={navigation} route={route} />
        </View>
    )
}