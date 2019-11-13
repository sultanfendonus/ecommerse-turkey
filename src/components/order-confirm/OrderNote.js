import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const OrderNote = ({ term, onTermChange,  }) => {
    return (
        <View style={styles.backgroundStyle}>
            <TextInput
                multiline={true}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Please Input Your Order Note Here..."
                returnKeyType="done"
                blurOnSubmit={true}
                value={term}
                onChangeText={onTermChange}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    backgroundStyle: {
      marginTop: 10,
      height: 120,
      borderRadius: 5,
      marginHorizontal: 5,
      padding: 5,
      flexDirection: 'row',
      marginBottom: 0,
      borderWidth: 1,
      borderColor: "black"
    },
    inputStyle: {
      flex: 1,
      fontSize: 18
    },
    iconStyle: {
      fontSize: 35,
      alignSelf: 'center',
      marginHorizontal: 15
    }
  });

export default OrderNote
