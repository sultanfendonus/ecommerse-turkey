import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProductOptionTitleAndEstPrice from '../components/ProductOptionTitleAndEstPrice'
import ProductOptionColors from '../components/ProductOptionColors'

const ProductOptionScreen = () => {
    return (
        <View style={styles.container}>
            <ProductOptionTitleAndEstPrice />
            <ProductOptionColors />
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        margin : 5,
    }
})

export default ProductOptionScreen
