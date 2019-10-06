import createDataContext from './createDataContext';
import shopApi from '../api/shopApi';
import { navigate } from '../navigationRef';
import * as SecureStore from 'expo-secure-store';


const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return { errorMessage: '', token: action.payload.token, email : action.payload.email };

    case 'add_error':
    return { ...state, errorMessage: action.payload };

    case 'signout':
      return {token : null, email : null, errorMessage : ''}

    case 'auto-login' : 
      return {token : action.payload.token, email : action.payload.email}

    default:
      return state;
  }
};


const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await shopApi.post('/user/login', { email, password });
    
    //console.log(response.data)

    if(response.data.code === 201){
      dispatch({ type: 'signin', payload: {token : response.data.api_token,email : response.data.email} });
      await SecureStore.setItemAsync('token', response.data.api_token);
      await SecureStore.setItemAsync('email',response.data.email);
      navigate('mainFlow');
    }else{
      dispatch({
        type: 'add_error',
        payload: 'Email or Password Invalid!'
      });
     
    }
    
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in'
    });
  }
};


const autoLogin = dispatch => async () => {
      const api_token = await SecureStore.getItemAsync('token');
      const email = await SecureStore.getItemAsync('email');
  try {
    const response = await shopApi.post('/user/auto-login', { email, api_token });   
    //console.log(response.data)
    if(response.data.code === 201){
      dispatch({type : 'auto-login', payload: {token : api_token,email : email}})
      navigate('mainFlow');
    }else{
      navigate('loginFlow');
    }
  } catch (err) {
    
  }
};

const signOut = dispatch => async () => {
  await SecureStore.deleteItemAsync('token')
  dispatch({type : 'signout'})
  navigate('loginFlow');
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, autoLogin, signOut },
  { email : null, token: null, errorMessage: '' }
);