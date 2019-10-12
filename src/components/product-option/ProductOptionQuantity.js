import React,{useState} from 'react'
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native'
import {AntDesign} from '@expo/vector-icons'

const ProductOptionQuantity = () => {

    const [quantityValue,setQuantityValue] = useState(1)

    return (
        <View>
            <Text style = {styles.mainTitle}>Quantity : </Text>

            <View style = {{flexDirection : 'row', margin : 5}}>

                {/* Here I used Ternary operator . I use the coditon so that quantityValue naver been a negative value. */}
                <TouchableOpacity onPress={()=>setQuantityValue(quantityValue===0 ? quantityValue : quantityValue-1)}>
                    <AntDesign name="minuscircleo" style={styles.iconStyle} />
                </TouchableOpacity>

                <Text style = {{fontSize : 28, paddingHorizontal:10}}>{quantityValue}</Text>

                <TouchableOpacity onPress={()=>setQuantityValue(quantityValue+1)}>
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
