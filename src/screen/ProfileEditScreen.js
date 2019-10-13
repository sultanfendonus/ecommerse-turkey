import React,{useState} from 'react'
import { View, Text,Button } from 'react-native'
import { FontAwesome, MaterialIcons,Entypo } from '@expo/vector-icons';
import { Input } from 'react-native-elements';

const ProfileEditScreen = () => {

    const [count, setCount]= useState(0);

    return (
        <View>
            <Input
            placeholder='Name'
            leftIcon={
                <FontAwesome style={{marginRight:5,}} name="user" size={20} />
            }
            />

            <Input
            placeholder='Address'
            leftIcon={
                <FontAwesome style={{marginRight:5,}} name="map-marker" size={20} />
            }
            />

            <Input
            placeholder='Country'
            leftIcon={
                <FontAwesome style={{marginRight:5,}} name="globe" size={20} />
            }
            />

            <Input
            placeholder='City'
            leftIcon={
                <MaterialIcons style={{marginRight:5,}} name="location-city" size={20} />
            }
            />

            <Input
            placeholder='Postal Code'
            leftIcon={
                <Entypo style={{marginRight:5,}} name="map" size={20} />
            }
            />

            <Input
            placeholder='Phone'
            leftIcon={
                <Entypo style={{marginRight:5,}} name="phone" size={20} />
            }
            />
        </View>
    )
}

ProfileEditScreen.navigationOptions = {
    title: 'Profile Update',
    headerRight: (
        <MaterialIcons style= {{marginRight: 5,}} onPress={() => alert('This is a button!')} style={{marginRight:10,}} name="save" size={32} />
      ),
    
  };







export default ProfileEditScreen
