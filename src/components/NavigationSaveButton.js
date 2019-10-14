import React,{useContext} from 'react'
import { View, Text } from 'react-native'
import { FontAwesome, MaterialIcons,Entypo } from '@expo/vector-icons';
import { Context as AuthContext } from '../context/AuthContext';
import {Context as AccountContext} from '../context/AccountContext'

const NavigationSaveButton = ({navigation}) => {
    const { state} = useContext(AuthContext);
    const { setUserProfile, state:{userProfile }} = useContext(AccountContext);

    return (
        <View>
           <MaterialIcons style= {{marginRight: 5,}} onPress={() => {
                setUserProfile({email : state.email, api_token : state.token},{name : userProfile.name,address : userProfile.address, country : userProfile.country,city : userProfile.city,postal_code : userProfile.postal_code, phone : userProfile.phone },()=>{
                    navigation.goBack();
                })
                
            }} style={{marginRight:10,}} name="save" size={32} />
        </View>
    )
}

export default NavigationSaveButton
