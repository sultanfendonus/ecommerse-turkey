import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PriceDiscountAndFavTab = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.PriceAndDiscount}>
                <Text style = {styles.priceText}>US $7.79</Text>
                <View style = {{flexDirection : "row"}}>
                    <Text style = {styles.discountTextwithPrice}>US $7.79 </Text>
                    <Text style = {styles.discount}>-61%</Text>
                </View>
                
            </View>
            <View style = {styles.favouriteTab}>
                <Text>Love me</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flexDirection: "row",
        height: 70,
        backgroundColor : '#FF3D00',
        flexDirection : 'row',
        justifyContent : "space-between",
        alignItems : "center"
    },
    PriceAndDiscount : {
        marginLeft : 10

    },
    favouriteTab : {
        marginRight : 10,
    },
    priceText : {
        color : "white",
        fontWeight : "bold",
        fontSize : 22,
    },
    discountTextwithPrice :{
        textDecorationLine : "line-through",
        color : 'white',

    },
    discount : {
        backgroundColor : 'white',
        color : '#FF3D00',
        fontSize: 14,
        marginLeft : 2,
        borderRadius : 3,
        paddingHorizontal : 3
    }
})

export default PriceDiscountAndFavTab
