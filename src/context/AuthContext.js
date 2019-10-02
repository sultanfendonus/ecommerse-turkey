import createDataContext from './createDataContext';
import shopApi from '../api/shopApi';
import { navigate } from '../navigationRef';
import * as SecureStore from 'expo-secure-store';


const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return { errorMessage: '', token: action.payload };

    case 'add_error':
    return { ...state, errorMessage: action.payload };

    case 'signout':
      return {token : null, errorMessage : ''}

    default:
      return state;
  }
};


const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await shopApi.post('/login', { email, password });
    
    //console.log(response.data)

    if(response.data.code === 401){
      dispatch({
        type: 'add_error',
        payload: 'Email or Password Invalid!'
      });
    }else{
      dispatch({ type: 'signin', payload: response.data.api_token });
      await SecureStore.setItemAsync('token', response.data.api_token);
      await SecureStore.setItemAsync('email',response.data.email);
      navigate('mainFlow');
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
    const response = await shopApi.post('/auto-login', { email, api_token });   
    //console.log(response.data)
    if(response.data.code === 201){
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
  { token: null, errorMessage: '' }
);