import React, { useState, useContext, useEffect } from 'react'
import { View, Text,Button, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as HomeContext } from '../context/HomeContext';
import {Context as AccountContext} from '../context/AccountContext'

import ProductList from '../components/ProductList';


const HomeScreen = () => {
    const [term, setTerm] = useState('');
    const { state } = useContext(AuthContext);
    const { state: {products}, getAllProducts } = useContext(HomeContext);
    const { getUserProfile } = useContext(AccountContext);
    

    useEffect(()=>{
        
        getAllProducts({email : state.email, api_token : state.token});
        getUserProfile({email : state.email, api_token : state.token})
        
    },[])

    return (
        <>
        
            <SearchBar
                    term={term}
                    onTermChange={setTerm} 
                />
        <ScrollView>
            <ProductList
                results={products}
                title="Cost Effective"
                />
        </ScrollView>
            
        </>
    )
}

HomeScreen.navigationOptions = {
    title: 'Home',
    
  };

export default HomeScreen
