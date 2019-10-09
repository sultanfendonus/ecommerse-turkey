import React from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet  } from 'react-native'
import HTML from 'react-native-render-html';

const ProductDiscription = ({htmlContent}) => {

    return (
        <View style={styles.container}>
            <Text style= {styles.headerText}>Item Description</Text>
           <ScrollView style={{ flex: 1 }}>
                <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:5
    },
    headerText : {
        paddingVertical : 10,
        fontSize : 18,
        fontWeight : "bold"
    }
})

export default ProductDiscription
