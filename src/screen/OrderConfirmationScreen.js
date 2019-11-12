import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import ShippingInfo from '../components/order-confirm/ShippingInfo'
import ConfirmProductList from '../components/order-confirm/ConfirmProductList'
import {MaterialCommunityIcons} from '@expo/vector-icons'



const OrderConfirmationScreen = () => {
    return (
        <View style={{marginTop: 20}}>
            <ShippingInfo />
            <TouchableOpacity style = {styles.delivaryOption}>
                <MaterialCommunityIcons name="radiobox-marked" style={{fontSize: 30,}} />
                <Text style={{fontSize: 20, marginTop: 3}}>Cash On Delvary</Text>
            </TouchableOpacity>
            <ConfirmProductList />
        </View>
    )
}

OrderConfirmationScreen.navigationOptions = {
    title : 'Order Confirmations'
}

const styles = StyleSheet.create({
    delivaryOption:{
        margin: 5,
        flexDirection : "row",
        borderBottomWidth: 1,
        borderColor: '#CFD8DC'
    }
})

export default OrderConfirmationScreen
