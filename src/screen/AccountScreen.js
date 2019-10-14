import React, {useContext,useEffect} from 'react'
import { View, Text , SafeAreaView, StyleSheet, Platform } from 'react-native'
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import {Context as AccountContext} from '../context/AccountContext'

const AccountScreen = ({navigation}) => {
    const { state, signOut } = useContext(AuthContext);
    const { getUserProfile } = useContext(AccountContext);

    useEffect(()=>{
        getUserProfile({email : state.email, api_token : state.token})
    },[])

    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <Button
                onPress = {()=>signOut()}
                title="Sign Out"
            />

        <Button
                onPress = {()=>navigation.navigate('ProfileEditScreen')}
                title="Profile Update"
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 35 : 0
    },
})


export default AccountScreen
