import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductItem from './ProductItem';

const ProductList = ({ title, results, navigation }) => {
  if (!results.length) {
    console.log(results.length)
    return null;
  }

  return (
    <View style={styles.MainContainer}>
      
      <FlatList
        contentContainerStyle = {styles.flatlist}
        numColumns ={2}
        width="100%"
        data={results}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            style={{width :'50%'}}
            onPress = {()=>{
              navigation.navigate('ProductDetails',{id : item.id});
            }}
            >
              <ProductItem
                result = {item}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer:{
    flexDirection : "row",
    justifyContent : 'space-between',
    // borderWidth : 5,
    // borderColor : 'blue',
    flex: 2,

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  flatlist : {
    paddingTop: 5
  }
});

export default withNavigation(ProductList);
