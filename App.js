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
import { setNavigator } from './src/navigationRef';
import { FontAwesome } from '@expo/vector-icons';
import AutoLogin from './src/screen/AutoLogin';
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';

const HomeScreenFlow = createStackNavigator({
    Home : HomeScreen,
    ProductDetails : ProductDetailsScreen
});



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
    Account : AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <HomeProvider>
      <AuthProvider>
          <App
            ref={navigator => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
    </HomeProvider>
        
  );
};