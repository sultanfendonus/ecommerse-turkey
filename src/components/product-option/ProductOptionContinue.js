import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Context as CartContext} from '../../context/CartContext'

const ProductOptionContinue = ({navigation, isNextPageEnable, btnText,action}) => {

    const {addToCart} = useContext(CartContext);

    const nextPage = ()=>{
        if(isNextPageEnable === true && action ==='buy'){
            navigation.navigate('OrderConfirm')
        }else if(isNextPageEnable === true && action ==='cart'){
            addToCart({apple: 'fruits of king'})
        }else {
            alert('You Can not go next Page until choose Options!')
        }
    }

    return (
        <TouchableOpacity onPress={()=>nextPage()} style={styles.container}>
            <Text style={styles.continueText}>{btnText}</Text>
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
