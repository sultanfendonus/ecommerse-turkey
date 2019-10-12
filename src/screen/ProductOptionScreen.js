import React,{useState,useContext,useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ProductOptionTitleAndEstPrice from '../components/product-option/ProductOptionTitleAndEstPrice'
import ProductOptionColors from '../components/product-option/ProductOptionColors'
import ProductOptionVeriant from '../components/product-option/ProductOptionVeriant'
import ProductOptionQuantity from '../components/product-option/ProductOptionQuantity'
import ProductOptionContinue from '../components/product-option/ProductOptionContinue'
import { Context as HomeContext } from '../context/HomeContext';

const ProductOptionScreen = ({navigation}) => {
    const singleProduct = navigation.getParam('singleProduct')

    const { state } = useContext(HomeContext);
    

    useEffect(()=>{
         let string1 = "";

        // for (var property1 in state.chooseOption) {
        //     string1 = string1 + "-"+ state.chooseOption[property1];
        //   }


           console.log(state.chooseOption);
          

           if(state.chooseOption===undefined){

           }else{
            for(i=0; i< Object.keys(state.chooseOption).length; i++){
                var x = 'choice_'+i;
                if(i===0){
                    string1 = state.chooseOption[x]
                }else{
                    string1 = string1+"-"+state.chooseOption[x]
                }
                
                console.log(string1)
           }
           }
           
        // if(state.chooseOption===undefined){
            
        // }else{
        //     let arr = Object.values(state.chooseOption); // ['xxx', 1]
        //     console.log(arr);
        // }
          
        
    })

    return (
        <View style={styles.container}>
                <ProductOptionTitleAndEstPrice
                    featured_image = {singleProduct.featured_img}
                    title = {singleProduct.name}
                    price = {singleProduct.discount_price}
                />

                <ScrollView>
                    
                    <ProductOptionColors 
                        colors = {singleProduct.colors}
                    />
                    
                    {singleProduct.choice_options.map((value, index) => {
                        //console.log(value.options);
                        return <View key={index}>
                                <ProductOptionVeriant item = {value.options} title={value.title} name = {value.name} />
                        </View> 
                    })}

                    <ProductOptionQuantity />
            </ScrollView>

                <ProductOptionContinue />
                
                
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        margin : 5,
        flex:1
    }
})

export default ProductOptionScreen
