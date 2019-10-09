import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PriceDiscountAndFavTab = ({discount,discount_price,price,discount_type,shipping_type}) => {

    const mainPriceView = ()=> {
        if(discount===0){
            return price
        }else{
            return discount_price
        }
    }

    const discountViewer = ()=> {
        if(discount>0 && discount_type==='percent'){
            return(
                <View style = {{flexDirection : "row"}}>
                <Text style = {styles.discountTextwithPrice}>US ${price} </Text>
                <Text style = {styles.discount}>-{discount}%</Text>
                </View>
            )
        }else if(discount>0 && discount_type==='amount'){
            return(
                <View style = {{flexDirection : "row"}}>
                <Text style = {styles.discountTextwithPrice}>US ${price} </Text>
                <Text style = {styles.discount}>-{discount}$</Text>
                </View>
            )
            
        }else{
            return;
        }
        

    }

    const renderShipingType = ()=> {
        if(shipping_type==='free'){
            return 'Free Shiping'
        }else{
            return;
        }
        
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.PriceAndDiscount}>
                <Text style = {styles.priceText}>US ${mainPriceView()}</Text>
               {discountViewer()}
                
            </View>
            <View style = {styles.favouriteTab}>
                <Text style={{color : 'white'}}>{renderShipingType()}</Text>
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
