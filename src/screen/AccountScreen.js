import React, {useContext,useEffect} from 'react'
import { View, Text , SafeAreaView, StyleSheet, Platform } from 'react-native'
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import {Context as AccountContext} from '../context/AccountContext'

const AccountScreen = ({navigation}) => {
    const { signOut } = useContext(AuthContext);


    return (
        <SafeAreaView style={styles.container}>

            <Button
                    onPress = {()=>navigation.navigate('ProfileEditScreen')}
                    title="Profile Update"
                />

            <Button
                buttonStyle={{backgroundColor: 'red'}}
                backgroundColor = {'red'}
                onPress = {()=>signOut()}
                title="Sign Out"
            />

        </SafeAreaView>
    )
}

AccountScreen.navigationOptions = {
    title: 'Account'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
        
    },
})


export default AccountScreen
