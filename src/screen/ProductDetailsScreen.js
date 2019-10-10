import React, { useState, useContext, useEffect } from 'react'
import { View, Text,Button, StyleSheet, ScrollView } from 'react-native'
import ProductImages from '../components/ProductImages'
import { Context as HomeContext } from '../context/HomeContext';
import { Context as AuthContext } from '../context/AuthContext';
import BuyOrCartTab from '../components/BuyOrCartTab';
import PriceDiscountAndFavTab from '../components/PriceDiscountAndFavTab';
import ProductTitleAndNumOfOrderTab from '../components/ProductTitleAndNumOfOrderTab';
import ProductDiscription from '../components/ProductDiscription';
import ProductBasicInfo from '../components/ProductBasicInfo';


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
                <PriceDiscountAndFavTab
                    discount = {singleProduct.discount}
                    discount_price = {singleProduct.discount_price}
                    price = {singleProduct.price}
                    discount_type = {singleProduct.discount_type}
                    shipping_type = {singleProduct.shipping_type}
                />
                <ProductTitleAndNumOfOrderTab
                    name = {singleProduct.name}
                    numOfSell = {singleProduct.num_of_sale}
                />
                <ProductBasicInfo 
                    singleProduct = {singleProduct}
                />
                <ProductDiscription
                htmlContent = {singleProduct.description}
                />

            </ScrollView>
            

            <BuyOrCartTab
            navigation={navigation}
            singleProduct = {singleProduct}
            
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
