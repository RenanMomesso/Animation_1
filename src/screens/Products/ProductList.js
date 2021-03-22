import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'

const {width } = Dimensions.get('window')

export default function ProductList(props) {
    console.log(props)
    // console.log(...props)
    return (
        <TouchableOpacity style={{width:'50%'}}>
            <View style={{width:width / 2, backgroundColor:'gainsboro'}}>
            
            </View>
        </TouchableOpacity>
    )
}
