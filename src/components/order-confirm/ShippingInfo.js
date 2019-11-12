import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons';

const ShippingInfo = () => {
    return (
        <View style={styles.container}>
            <Feather style={{margin: 10,}} name="map-pin" size={35} />
            <View style={styles.adressbar}>
                <Text style={{fontWeight: 'bold'}}>Md. Sultann Mahamud</Text>
                <Text numberOfLines={2}>23/4, Katasur , Sheree banglafssfdsfgsd banglafssfdsfgsdbanglafssfdsfgsdbanglafssfdsfgsd</Text>
                <Text style={{paddingVertical: 3}}>Dhaka, Bogra</Text>
                <Text>1207</Text>
                <Text style={{paddingVertical: 3}} >01723019985</Text>
            </View>
            
            <MaterialIcons style={{marginRight: 10,alignSelf: 'center',}} name="navigate-next" size={35} />
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth : 1,
        borderColor : '#CFD8DC'
    },
    adressbar:{
        flex:1,
        marginTop: 10
    }
})

export default ShippingInfo
