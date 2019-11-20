import createDataContext from './createDataContext';
import shopApi from '../api/shopApi';
import { navigate } from '../navigationRef';
import * as SecureStore from 'expo-secure-store';


const cartReducer =  (state, action) => {
  switch (action.type) {

    case 'add_to_cart':
        return {...state, Cart: [...state.Cart, action.payload]}

    case 'direct_buy':
      return {...state, buyCart: [action.payload]}

    case 'save_details_cart':
      return {...state, detailsCart: [action.payload]}
  
   
    default:
      return state;
  }
};

const directBuyCart = (dispatch) => async (cartItem) => {
  dispatch({type: 'direct_buy', payload: cartItem})

}

const addToCart = (dispatch) => async (cartItem) => {
  dispatch({type: 'add_to_cart', payload: cartItem})

  // try{
  //   SecureStore.getItemAsync('cart')
  //     .then(async(cart)=>{
  //       //console.log(cart)
  //       const c = cart ? JSON.parse(cart) : [];
  //       c.push(cartItem)
  //       await SecureStore.setItemAsync('cart', JSON.stringify(c));
  //       //console.log(c)
  //     })
  //   //cart.concat(cartItem)
    

    
  // }catch(e){

  // }
  
 

  //   AsyncStorage.getItem('contacts')
  // .then((contacts) => {
  //   const c = contacts ? JSON.parse(contacts) : [];
  //   c.push(con);
  //   AsyncStorage.setItem('contacts', JSON.stringify(c));
  // });

    // console.log(JSON.parse(cart))
}

const getCart = dispatch => async () => {
  
}

const getBuyCartDetails = (dispatch) => async (Items) => {
  try{
    const response = await shopApi.post('/order/show-cart',{carts: Items})
    //console.log(response.data)
    dispatch({type: 'save_details_cart', payload: response.data})
    
  }catch(err){

  }
}


export const { Provider, Context } = createDataContext(
    cartReducer,
  { addToCart, getCart, directBuyCart, getBuyCartDetails },
  { Cart: [], buyCart: [], detailsCart: [] }
);