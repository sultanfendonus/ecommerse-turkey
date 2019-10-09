import React from 'react'
import { View, Text, StyleSheet,FlatList } from 'react-native'

const ProductOptionColors = () => {

    const item = [{
            id : 1,
            Colors : '#263238'
        },
        {
            id : 2,
            Colors : '#455A64'
        },
        {
            id : 3,
            Colors : '#607D8B'
        },
        {
            id : 4,
            Colors : '#263238'
        },
        {
            id : 5,
            Colors : '#455A64'
        },
        {
            id : 6,
            Colors : '#607D8B'
        }
    ]   


    return (
        <View>
            <Text style = {styles.mainTitle}>Colors : </Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator = {false}
                marginTop = {10}
                data={item}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item }) => {
                return <View style = {{backgroundColor : item.Colors, width : 80, height : 80, marginLeft : 10}}></View>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainTitle : {
        fontWeight : "bold" , 
        fontSize : 22, 
        marginTop : 10
    }
})

export default ProductOptionColors
