import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ProductOptionContinue = ({navigation, isNextPageEnable}) => {
    return (
        <TouchableOpacity onPress={()=>isNextPageEnable===true ? navigation.navigate('OrderConfirm'):alert('You Can not go next Page until choose Options!')} style={styles.container}>
            <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 50,
        backgroundColor: '#FF3D00',
        justifyContent: "center",
        alignItems:"center",
        
    },
    continueText : {
        fontSize : 20,
        fontWeight : "bold",
        color: 'white'
    }
})

export default ProductOptionContinue
