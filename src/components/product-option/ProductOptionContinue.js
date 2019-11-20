import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Context as CartContext} from '../../context/CartContext'

const ProductOptionContinue = ({navigation, isNextPageEnable, btnText,action,Items}) => {

    const {addToCart, directBuyCart} = useContext(CartContext);

    const nextPage = ()=>{
        if(isNextPageEnable === true && action ==='buy'){
            directBuyCart(Items)
            navigation.navigate('OrderConfirm')
        }else if(isNextPageEnable === true && action ==='cart'){
            //addToCart('fruits of king')
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
        marginTop: 5
        
    },
    continueText : {
        fontSize : 20,
        fontWeight : "bold",
        color: 'white'
    }
})

export default ProductOptionContinue
