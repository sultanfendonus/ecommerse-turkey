import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TableCell = ({title, child}) => {
    return (
        <View style = {styles.container}>
            <Text style= {{fontWeight : "bold", fontSize : 16}}>{title}</Text>
            <Text>{child}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        justifyContent : "space-between",
        marginHorizontal : 10,
        marginVertical : 2,
        borderColor : 'black',
        borderBottomWidth : 1,
        paddingVertical : 5
    }
})

export default TableCell
