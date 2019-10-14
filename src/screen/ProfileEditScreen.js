import React,{useState, useEffect, useContext} from 'react'
import { View, Text,Button } from 'react-native'
import { FontAwesome, MaterialIcons,Entypo } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import NavigationSaveButton from '../components/NavigationSaveButton';
import {Context as AccountContext} from '../context/AccountContext'
import { Context as AuthContext } from '../context/AuthContext';

const ProfileEditScreen = () => {
    const {state:{userProfile} } = useContext(AccountContext);
    
    const [name, setName] = useState(userProfile.name)
    const [address, setAddress] = useState(userProfile.address)
    const [country, setCountry] = useState(userProfile.country)
    const [city, setCity] = useState(userProfile.city)
    const [postal, setPostal] = useState(userProfile.postal_code)
    const [phone, setPhone] = useState(userProfile.phone)

    

    return (
        <View>
            <Input
            placeholder='Name'
            value={name}
            onChangeText={(text) =>{
                setName(text);
                userProfile.name= text
            } 
            }
            leftIcon={
                <FontAwesome style={{marginRight:5,}} name="user" size={20} />
            }
            />

            <Input
            placeholder='Address'
            value={address}
            onChangeText={(text) =>{
                setAddress(text);
                userProfile.address= text
            } 
            }
            leftIcon={
                <FontAwesome style={{marginRight:5,}} name="map-marker" size={20} />
            }
            />

            <Input
            placeholder='Country'
            value={country}
            onChangeText={(text) =>{
                setCountry(text);
                userProfile.country= text
            } 
            }
            leftIcon={
                <FontAwesome style={{marginRight:5,}} name="globe" size={20} />
            }
            />

            <Input
            placeholder='City'
            value={city}
            onChangeText={(text) =>{
                setCity(text);
                userProfile.city= text
            } 
            }
            leftIcon={
                <MaterialIcons style={{marginRight:5,}} name="location-city" size={20} />
            }
            />

            <Input
            placeholder='Postal Code'
            value={postal}
            onChangeText={(text) =>{
                setPostal(text);
                userProfile.postal_code= text
            } 
            }
            leftIcon={
                <Entypo style={{marginRight:5,}} name="map" size={20} />
            }
            />

            <Input
            placeholder='Phone'
            value={phone}
            onChangeText={(text) =>{
                setPhone(text);
                userProfile.phone= text
            } 
            }
            leftIcon={
                <Entypo style={{marginRight:5,}} name="phone" size={20} />
            }
            />
        </View>
    )
}

ProfileEditScreen.navigationOptions = ({navigation})=> {


    return{
        title: 'Profile Update',
        headerRight: <NavigationSaveButton navigation={navigation} />
    }
    
    
  };







export default ProfileEditScreen
