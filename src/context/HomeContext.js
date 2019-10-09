import createDataContext from './createDataContext';
import shopApi from '../api/shopApi';



const homeReducer = (state, action) => {
  switch (action.type) {

    case 'all_products' : 
     return {products : action.payload};

     case 'single_Product' : 
     return {...state,singleProduct : action.payload};

    default:
      return state;
  }
};


const getAllProducts = dispatch => async (auth) => {
    try {
        const response = await shopApi.post('/product/all-products',{email : auth.email, api_token : auth.api_token})
        //console.log(response.data);
        dispatch({type : 'all_products',payload : response.data})

    } catch (err) {
        console.log(err);
        
    }
    
  }

  const getSingleProductWithDescriptions = dispatch => async (auth) => {
    try {
        const response = await shopApi.post('/product/single-product',{email : auth.email, api_token : auth.api_token, product_id: auth.id})
        console.log(response.data.choice_options);
        dispatch({type : 'single_Product',payload : response.data})

    } catch (err) {
        console.log(err);
        
    }
    
  }

export const { Provider, Context } = createDataContext(
  homeReducer,
  { getAllProducts, getSingleProductWithDescriptions },
  { products : [], singleProduct : null }
);