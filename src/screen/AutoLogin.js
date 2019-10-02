import React, {useContext, useEffect} from 'react'
import { View, Text } from 'react-native'
import { Context } from '../context/AuthContext';

const AutoLogin = () => {
    const { autoLogin } = useContext(Context);

    useEffect(()=>{
        autoLogin();
    },[])

    return (
        <View>
            
        </View>
    )
}

export default AutoLogin
