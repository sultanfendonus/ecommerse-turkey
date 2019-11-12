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
    const [filteredPrice,setfilteredPrice] = useState(singleProduct.discount_price)
    const [readyToNextPage, setReadyToNextPage] = useState(false);
    const { state } = useContext(HomeContext);

    let string1 = "";

    useEffect(()=>{
 
           if(state.chooseOption===undefined){
           }else{

                var keys = Object.keys(state.chooseOption).sort();

                for(i=0; i< Object.keys(state.chooseOption).length; i++){
                        var x = keys[i];
                        if(i===0){
                            string1 = state.chooseOption[x]
                        }else{
                            string1 = string1+"-"+state.chooseOption[x]
                    }
                    

                    if(state.chooseColor.color===undefined){

                        //filter Text withOut Color Atribute
                        let filterdText = string1;
                        
                        if(singleProduct.variations[filterdText]===undefined){
                        }else{
                            console.log(singleProduct.variations[filterdText])
                            setfilteredPrice(singleProduct.variations[filterdText].price || singleProduct.discount_price)

                            //call Ready to next page changer function
                            readyToNextPageValueChanger(singleProduct.variations[filterdText].price)
                            
                        }

                        
                    }else{
                        console.log(state.chooseColor.color+"-"+string1)
                        //filter Text with Color Atribute
                        let filterdText = state.chooseColor.color+"-"+string1;
                        
                        if(singleProduct.variations[filterdText]===undefined){
                        }else{
                            console.log(singleProduct.variations[filterdText])
                            setfilteredPrice(singleProduct.variations[filterdText].price || singleProduct.discount_price)

                            //call Ready to next page changer function
                            readyToNextPageValueChanger(singleProduct.variations[filterdText].price)
                            
                        }

                        
                    }
                   
                }
           }   
           
        
    })


    readyToNextPageValueChanger = (price)=>{
        //set ReadyToNextPage true if we got the actual price of the product
        if(price){
            setReadyToNextPage(true)
        }
    }

    const colorPanelDisplayDiscionMaker = ()=>{
        if(singleProduct.colors.length>0){
            return( 
            <ProductOptionColors 
                colors = {singleProduct.colors}
            />
            )
        }
    }

    return (
        <View style={styles.container}>
                <ProductOptionTitleAndEstPrice
                    featured_image = {singleProduct.featured_img}
                    title = {singleProduct.name}
                    price = {filteredPrice}
                />

                <ScrollView>
                    {colorPanelDisplayDiscionMaker()}

                   
                    
                    {singleProduct.choice_options.map((value, index) => {
                        //console.log(value.options);
                        return <View key={index}>
                                <ProductOptionVeriant item = {value.options} title={value.title} name = {value.name} />
                        </View> 
                    })}

                    <ProductOptionQuantity />
            </ScrollView>

                <ProductOptionContinue 
                    navigation={navigation}
                    isNextPageEnable = {readyToNextPage}
                
                />
                
                
        </View>
    )
}

ProductOptionScreen.navigationOptions ={
    title : "Choose Options"
}
const styles = StyleSheet.create({
    container : {
        margin : 5,
        flex:1
    }
})

export default ProductOptionScreen
