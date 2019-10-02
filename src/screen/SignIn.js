import React, {useState, useContext } from 'react'
import { View, Text, StyleSheet,TextInput, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/AuthContext';

const SignIn = ( {navigation}) => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { state, signin, clearErrorMessage } = useContext(Context);

    return (
        <View style = {styles.main}>
            <View style = {styles.fieldBox}>
                <TextInput 
                    autoCorrect = {false}
                    autoCapitalize = 'none'
                    style = {styles.textField}
                    placeholder = 'Email'
                    value = {email}
                    onChangeText = {setEmail}
                />

                <TextInput 
                    autoCorrect = {false}
                    autoCapitalize = 'none'
                    style = {styles.textField}
                    placeholder = 'Password'
                    secureTextEntry = {true}
                    value = {password}
                    onChangeText = {setPassword}
                />

                <Text style = {styles.errorText}>{state.errorMessage}</Text>

                <TouchableOpacity 
                onPress = {()=>{
                    signin({email,password})
                }} 
                style = {styles.loginBtn}>
                    <Text style = {{fontWeight: "bold"}}>Login</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

SignIn.navigationOptions = {
    header: null
  };

const styles = StyleSheet.create({
    main : {
        flex : 1,
        backgroundColor : '#DD2C00',
        
    },
    fieldBox : {
        marginTop: 150,
        marginHorizontal: 20,
    },
    textField : {
        borderWidth : 1,
        borderColor : 'white',
        height : 45,
        backgroundColor : '#EDE7F6',
        borderRadius: 20,
        marginTop : 20,
        paddingLeft : 10
    },
    loginBtn : {
        marginTop : 10,
        backgroundColor : 'white',
        padding : 10,
        borderRadius : 10, 
        alignSelf : "center",
        paddingHorizontal : 40,
        paddingVertical : 15,
        shadowColor : '#311B92',
        
        
    },
    errorText : {
        alignSelf : "center", 
        color : 'white', 
        marginTop : 5
    }
})

export default SignIn
