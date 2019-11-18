import createDataContext from './createDataContext';
import shopApi from '../api/shopApi';
import { navigate } from '../navigationRef';
import * as SecureStore from 'expo-secure-store';


const cartReducer = (state, action) => {
  switch (action.type) {

    case 'add_to_cart':
        return {...state, Cart: [...state.Cart, action.payload]}
   
    default:
      return state;
  }
};

const addToCart = dispatch => async (cartItem) => {
    dispatch({type: 'add_to_cart', payload: cartItem})
}


export const { Provider, Context } = createDataContext(
    cartReducer,
  { addToCart },
  { Cart: [] }
);