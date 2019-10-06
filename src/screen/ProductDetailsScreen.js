import React, { useState, useContext, useEffect } from 'react'
import { View, Text,Button, StyleSheet, ScrollView } from 'react-native'
import ProductImages from '../components/ProductImages'
import { Context as HomeContext } from '../context/HomeContext';
import { Context as AuthContext } from '../context/AuthContext';
import BuyOrCartTab from '../components/BuyOrCartTab';
import PriceDiscountAndFavTab from '../components/PriceDiscountAndFavTab';


const ProductDetailsScreen = ({navigation}) => {

    const { state } = useContext(AuthContext);
    const { state: {singleProduct}, getSingleProductWithDescriptions } = useContext(HomeContext);

    useEffect(()=>{
        getSingleProductWithDescriptions({email : state.email, api_token : state.token, id: navigation.getParam('id')});
    },[])

    if(singleProduct===undefined){
        return(
            <View>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <ProductImages
                    style = {styles.ProductImage}
                    imageData = {singleProduct.photos}
                />
                <PriceDiscountAndFavTab />

            </ScrollView>
            

            <BuyOrCartTab
            style = {styles.buyorcart}
            />
        </View>
    )
}

const styles = StyleSheet.create({
   container : {
       flex:1,
       //justifyContent: "space-between"
      
   },
   ProductImage : {
      
   },
   buyorcart : {
      
   }

})

ProductDetailsScreen.navigationOptions = ({navigation}) => {
     return {
           headerTransparent: true, headerStyle: { borderBottomWidth: 0},
           
    } 
}

export default ProductDetailsScreen
