import createDataContext from './createDataContext';
import shopApi from '../api/shopApi';
import {navigate} from '../navigationRef'



const accountReducer = (state, action) => {
  switch (action.type) {
    
    case 'get_profile' : 
    return {...state, userProfile : action.payload};
   

    default:
      return state;
  }
};

const getUserProfile = dispatch => async (auth) => {
    try {
        const response = await shopApi.post('/user/showProfile',{email : auth.email, api_token : auth.api_token})
        //console.log(response.data);
        dispatch({type : 'get_profile',payload : response.data})

    } catch (err) {
        console.log(err);
        
    }
}

const setUserProfile = dispatch => async (auth,userProfile,callback) => {
    try {
        const response = await shopApi.post('/user/update',{email : auth.email, api_token : auth.api_token, name : userProfile.name,address : userProfile.address, country : userProfile.country,city : userProfile.city,postal_code : userProfile.postal_code, phone : userProfile.phone})
        console.log(response.data);
        //dispatch({type : 'get_profile',payload : response.data})
        if(response.data.code === 201){
            alert("Profile Updated!")
           if(callback){
               callback()
           }
        }

    } catch (err) {
        console.log(err);
        
    }
}




export const { Provider, Context } = createDataContext(
    accountReducer,
  { setUserProfile, getUserProfile },
  { userProfile : {} }
);

