import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-elements';

const ProductTitleAndNumOfOrderTab = ({name,numOfSell}) => {
    return (
        <View style = {styles.container}> 
            <Text style = {{fontSize : 16, fontWeight:"bold", marginBottom:5}}>{name}</Text>
            <View style={{flexDirection : "row"}}>
                <Text>{numOfSell} orders</Text>

            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        paddingVertical: 10,
        backgroundColor : '#ECEFF1',
        paddingHorizontal : 5
    },

})

export default ProductTitleAndNumOfOrderTab
