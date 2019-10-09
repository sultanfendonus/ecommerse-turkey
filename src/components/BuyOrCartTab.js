import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const BuyOrCartTab = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.cart}>
                <Text style = {styles.cartText}>Add To Cart</Text>

            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('ProductOption')} style={styles.buy}>
                <Text style = {styles.buyText}>Buy Now</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 50,
    },

    cart:{
        flex : 1,
        backgroundColor: '#FBE9E7',
        justifyContent : "center"
    },
    buy :{
        flex : 1,
        backgroundColor : '#FF3D00',
        justifyContent : "center"
    },
    cartText : {
        color : '#DD2C00',
        fontSize : 18,
        fontWeight : "bold",
        textAlign : "center",
        
    },
    buyText : {
        color : 'white',
        fontSize : 18,
        fontWeight : "bold",
        textAlign : "center",
        
    }
    
})

export default BuyOrCartTab
