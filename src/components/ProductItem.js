import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'

const ProductItem = ({result}) => {
    return (
        <View style={{flex:1}}>
            <View style={styles.container}>
            <View >
                <Image style={styles.image} source={{ uri: result.featured_img }} />
                <Text style={styles.name}>{result.name}</Text>
                <Text>
                     {result.unit_price}$/{result.unit}
                </Text>
            </View>
           
        </View>

        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {     
         alignItems: 'center',
        // marginRight : 10,
        marginBottom : 10,
        // borderColor : 'red',
        // borderWidth : 5,
        flex: 1,

      },
      image: {
        width: 150,
        height: 150,
        borderRadius: 4,
        marginBottom: 5
      },
      name: {
        fontWeight: 'bold'
      },
      imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
      },
})
export default ProductItem
