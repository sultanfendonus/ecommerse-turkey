import React, {useContext} from 'react'
import { View, Text , SafeAreaView, StyleSheet, Platform } from 'react-native'
import { Button } from 'react-native-elements';
import { Context } from '../context/AuthContext';

const AccountScreen = ({navigation}) => {
    const { signOut } = useContext(Context);

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
