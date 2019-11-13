import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import ShippingInfo from '../components/order-confirm/ShippingInfo'
import ConfirmProductList from '../components/order-confirm/ConfirmProductList'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import OrderNote from '../components/order-confirm/OrderNote'
import BrandLogoPicker from '../components/order-confirm/BrandLogoPicker'
import { ScrollView } from 'react-native-gesture-handler'
import ProductOptionContinue from '../components/product-option/ProductOptionContinue'



const OrderConfirmationScreen = ({navigation}) => {
    return (
        <ScrollView style={{margin: 5}}>
            <ShippingInfo />
            <TouchableOpacity style = {styles.delivaryOption}>
                <MaterialCommunityIcons name="radiobox-marked" style={{fontSize: 30,}} />
                <Text style={{fontSize: 20, marginTop: 3}}>Cash On Delivery</Text>
            </TouchableOpacity>
            <OrderNote />
            <BrandLogoPicker />
            <ConfirmProductList />
            <ProductOptionContinue 
                btnText = "Confirm Order"
                isNextPageEnable = {true}
                navigation = {navigation}
            />
        </ScrollView>
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