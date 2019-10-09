import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProductOptionTitleAndEstPrice from '../components/ProductOptionTitleAndEstPrice'
import ProductOptionColors from '../components/ProductOptionColors'
import ProductOptionVeriant from '../components/ProductOptionVeriant'
import ProductOptionQuantity from '../components/ProductOptionQuantity'

const ProductOptionScreen = () => {
    return (
        <View style={styles.container}>
            <ProductOptionTitleAndEstPrice />
            <ProductOptionColors />
            <ProductOptionVeriant />

            <ProductOptionQuantity />
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        margin : 5,
    }
})

export default ProductOptionScreen
