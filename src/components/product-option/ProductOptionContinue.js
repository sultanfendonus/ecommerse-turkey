import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProductOptionContinue = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.continueText}>Continue</Text>
        </View>
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
