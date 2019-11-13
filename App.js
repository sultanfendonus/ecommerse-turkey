import React from 'react';
import { createAppContainer,
  createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import SignIn from './src/screen/SignIn';
import SignUp from './src/screen/SignUp';
import HomeScreen from './src/screen/HomeScreen';
import CartScreen from './src/screen/CartScreen';
import AccountScreen from './src/screen/AccountScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as HomeProvider } from './src/context/HomeContext';
import { Provider as AccountProvider } from './src/context/AccountContext';
import { setNavigator } from './src/navigationRef';
import { FontAwesome,MaterialIcons } from '@expo/vector-icons';
import AutoLogin from './src/screen/AutoLogin';
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';
import ProductOptionScreen from './src/screen/ProductOptionScreen';
import ProfileEditScreen from './src/screen/ProfileEditScreen';
import OrderConfirmationScreen from './src/screen/OrderConfirmationScreen';



// const ProductFlow = createStackNavigator({
  
// })

const HomeScreenFlow = createStackNavigator({
    Home : HomeScreen,
    ProductDetails : ProductDetailsScreen,
    ProductOption : ProductOptionScreen,
    OrderConfirm: OrderConfirmationScreen,
});

const AccountScreenFlow = createStackNavigator({
  Account : AccountScreen,
  ProfileEditScreen : ProfileEditScreen
});

AccountScreenFlow.navigationOptions = ({ navigation }) => {
  
  return {
    title: 'Account',
    tabBarIcon: <MaterialIcons name="account-circle" size={24} />
  };
};



HomeScreenFlow.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === "ProductDetails") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible,
    title: 'Home',
    tabBarIcon: <FontAwesome name="home" size={20} />
  };
};



const switchNavigator = createSwitchNavigator({
  
  AutoLogin : AutoLogin,
  loginFlow: createStackNavigator({
    SignIn : SignIn,
    SignUp : SignUp
  }),
  mainFlow: createBottomTabNavigator({
    HomeScreenFlow,
    Cart : CartScreen,
    AccountScreenFlow
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AccountProvider>
      <HomeProvider>
        <AuthProvider>
            <App
              ref={navigator => {
                setNavigator(navigator);
              }}
            />
          </AuthProvider>
      </HomeProvider>
    </AccountProvider>
    
        
  );
};