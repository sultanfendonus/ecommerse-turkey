import createDataContext from './createDataContext';
import shopApi from '../api/shopApi';



const homeReducer = (state, action) => {
  switch (action.type) {

    case 'all_products' : 
     return {products : action.payload};

     case 'single_Product' : 
     return {...state, singleProduct : action.payload};

     case 'choose_product' : 
     return {...state, chooseOption: { ...state.chooseOption, [action.payload.name]:action.payload.choise}};

     case 'choose_color' : 
     return {...state, chooseColor: action.payload};

     case 'clear_choose' : 
     return {...state, chooseOption : action.payload, chooseColor : action.payload};

     case 'brand_image' : 
     return {...state, brandImage : action.payload};

    default:
      return state;
  }
};


const getAllProducts = dispatch => async (auth) => {
    try {
        const response = await shopApi.post('/product/all-products',{email : auth.email, api_token : auth.api_token})
        console.log(response.data);
        dispatch({type : 'all_products',payload : response.data})

    } catch (err) {
        console.log(err);
        
    }
    
  }

  const getSingleProductWithDescriptions = dispatch => async (auth) => {
    try {
        const response = await shopApi.post('/product/single-product',{email : auth.email, api_token : auth.api_token, product_id: auth.id})
        //console.log(response.data.choice_options);
        console.log(response.data);
        dispatch({type : 'single_Product',payload : response.data})

    } catch (err) {
        console.log(err);
        
    }
    
  }


  const setUserChoise = dispatch => async (name,choise) => {

    dispatch({type : 'choose_product',payload : {name : name, choise : choise }})
  }

  const setUserChoiseColor = dispatch => async (choise) => {

    dispatch({type : 'choose_color',payload : choise})
  }

  const clearChoose = dispatch => async () => {

    dispatch({type : 'clear_choose', payload : {}})
  }

  const saveBrandImage = dispatch => async (image) => {
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    let data = new FormData();

    data.append("logo", {
        uri: image.uri,
        name: "filename",
        type: "image/jpeg"
      });

    try {
      const response = await shopApi.post('/order/upload-logo',data, config)
      dispatch({type : 'brand_image', payload : {serverUrl: response.data}})

      } catch (err) {
          console.log(err);
          
      }
    
  }




export const { Provider, Context } = createDataContext(
  homeReducer,
  { getAllProducts, getSingleProductWithDescriptions, setUserChoise, setUserChoiseColor,clearChoose, saveBrandImage },
  { products : [], singleProduct : null, chooseOption : null, chooseColor : null, brandImage: null }
);