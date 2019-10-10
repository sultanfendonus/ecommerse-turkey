import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ProductOptionTitleAndEstPrice from '../components/ProductOptionTitleAndEstPrice'
import ProductOptionColors from '../components/ProductOptionColors'
import ProductOptionVeriant from '../components/ProductOptionVeriant'
import ProductOptionQuantity from '../components/ProductOptionQuantity'

const ProductOptionScreen = ({navigation}) => {
    const singleProduct = navigation.getParam('singleProduct')
    //console.log(singleProduct);


    return (
        <View style={styles.container}>
                <ProductOptionTitleAndEstPrice
                    featured_image = {singleProduct.featured_img}
                    title = {singleProduct.name}
                    price = {singleProduct.discount_price}
                />

                <ScrollView>
                    
                    <ProductOptionColors 
                        colors = {singleProduct.colors}
                    />
                    
                    {singleProduct.choice_options.map((value, index) => {
                        //console.log(value.options);
                        return <View key={index}>
                                <ProductOptionVeriant item = {value.options} title={value.title}/>
                        </View> 
                    })}

                    <ProductOptionQuantity />
            </ScrollView>
                
                
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        margin : 5,
        flex:1
    }
})

export default ProductOptionScreen
