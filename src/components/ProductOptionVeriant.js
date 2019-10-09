import React from 'react'
import { View, Text, StyleSheet,FlatList } from 'react-native'

const ProductOptionVeriant = () => {

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
            <Text style = {styles.mainTitle}>Size : </Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator = {false}
                marginTop = {10}
                data={item}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item }) => {
                return <View style = {{borderWidth : 1, borderColor : 'black',padding : 15, marginRight : 5}}>
                    <Text>S</Text>
                </View>
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

export default ProductOptionVeriant
