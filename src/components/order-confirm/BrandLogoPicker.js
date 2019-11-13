import * as React from 'react';
import { Button, Image, View,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class BrandLogoPicker extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ alignItems: 'center', }}>
        <TouchableOpacity
          onPress={this._pickImage}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'blue', alignItems: 'center',}}>Pick an Image for yor brand logo</Text>
        </TouchableOpacity>
        {image &&
          <Image source={{ uri: image }} style={{ width: 80, height: 80 , margin: 10}} />}
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}