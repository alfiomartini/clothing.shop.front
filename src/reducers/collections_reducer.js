// import SHOP_DATA from '../assets/ShopData.js';
import {UPDATE_SHOP_DATA} from './action_types.js';

const INITIAL_STATE = {
  collections:null
}

// console.log('INITIAL state', INITIAL_STATE)
const collectionsReducer = (state=INITIAL_STATE, action) => {
  switch (action.type){
    case UPDATE_SHOP_DATA:
      return {
        ...state,
        collections:action.payload
      };
      
    default: return state;
  }
}

export default collectionsReducer;