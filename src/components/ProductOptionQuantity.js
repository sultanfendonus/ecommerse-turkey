import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native'
import {AntDesign} from '@expo/vector-icons'

const ProductOptionQuantity = () => {


    return (
        <View>
            <Text style = {styles.mainTitle}>Quantity : </Text>

            <View style = {{flexDirection : 'row', margin : 5}}>
                <TouchableOpacity>
                    <AntDesign name="minuscircleo" style={styles.iconStyle} />
                </TouchableOpacity>

                <Text style = {{fontSize : 28, paddingHorizontal:10}}>0</Text>

                <TouchableOpacity>
                    <AntDesign name="pluscircleo" style={styles.iconStyle} />
                </TouchableOpacity>
            </View>
            
           
        </View>
    )
}

const styles = StyleSheet.create({
    mainTitle : {
        fontWeight : "bold" , 
        fontSize : 22, 
        marginTop : 10
    },
    plusMinusText : {
        borderColor : 'black', 
        borderWidth : 2, 
        borderRadius : 15, 
        fontSize : 25, 
        fontWeight : "bold", 
        padding : 5
    },
    image:{
        height : 32,
        width : 32
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
    }
})

export default ProductOptionQuantity
