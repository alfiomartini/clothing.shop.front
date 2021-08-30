import SHOP_DATA from '../assets/ShopData.js';
import {UPDATE_SHOP_DATA} from './action_types.js';

const INITIAL_STATE = {
  collections:SHOP_DATA
}

// console.log('INITIAL state', INITIAL_STATE)
const collectionsReducer = (state=INITIAL_STATE, action) => {
  switch (action.type){
    case UPDATE_SHOP_DATA: 
      // console.log('Shop Data Updated');
      return {
        ...state,
        collections:action.payload
      };
      
    default: return state;
  }
}

export default collectionsReducer;