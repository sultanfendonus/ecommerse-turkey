import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons';

const ShippingInfo = ({userProfile, navigation}) => {
    
    return (
        <TouchableOpacity style={styles.container}
            onPress={()=>navigation.navigate('ProfileEditScreen')}
        >
            <Feather style={{margin: 10,}} name="map-pin" size={35} />
            <View style={styles.adressbar}>
                <Text style={{fontWeight: 'bold'}}>{userProfile.name}</Text>
                <Text numberOfLines={2}>{userProfile.address}</Text>
                <Text style={{paddingVertical: 3}}>{userProfile.city}</Text>
                <Text>{userProfile.postal_code}</Text>
                <Text style={{paddingVertical: 3}} >{userProfile.phone}</Text>
            </View>
            
            <MaterialIcons style={{marginRight: 10,alignSelf: 'center',}} name="navigate-next" size={35} />
            
            
        </TouchableOpacity>
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
