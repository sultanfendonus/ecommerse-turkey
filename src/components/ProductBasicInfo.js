import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TableCell from './TableCell'

const ProductBasicInfo = ({singleProduct}) => {
    return (
        <View>
            <Text style= {styles.headerText}>Item Info</Text>

            <TableCell title = 'Product Code' child= {singleProduct.code} />
            <TableCell title = 'Product Unit' child= {singleProduct.unit} />
            <TableCell title = 'Brand' child= {singleProduct.brand_name} />
            <TableCell title = 'Colors' child= {singleProduct.colors.join(", ")} />
            <TableCell title = 'Variation' child= {singleProduct.choice_options.map(arr => arr.title).join(", ")} />
        </View>
    )
}

const styles = StyleSheet.create({
    headerText : {
        paddingVertical : 10,
        fontSize : 18,
        fontWeight : "bold",
        marginLeft : 5
    }
})

export default ProductBasicInfo
