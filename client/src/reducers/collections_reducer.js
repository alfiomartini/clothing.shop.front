// import SHOP_DATA from '../assets/ShopData.js';
import {UPDATE_SHOP_DATA} from './action_types.js';
import {FETCH_COLLECTION_ERROR, FETCH_COLLECTION_FINISHED, FETCH_COLLECTION_STARTED} from './action_types';

const INITIAL_STATE = {
  collections:null,
  fetching: false,
  errorMessage:''
}

// console.log('INITIAL state', INITIAL_STATE)
const collectionsReducer = (state=INITIAL_STATE, action) => {
  switch (action.type){
    case UPDATE_SHOP_DATA:
      return {
        ...state,
        collections:action.payload
      };
      
    case FETCH_COLLECTION_STARTED:
      return {
        ...state,
        fetching:true
      };
    
    case FETCH_COLLECTION_FINISHED:
      return {
        ...state,
        collections:action.payload,
        fetching: false
      }

    case FETCH_COLLECTION_ERROR:
      return {
        ...state,
        errorMessage:action.payload,
        fetching:false
      }
    default: return state;
  }
}

export default collectionsReducer;