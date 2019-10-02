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
import { setNavigator } from './src/navigationRef';
import { FontAwesome } from '@expo/vector-icons';
import AutoLogin from './src/screen/AutoLogin';

const HomeScreenFlow = createStackNavigator({
    Home : HomeScreen,
});

HomeScreenFlow.navigationOptions = {
  title: 'Home',
  tabBarIcon: <FontAwesome name="home" size={20} />
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
    Account : AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
        <AuthProvider>
          <App
            ref={navigator => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
  );
};