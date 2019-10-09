import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'

const ProductOptionTitleAndEstPrice = () => {
    return (
        <View style={styles.container}>
            <View>
            <Image
                style={styles.image}
                source={require('../../assets/profile.jpg')}
                />
            </View>
            <View style={styles.titleAndPriceContainer}>
                <Text style = {styles.title} numberOfLines = {2}>Best Hot Products in the Year of 2019 is the best.</Text>
                <Text style = {styles.price}>US $201 - $220</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingBottom : 5,
        borderBottomWidth : 1,
        borderColor : '#CFD8DC'
    },
    titleAndPriceContainer :{
        flex:1,
        paddingHorizontal : 5,
        paddingVertical : 5
    },
    image : {
        width: 100, 
        height: 100,
        borderColor : '#CFD8DC', 
        borderWidth : 1
    },
    title :{
        fontSize : 16
    },
    price : {
        marginTop : 10,
        fontSize : 18,
        fontWeight : "bold"
    }
})

export default ProductOptionTitleAndEstPrice
