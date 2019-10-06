import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box';

const ProductImages = ({imageData}) => {
    const image = [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree'
        ];
        console.log(imageData)
    return (
        <View style={styles.slider}>
             <SliderBox
                
                images={imageData}
                sliderBoxHeight={350}
                onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
                }
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                circleLoop
                /> 
        </View>
    )
}

const styles = StyleSheet.create({
    slider: {
        
    }
})

export default ProductImages
