import React,{useState} from 'react'
import { View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import {Entypo} from '@expo/vector-icons'

const ProductOptionColors = ({colors}) => {

    const [selectedColor, setselectedColor] = useState("");
    

    const colorSelector = (item)=>{
        if(selectedColor === item.name){
            return <TouchableOpacity style = {{backgroundColor : item.code, width : 50, height : 50, marginRight : 5,borderWidth : 2, borderColor : 'red', padding: 5}}>
                    <Entypo name="check" style={styles.iconStyle} />
            </TouchableOpacity>
        }else{
            return <TouchableOpacity onPress={()=>setselectedColor(item.name)} style = {{backgroundColor : item.code, width : 50, height : 50, marginRight : 5}}></TouchableOpacity>

        }
        
    }


    return (
        <View>
            <Text style = {styles.mainTitle}>Colors : {selectedColor}</Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator = {false}
                marginTop = {10}
                extraData={useState()}
                data={colors}
                keyExtractor={(item, index) => item.name.toString()}
                renderItem={({ item }) => {
                    return colorSelector(item);
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
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        color : "white"
    }
})

export default ProductOptionColors
