import React,{useState} from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity,FlatList } from 'react-native'
import {AntDesign} from '@expo/vector-icons'


const ConfirmProductList = ({Items}) => {
    const [quantityValue,setQuantityValue] = useState(1)
    return (
        <View style={styles.MainContainer}>
      
      <FlatList
        contentContainerStyle = {styles.flatlist}
        data={Items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
            console.log(item)
          return (
            <View style={styles.container}>
            <View>
            <Image
                style={styles.image}
                source={{uri : item[index].featured_img}}
                />
            </View>
            <View style={styles.titleAndPriceContainer}>
                <View style={{flex:1}}>
                    <Text style = {styles.title} numberOfLines = {2}>{item[index].name}</Text>
                    <Text style = {styles.price}>US {item[index].price}</Text>
                </View>

                <Text style={{fontSize: 10, color: '#B0BEC5',}}>{item[index].sku}</Text>

            </View>
            <View style={{alignSelf:'center', flexDirection: "row",marginRight:5}}>
                {/* Here I used Ternary operator . I use the coditon so that quantityValue naver been a negative value. */}
                <TouchableOpacity onPress={()=>setQuantityValue(quantityValue===1 ? quantityValue : quantityValue-1)}>
                    <AntDesign name="minuscircleo" style={styles.iconStyle} />
                </TouchableOpacity>

                <Text style = {{fontSize : 20, paddingHorizontal:10}}>{item[index].quantity}</Text>

                <TouchableOpacity onPress={()=>setQuantityValue(quantityValue+1)}>
                    <AntDesign name="pluscircleo" style={styles.iconStyle} />
                </TouchableOpacity>
            </View>
        </View>
          );
        }}
      />
    </View>
        
    )
}

const styles = StyleSheet.create({
    container : {  
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingBottom : 5,
        borderBottomWidth : 1,
        borderColor : '#CFD8DC',
        marginTop: 10,
        marginBottom: 10
    },
    titleAndPriceContainer :{
        flex:1,
        paddingHorizontal : 5,
        paddingVertical : 5,
    },
    image : {
        width: 100, 
        height: 100,
        borderColor : '#CFD8DC', 
        borderWidth : 1
    },
    title :{
        fontSize : 16
    },
    price : {
        marginTop : 10,
        fontSize : 18,
        fontWeight : "bold"
    },
    plusMinusText : {
        borderColor : 'black', 
        borderWidth : 2, 
        borderRadius : 15, 
        fontSize : 25, 
        fontWeight : "bold", 
        padding : 5
    },
    iconStyle:{
        fontSize: 25,
        alignSelf: 'center',
    },
    flatlist : {
        paddingTop: 5
      },

    MainContainer:{
        flexDirection : "row",
        justifyContent : 'space-between',
        // borderWidth : 5,
        // borderColor : 'blue',
        flex: 2,
    },
})

export default ConfirmProductList
