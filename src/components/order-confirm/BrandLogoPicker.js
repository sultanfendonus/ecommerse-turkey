import  React,{useEffect, useState, useContext} from 'react';
import { Button, Image, View,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {Context as HomeContext} from '../../context/HomeContext'
import { Context as AuthContext } from '../../context/AuthContext';

const BrandLogoPicker = () => {

  const { state } = useContext(AuthContext);
  const {saveBrandImage} = useContext(HomeContext);
  const [image, setImage] = useState(null);

  useEffect(() => {
    getPermissionAsync();
  })


  
  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

   const _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);
    

    if (!result.cancelled) {
      setImage( result.uri )
      saveBrandImage({email : state.email, api_token : state.token},result)
    }
  };
 

    return (
      <View style={{ alignItems: 'center', }}>
        <TouchableOpacity
          onPress={()=>_pickImage()}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'blue', alignItems: 'center',}}>Pick an Image for your brand logo</Text>
        </TouchableOpacity>
        {image &&
          <Image source={{ uri: image }} style={{ width: 80, height: 80 , margin: 10}} />}
      </View>
    )
  
}

export default BrandLogoPicker;