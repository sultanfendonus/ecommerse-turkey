import React,{useState,useContext} from 'react'
import { View, Text, StyleSheet,FlatList,TouchableOpacity } from 'react-native'
import { Context } from '../../context/HomeContext';

const ProductOptionVeriant = ({item, title, name}) => {

    const [selectedVeriant, setSelectedVeriant] = useState('');
    const { setUserChoise } = useContext(Context);

    //console.log(name)

    const veriantSelector = (item,index)=>{
        if(selectedVeriant===item){
            return(
                <TouchableOpacity onPress={()=>{
                    setSelectedVeriant(item)
                }} style = {{borderWidth : 1, borderColor : 'red',padding : 15, marginRight : 5}}>
                <Text>{item}</Text>
            </TouchableOpacity>
            ) 
        }else{
            return(
                <TouchableOpacity onPress={()=>{
                    setSelectedVeriant(item)
                    setUserChoise(name , item)
                }} style = {{borderWidth : 1, borderColor : 'black',padding : 15, marginRight : 5}}>
                <Text>{item}</Text>
            </TouchableOpacity>
            ) 

        }
        
    }

    return (
        <View>
            <Text style = {styles.mainTitle}>{title} : {selectedVeriant}</Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator = {false}
                marginTop = {10}
                data={item}
                extraData = {useState()}
                keyExtractor={(item, index) => index.toString()}
                renderItem={( {item, index} ) => {
                return veriantSelector(item,index);
                 
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
